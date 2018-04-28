var mongoose=require("mongoose");
//连接数据库
mongoose.connect("mongodb://localhost:27017/house");
//获得数据库对象
var db=mongoose.connection;
db.once("open",function () {
    console.log("数据库连接成功");

})
db.on("error",function (err) {
    console.error(err)
})
//构建集合的骨架搭建
var schema=new mongoose.Schema({
    user:{
        type:String,
        default:"张三",

    },
    age:{
        type:Number,
        default:18
    }

},{
    collection:"person"
})
//创建模型,才能对文档进行增删改查
var Model = db.model("person",schema);
Model.find({},function (err,docs) {
    if (err){
        console.error(err);
        return
    }
    console.log(docs);
})

//实例化model得到实体(Entity)
/*var myEntity=new Model({
    user:"张三",
    age:10
})
myEntity.save(function (err,doc) {
    if (err){
        console.error(err);
        return
    }
    console.log(doc)
})*/
//插入
/*Model.create({user:"李四",age:45},function (err,doc) {
    if (err){
        console.error(err)
        return
    }
    console.log(doc);
})*/
//更新
/*Model.update({user:"李四"},{$set:{user:"小王"}},function (err,message) {
    if (err){
        console.error(err);
        return
    }
    console.log(message)

})*/
//更新多条
/*Model.update({user:"张三"},{$set:{user:"小bb"}},{multi:true},function (err,message) {
    if (err){
        console.error(err);
        return
    }
    console.log(message)
})*/
/*Model.remove({user:"小马"},function (err,message) {
    if(err){
        console.error(err)
        return
    }
    console.log(message)                                    
})*/
// Model.findOne({},function (err,doc) {
//     if (err){
//         console.error(err);
//         return
//     }
//     console.log(doc)
// })
//通过id查
// Model.findById("5ab1c1cc9ff6b1240b1b6d38",function (err,mes) {
//     if (err){
//         console.error(err)
//     }
//     console.log(mes)
// })
//只查age
/*Model.find({},{age:1,_id:0},function (err,docs) {
    if (err){
        console.error(err);
        return
    }
    console.log(docs)
})*/
//查询age小于33
/*Model.find({age:{$lt:33}},function (err,docs) {
    if (err){
        console.error(err)

    }
    console.log(docs)
})*/
//查询年龄28,姓名xiaoxiao
/*Model.find({age:28,user:"xiaoxiao"},function (err,docs) {
    console.log(docs)
})*/
//或
/*Model.find({$or:[{age:45},{user:"xiaoxiao"}]},function (err,docs) {
    console.log(docs)
})*/
//查询年龄66的,小明和阿美
// Model.find({age:66,$or:[{user:'小明'},{user:'阿美'}]},function (err,docs) {
//     console.log(docs);
// })
//查三条
Model.find({},{},{limit:3},function (err,docs) {
    console.log(docs)
})
//查下标3到6
Model.find({},{},{limit:3,skip:3},function (err,docs) {
    console.log(docs)
})
//排序倒序-1,正序1
Model.find({},{},{limit:3,skip:1,sort:[{age:-1}]},function (err,docs) {
    console.log(docs)
})