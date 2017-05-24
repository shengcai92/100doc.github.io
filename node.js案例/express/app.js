var express = require('express');
var ejs = require('ejs');  //我是新引入的ejs插件
var port = process.env.PORT || 3000;
var app = express();
app.set('views','./views');
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.listen(port);


//index jade
app.get('/',function(req,res){
	res.render('index',{title:'HTML'});
})
// // detail jade
// app.get('/movie/:id',function(req,res){
// 	res.render('detail',{
// 		title:'imooc 详情页'
// 	})
// })

// //admin jade
// app.get('/admin/movie',function(req,res){
// 	res.render('admin',{
// 		title:'imooc 后台录入页'
// 	})
// })

// //admin jade
// app.get('/admin/list',function(req,res){
// 	res.render('list',{
// 		title:'imooc 列表页'
// 	})
// })
