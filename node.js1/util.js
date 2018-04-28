/*
util:实用工具,提供方便快捷的方法供原生API,应用程序,以及开发者使用
 */
/*
1,使用原型继承
2,实现对象的输出
 */
var util=require("util")
function Dad() {

}
function Son() {

}
 Dad.prototype.driving=function () {
     console.log("开着宝马")
 }
 var dad = new Dad();
 dad.driving()
//
// Son.prototype=new Dad();
// Son.prototype.constructor=Son;
// Son.prototype.driving=function () {
//     console.log("开着奥迪")
//
// }
// var son=new Son();
// son.driving();
util.inherits(Son,Dad);
var son = new Son();
son.driving()
console.log(typeof son)
var str = util.inspect(son)//将对象转化为字符串
console.log(typeof str)