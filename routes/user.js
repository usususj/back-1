const express = require('express');
const { e } = require('nunjucks/src/filters');
const User = require('../models/user');

const router = express.Router();

router.route('/login')
  .post(async (req, res, next) => {
    try {
      const user = await User.findOne({
        where:{email:req.body.email}
      })
      if(user!=null){
        if(req.body.password==user.password){
          const userObj={
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

  router.route('/singup')
    .post(async (req, res, next)=>{
      try{
        if(req.body.email!=null && req.body.password!=null && req.body.name!=null){

          const exist = await User.findOne({
            where:{email:req.body.email}
          })
          if(exist!=null){
         
            console.log("이미 가입")
            res.sendStatus(400);
          }
          else{
            const user=await User.create({
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

module.exports = router;
