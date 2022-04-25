const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.route('/login')
  .post(async (req, res, next) => {
    try {
      const user = await User.findAll({
        attributes: ['email',req.body.email]
      })
      if(user!=null){
        if(req.body.password==user.password){
          const userObj={
            UserID : user.UserID,
            email : user.email,
            password : user.password,
            name : user.name
          }
        }
      }

      console.log(user);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      next(err);
    }
  });

module.exports = router;
