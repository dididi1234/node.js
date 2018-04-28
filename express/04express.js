/*
express可以进行模板文件的数据渲染,res.render()
 */
var express=require("express");
var app=express();

//设置使用的模板引擎
//app.set("view engine","pug");
app.set("view engine","ejs");
//设置模板文件所在的文件夹
app.set("views","./views");
app.get("/index.html",function (req,res) {
    // res.render("pug1.pug",{
    //     title:"pug 测试",
    //     message:"这是express对模板文件的渲染"
    // })
    res.render("index.ejs",{
        title:"ejs 测试",
        message:"这是ejs对模板文件的渲染"
    })
})

app.listen(9999)