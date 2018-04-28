var fs = require("fs");
//异步写法
fs.readFile("mine.js","utf-8",function (err,data) {
    if (err){
        console.error(err);
    }else{
        console.log(data)
    }
})
//同步的写法
var data=fs.readFileSync("mine.js","utf-8");
console.log(data);
console.log("读取之后")