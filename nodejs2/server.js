var http=require("http");
var fs=require("fs");
http.createServer(function (req,res) {
    /*if (req.url=="/index.html"){
        var rs=fs.createReadStream("index.html");
        rs.pipe(res)
    }else if (req.url=="/index.css"){
        var rs=fs.createReadStream("index.css");
        rs.pipe(res)
    }
    console.log(req.url);
    res.end
    console.log(req.url);
    res.end("");
    */
    var path="."+req.url;
    if (fs.existsSync(path)){//判断文件是否存在
        //文件存在
        var rs = fs.createReadStream(path);
        rs.pipe(res);

    }else{
        res.statusCode=404;//状态码设置
        var rs = fs.createReadStream("./404.html");
        rs.pipe(res);
    }
}).listen(8081)