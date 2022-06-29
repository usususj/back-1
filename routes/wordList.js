const express = require('express');
const { e } = require('nunjucks/src/filters');
const WordList = require('../models/WordList');


const router = express.Router();

router.route('/dictAll').get(async(req, res, next) =>{
    try{
        const wordAll=await WordDict.findAll();
        res.status(201).json(wordAll);
    }catch (err) {
        console.error(err);
        next(err);
      }
})

router.route('/word').get(async(req, res, next) =>{
    try{
        const wordDict = await WordDict.findOne({
            where:{Word:req.body.Word}
        })
        if(wordDict!=null){
            const videoObj={
                Word : wordDict.Word,
                videoURL: wordDict.videoURL,
                wordImg: wordDict.wordImg,
                Motion : wordDict.Motion
            }
            console.log(videoObj);
            res.status(201).json(videoObj);
        }
        else{
            console.log("단어 없음");
            res.sendStatus(404);
        }
    }catch (err) {
        console.error(err);
        next(err);
      }



})


  
    
module.exports = router;
