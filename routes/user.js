const express = require('express');
const { e } = require('nunjucks/src/filters');
const User = require('../models/user');
const nodemailer = require('nodemailer');


const router = express.Router();

//로그인
router.route('/login')
  .post(async (req, res, next) => {
    try {

      //사용자 찾기
      const user = await User.findOne({
        where:{ email:req.body.email }
      })
      
      if(user!=null){          
        //사용자&비밀번호 일치
        if(req.body.password == user.password){
          const userObj = {
            UserID : user.UserID,
            email : user.email,
            password : user.password,
            name : user.name
          }

          console.log(userObj);
          res.status(201).json(userObj);

        }
        else{
          console.log("비밀번호 틀림");
          res.sendStatus(404);
        }
      }
      else{
        console.log("아이디 없음");
        res.sendStatus(404);
      }

    } catch (err) {
      console.error(err);
      next(err);
    }
  });


  //회원가입
  router.route('/singup')
    .post(async (req, res, next)=>{
      try{

        if(req.body.email!=null && req.body.password!=null && req.body.name!=null){

          //기존 사용자 검색
          const exist = await User.findOne({
            where:{email:req.body.email}
          })

          if(exist!=null){  
         
            console.log("이미 가입")
            res.sendStatus(400);
          }
          else{ //생성
            const user = await User.create({
              email: req.body.email,
              password: req.body.password,
              name: req.body.name
            
              });
            console.log("등록됨")
            res.sendStatus(200);
          }
    
        }   
        
        else{
          console.log("에러임")
          res.sendStatus(400);
        }
      }catch(err){
        console.error(err);
        next(err);
        
      }
    });




    /* min ~ max까지 랜덤으로 숫자를 생성하는 함수 */ 
  var generateRandom = function (min, max) {
    var ranNum = Math.floor(Math.random()*(max-min+1)) + min;
    return ranNum;
  }

  //이메일 인증
  router.route('/check')
    .post(async (req, res, next)=>{
      try{
      
        const smtpTransport = nodemailer.createTransport({
          service: "gmail",
          auth: {
              user: "tjwjdus@gmail.com",
              pass: "1031uskohsj*"
          },
          tls: {
              rejectUnauthorized: false
          }
        });

        const Checking = generateRandom(111111,999999)
        const mailToChecking = {
          email : req.body.email,
          Checking : Checking
      }

        const mailOptions = {
          from: 'PIXEL',
          to: req.body.email,
          subject: '[수락:손의 즐거움] 회원가입 인증 메일입니다.',
          text: '오른쪽 인증번호를 입력해주세요' + Checking
        };

        smtpTransport.sendMail(mailOptions, function(error, info){
          if(error){
            console.log("이메일 인증 에러");
            res.sendStatus(404)
          } else{
            console.log('email sent: '+ info.response);
            res.status(200).send(mailToChecking);
          }
          smtpTransport.close();
        })


      }catch(err){



      }
    })
module.exports = router;
