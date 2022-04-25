const express = require('express');
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

module.exports = router;
