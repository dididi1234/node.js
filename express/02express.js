const express=require("express");
const app = express();
const fs=require("fs");
var querystring=require("querystring");
const bodyarser=require("body-parser")
/*
中间件:放在客户端请求和服务器响应的一个中间处理过程.
中间件的分类
自定义中间件(应用级中间件,路由级中间件,错误中间件)
内置中间件
第三方中间件(body-parser,cookie-parse,session-parser)

中间件特点
中间件都可以对req,res进行处理
中间件内部req,res是一样的
中间件都可以通过next()向后一个中间件进行传递
中间件一般写在app创建之后,app.method之前
 */



//中间件挂载使用app.use
app.use(function (req,res,next) {
    var date=new Date();
    console.log("当前时间是" + date);
    next()
})
/*
app.get("*",function (req,res) {
    res.send("啊啊哈");
})
*/
//中间件挂载在路径是/abc的应用上
/*app.use("/abc",function (req,res,next) {
    //将post参数提取出来放在req.body中
    if (req.method=="GET"){
        var err=new Error("这是get,不能处理")
        next(err);//想要错误中间件,在next加参数
        return;
    }
    var str="";
    req.on("data",function (chunk) {
        str+=chunk;
    })
    req.on("end",function () {
        var obj=querystring.parse(str);
        req.body=obj;
        next();
    })
})*/
app.use(bodyarser({
    urlencoded:{
        extent:false
    }
}))
//错误中间件
app.use(function (err,req,res,next) {
    console.error(err);
    next()
})
app.post("/abc",function (req,res) {
    console.log(req.body);
    res.send(req.body);
})
app.get("*",function (req,res) {
    var path=__dirname+req.path;// /index.html
    if(fs.existsSync(path)){
        res.sendFile(path);
    }else{
        res.sendFile(__dirname+"/404.html")
    }
})




app.listen("8999");