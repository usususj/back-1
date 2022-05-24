
const jsdom = require("jsdom");
var fs = require('fs');
$ = require('jquery')(new jsdom.JSDOM().window);

var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();
var url = 'http://api.kcisa.kr/openapi/service/rest/meta13/getCTE01701'; /*URL*/
var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + '6160487f-386e-4730-853f-6dbeb882f327'; /*서비스키*/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('300'); /*세션당 요청레코드수*/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /*페이지수*/

xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
if (this.readyState == 4) {

console.log('status: ' + this.status);
console.log('resultCode: ' + $(this.responseText).find('resultCode').text());
console.log('resultMsg: ' + $(this.responseText).find('resultMsg').text());

var item = $(this.responseText).find('item');
$(item).each(function(){


var urls = $(this).find("subDescription").text();
var mp4 = '';
for (var i=5; i<urls.length; i++){
    if(urls[i] == '|'){
        break;
    }
    mp4 += urls[i];
}
console.log(mp4);
var result='';
mp4=mp4.split(".mp4");
for (var i in mp4){
     result+=mp4[i];
}
result +=".mp4\n";


fs.appendFileSync('text1.txt', result, 'utf8', function(error){ 
    
    console.log('write end') });

});

};

}
xhr.send('');