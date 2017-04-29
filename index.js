/*
'use strict';

const http = require('http');
const https = require('https');
const crypto = require('crypto');

const HOST = 'api.line.me'; 
const REPLY_PATH = '/v2/bot/message/reply';//リプライ用
const CH_SECRET = 'xxxxxxxx'; //Channel Secretを指定
const CH_ACCESS_TOKEN = 'xxxxxx'; //Channel Access Tokenを指定
const SIGNATURE = crypto.createHmac('sha256', CH_SECRET);
const PORT = 3000;

/**
 * httpリクエスト部分
 */
/*
const client = (replyToken, SendMessageObject) => {    
    let postDataStr = JSON.stringify({ replyToken: replyToken, messages: SendMessageObject });
    let options = {
        host: HOST,
        port: 443,
        path: REPLY_PATH,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
            'X-Line-Signature': SIGNATURE,
            'Authorization': `Bearer ${CH_ACCESS_TOKEN}`,
            'Content-Length': Buffer.byteLength(postDataStr)
        }
    };

    return new Promise((resolve, reject) => {
        let req = https.request(options, (res) => {
                    let body = '';
                    res.setEncoding('utf8');
                    res.on('data', (chunk) => {
                        body += chunk;
                    });
                    res.on('end', () => {
                        resolve(body);
                    });
        });

        req.on('error', (e) => {
            reject(e);
        });
        req.write(postDataStr);
        req.end();
    });
};

http.createServer((req, res) => {    
    if(req.url !== '/' || req.method !== 'POST'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('');
    }

    let body = '';
    req.on('data', (chunk) => {
        body += chunk;
    });        
    req.on('end', () => {
        if(body === ''){
          console.log('bodyが空です。');
          return;
        }

        let WebhookEventObject = JSON.parse(body).events[0];        
        //メッセージが送られて来た場合
        if(WebhookEventObject.type === 'message'){
            let SendMessageObject;
            if(WebhookEventObject.message.type === 'text'){
                SendMessageObject = [{
                    type: 'text',
                    text: WebhookEventObject.message.text
                }];
            }
            client(WebhookEventObject.replyToken, SendMessageObject)
            .then((body)=>{
                console.log(body);
            },(e)=>{console.log(e)});
        }

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('su');
    });

}).listen(PORT);

console.log(`Server running at ${PORT}`);
*/

var http = require('http');
var restify = require('restify');

// サーバー生成
var server = restify.createServer();
var port = process.env.port || 8080;

// http://0.0.0.0:8080/hello_worldにGETリクエストしたときの処理
function helloWorld(req, res, next){
	// レスポンス
	res.send("Hello");
    console.log('invoke hellowrold');
    //next();
}

// パスと関数の紐付け
// ↓はhttp://0.0.0.0:8080/hello_worldにGETリクエストしたらhelloWorld関数を実行
server.get('/hello_world', helloWorld);

server.listen(port, function() {
	console.log('%s listening at %s', server.name, server.url);
});


/*
var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello Azure!Go!!Go!!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
*/

