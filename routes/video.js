const express = require('express');
const { e } = require('nunjucks/src/filters');
const VIDEO = require('../models/video');


const router = express.Router();
router.route('/video').post(async(req, res, next) =>{
    try{
        const video = await VIDEO.findOne({
            where:{videoname:req.body.videoname}
        })
        if(videoname!=null){
            const videoObj={
                VideoID : video.VideoID,
                videoname: video.videoname,
                videoURL: video.videoURL,
                Motion : video.Motion
            }
            console.log(videoObj);
            res.status(201).json(videoObj);
        }
        else{
            console.log("수어영상 없음");
            res.sendStatus(404);
        }
    }catch (err) {
        console.error(err);
        next(err);
      }



})


  
    
module.exports = router;
