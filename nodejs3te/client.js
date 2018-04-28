//node的HTTP模块除了可以进行服务器的创建，同样也可以模拟客户端发送请求
//此时client.js实质上就是浏览器
var http = require("http");
var request = http.request({
    host:'localhost',
    port:'8080',
    path:'/client',
    method:'post'
},function (res) {
//    客户端的res也是一个可读流
//    res是服务器返回给客户端的响应
//     console.log(res);
    var str = "";
    res.on("data",function (chunk) {
        str+=chunk;

    })
    res.on("end",function () {
        console.log(str);
    })

})

//发送post请求参数
request.write('code=SDFTFHGSZ3523&openid=fd_2354asrgedg');
//结束本次请求
request.end();