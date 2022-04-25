function helloWorld(){
    console.log('Hello World');
    helloNode();
}

function helloNode(){
    console.log('Hello Node');
}

helloWorld();


/*모듈화*/
//내보내기
module.exports=helloNode;
//여러개 내보내기
exports.node=helloNode;
exports.world=helloWorld
//받기
const x=require('./helloWorld');