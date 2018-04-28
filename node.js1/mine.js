/*
* 一个模块文件代表着一个独立的域,它内部经过定义的变量和方法函数都需要导出,才能供引入该模块的文件进行使用
*
* */
/*模块的导出:module.exports
* 模块的引入:require
* */
var mine2 = require("./mine2");
console.log("我是mine文件")
var hello = "world";
function text(x) {
    return 'hello'+x;
}
module.exports={
    hello:hello,
    text:text
}