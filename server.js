//node不是一种新的语言,它采用的是common.js标准,node.js运行于服务器端
/*node.js的特点
1,跨平台
2,单线程
3,异步回调
4,事件驱动
5,模块化

node.js的使用场景,高并发的请求环境(在线聊天,即时消息推送,小游戏),工具类的封装(express,gulp,webpack)


* */
//引入http模块,使用createserver创建node本地服务器
/*
模块:
1,核心模块(在node安装时自带的)(http,events,fs,path)
2,第三方模块(别人封装的模块,通过下载使用)(express,gulp,webpack)
3,自定义模块(自己封装的模块)(hello.js)

 */
const http = require("http");//核心模块以及第三方模块引入时, 直接取模块名
var server = http.createServer(function (request,response) {
    //request:请求:代表的是每次在浏览器中向服务器所发送的请求的内容
    //request具备url,method属性
    //response:响应,服务器向浏览器返回一些内容

    console.log(request.url);//本次请求的地址

    console.log(request.method);//本次请求的方式
    response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    if (request.url=="/game/index"){
        //response.end("<h1>我是首页</h1>")//end会结束本次响应
        //response.end(1);只能为字符串
        response.write('asdads');
        response.write("hellow");
        response.end();
    }else{
        response.end("hellow world");
    }
    response.end("hello word");
})

//经上步所创建的服务, 需要加上端口号, 才能使用
server.listen("8080");