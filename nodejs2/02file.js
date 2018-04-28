/*
文件操作
 */
//写入文件

var fs=require("fs");
fs.writeFile("text.txt","我是写入的内容",{
    ecoding:"utf8",
    flag:"a"//追加
},function (err) {
    if (err){
    console.error(err);
    }
    console.log("写入成功")
})
//追加写入,异步地追加数据到一个文件，如果文件不存在则创建文件。
fs.appendFile("text.txt","我是追加的内容",function (err) {
    if (err){
        console.error(err)
    }
    console.log("追加成功")
})
//封装一个copy函数,参数分别为sourcePath,destPath,destPath,函数的目的是将sourcePath的文件复制到destPath上
function copy(sourcePath,destPath) {
    fs.readFile(sourcePath,function (err,data) {
        if (err){
            console.error(err)
        }else{
            fs.writeFile(destPath,data,function (err) {
                if (err){
                    console.error(err)
                }else{
                    console.log("复制成功")
                }
            })
        }
    })
}
copy("text.txt","../text.txt")
//判断文件或目录是否存在,如果存在返回值为true,反之返回false
var bol =fs.existsSync("../text.txt");
console.log(bol);

//重命名,对文件和目录都生效
fs.rename("text.txt","new.txt",function (err) {
    if (err){
        console.error(err)
        return

    }
    console.log("重命名成功")
})