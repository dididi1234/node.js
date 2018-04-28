/*目录操作*/
var fs =require("fs");
//创建一个目录
//文件的mode(权限),权限分为三层:用户,群组,任何人
//权限设置用三位八进制数表示
//权限分别用数字代表,数字相加得和代表权限的集成
//可执行 1,可写 2,可读 4.
// fs.mkdir("007",0777,function (err) {
//     if (err){
//         console.error(err);
//         return
//     }
//     console.log("创建成功")
// })
//读取目录
fs.readdir(".",function (err,list) {
    if (err){
        console.error(err)
        return
    }
    console.log(list)
})
//文件目录详情
fs.stat("new.txt",function (err,stas) {
    if (err){
        console.error(err)
        return
    }
    console.log(stas)

})