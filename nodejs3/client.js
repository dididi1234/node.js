//node的HTTP模块除了可以进行服务器的创建, 同样也可以,模拟客户端发送请求
//此时client.js实质上就是浏览器
var http = require("http");
var request = http.request({
    host:'localhost',
    port:'7070',
    path:'/client',
    method:'post'
},function (res) {
    //客户端的res也是一个可读流
    //res是服务器返回给客户端的响应
    console.log(res.statusCode);
    var str = "";
    res.on("data",function (chunk) {
        str += chunk;
        console.log(str);
    })
})
//发送post请求参数
request.write("code=qwesadweq&openid=23");
//结束本次请求
request.end();