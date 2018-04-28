/*
express是node辅导框架之一,轻量,简洁,操作方便
路由
中间键
模板引擎
 */
const express =require("express");
var fs = require("fs");
const  querystring=require("querystring")
//实例化一个应用程序(通过http.createServer()创建的服务器)
var app=express();
//get请求的接收
/*app.get("/",function (req,res) {
    console.log(req.url);
    res.end("hellow world");
})
app.get("/index.html",function (req,res) {
    console.log(req.url);
    console.log(req.path);
    console.log(req.query);
    console.log(req.method);
    console.log(req.hostname);
    //res.end("hellow world");
    res.sendFile(__dirname+req.path)//参数为绝对路径;
})*/
//对所有的文件的请求都get请求
/*app.get("/:a",function (req,res) {
 if (fs.existsSync(__dirname+req.path)){
     console.log(req.path)
     res.sendFile(__dirname+req.path)

 }else{
     res.end("not found")
 }
})
app.post("/post",function (req,res) {
    res.end("233333")
})*/
//任何请求路径
/*app.get("*",function (req,res) {
    var path=__dirname+req.path;// /index.html
    if(fs.existsSync(path)){
        res.sendFile(path);
    }else{
        res.sendFile(__dirname+"/404.html")
    }
})
app.post("/abc",function (req,res) {
    var str ="";
    req.on("data",function (chunk) {
        str+=chunk
    })
    req.on("end",function () {
        console.log(str);
        var obj=querystring.parse(str)
        console.log(obj)
        res.send(obj);//对象自动转换json串
    })
    //res.send("哈哈哈哈哈哈哈哈")//可以返回多种类型数据
})*/
//获取伪静态页面中的参数(reWrite URI),如果是参数就在前面加冒号,后跟一个变量名
app.get("/index/:page/:user",function (req,res) {
    console.log(req.params);
    var page=req.params.page;
    res.send("这是"+page+"页");
})

//添加端口号
app.listen(8088);
//express对任何文件的处理
