const http = require("http");
const url = require("url");
var server=http.createServer(function (req,res) {//客户端每次发送请求时执行
    var path=req.url;
    console.log(path);
    var urlObj=url.parse(path,true);//转化为对象
    console.log(urlObj.query.code);
    res.end();

})
server.listen("8080");