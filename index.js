var http = require('http');
var restify = require('restify');

// サーバー生成
var server = restify.createServer();

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

server.listen((8080), function() {
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

