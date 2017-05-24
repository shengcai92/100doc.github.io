// require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http
var http = require('http');
//服务器地址
var hostname = '127.0.0.1';
//端口号
var port = 3000;
http.createServer(function (request, response) {
	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// 发送响应数据 "Hello World"
	response.end('Hello World\n');
}).listen(port,hostname);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:3000/');




// // es6写法
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`服务器运行在 http://${hostname}:${port}/`);
// });