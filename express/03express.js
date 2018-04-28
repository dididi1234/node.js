/*
Router:路由器,将普通路由进行拆分,具有相同的处理方法放在一个Router上
 */
var express=require("express");
const app=express();

//创建一个路由器相当于miniApp,所以也能够使用get,post等进行请求处理,同时也能使用中间件
//挂载路由器
const IndexRouter=require("./index")
app.use("/index",IndexRouter)
app.listen(1909);