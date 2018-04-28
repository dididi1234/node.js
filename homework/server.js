var http=require("http");
var url = require("url");
var express=require("express");
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/house")
var db=mongoose.connection;
db.once("open",function () {
    console.log("数据库连接成功")
})
var schema=new mongoose.Schema({
    user:{
        type:String,
        default:"张三",

    },
    age:{
        type:Number,
        default:18
    }
},{collection:"person"})
var Model=db.model("person",schema);
var fs=require("fs")
var app= express();
// Model.create({user:"4搜索",age:"18"},function (err,docs) {
//     console.log(docs)
// })
app.get("*",function (req,res) {
    var path=__dirname+req.path;
    var urlObj = url.parse(req.url);
    //console.log(req.url);
    //console.log(req.path);
    if(req.path=="/index.html"){
        res.sendFile(path)
    }
    if (req.path=="/aa"){
        Model.find({},function (err,docs) {
            res.send(docs)
        })
    }
    if(req.path=="/dele"){
        var index=req.query.id;
        console.log(index)
        Model.remove({_id:index},function (err,docs) {
            if (docs["ok"]){
                Model.find({},function (err,docs) {
                    res.send(docs)
                })
            }

        })
    }
    if (req.path=="/add"){
        console.log(req.query.nam)
       Model.create({user:req.query.nam,age:req.query.age},function (err,docs) {
           Model.find({},function (err,docs) {
               res.send(docs)
           })
       })
    }
    //console.log(urlObj);
    //var pathname = urlObj.pathname;
    // if (fs.existsSync(path)){
    //     res.sendFile(path)
    //
    // }else{
    //     res.send("notfount")
    // }

})






app.listen("9090")