var events = require("events");
var util = require("util");
function Goddess() {

}
util.inherits(Goddess,events);
var goddess=new Goddess();
function Boy(name,response) {
    this.name=name;
    this.response=response
}
var boy1=new Boy('备胎一号',function () {
    console.log("买星巴克")
})
var boy2=new Boy('备胎二号',function () {
    console.log("买豆浆");
})
//设置最大监听者数
goddess.setMaxListeners(1);
goddess.on('ele',function () {
    console.log("请喝奶茶");
})
goddess.once('birth',function () {
    console.log("诞生啦")
})
goddess.addListener('ele',boy1.response);

//移出某个事件所有监听者
//goddess.removeAllListeners('ele')
//goddess.removeAllListeners('birth')
    //发布事件
setTimeout(function () {
    goddess.emit("ele");
    goddess.emit("birth");
},1000)

//移出监听者
goddess.removeListener('ele',boy1.response)

goddess.addListener('ele',boy2.response);

