const express = require('express');
const { e } = require('nunjucks/src/filters');
const WordList = require('../models/WordList');
const WordDict = require('../models/WordDict');


const router = express.Router();

router.route('/listAll').post(async(req, res, next) =>{
    try{
        const wordAll=await WordList.findAll({
            where:{
                UserId: req
            },
            include:[{
                model: WordDict,
                required: false,
            }]
        });
        res.status(201).json(wordAll);
    }catch (err) {
        console.error(err);
        next(err);
      }
})

router.route('/listAdd').post(async(req,res,next) =>{
    try {
        const list= await WordList.create({
            UserId: req.body.UserId,
            Word: req.body.Word,
        })
        res.sendStatus(200);
    } catch (error) {
        console.error(err);
        next(err);
    }
})

router.route('/listDel').post(async(req,res,next) =>{
    try {
        WordList.destroy({
            where: {
                UserId: req.body.UserId,
                Word: req.body.Word,
            }
        })
        res.sendStatus(200);
    } catch (error) {
        console.error(err);
        next(err);
    }
})

  
    
module.exports = router;
