var http = require("http");
var url = require("url");
var fs = require("fs");
var querystring = require("querystring");//解析urlencode编码
var formidable = require("formidable");

http.createServer(function (req,res) {
    // console.log(req);
    var urlObj = url.parse(req.url);
    console.log(req.url);
    console.log(urlObj);
    var pathname = urlObj.pathname;
    console.log(pathname);

    if(pathname == '/post'){
        //在服务器中拿到以post传输的数据

        /*var str = "";
        req.on("data",function (chunk) {
            str += chunk
        })
        req.on("end",function () {
            console.log(str);
            var query = querystring.parse(str);
            console.log(query);
        })

        res.end("this is post request");*/

    //    上传文件的操作
        var form = new formidable.IncomingForm();
        form.parse(req,function (err,fileds,files) {
            console.log(fileds);
            console.log(files);
            console.log(files.files.name);
            console.log(files.files.type);
            fs.createReadStream(files.files.path).pipe(fs.createWriteStream("uploads/"+files.files.name));
        })
        res.end("this is a fileup");

    }

    if(pathname == "/ajax"){
        var str = "";
        req.on("data",function (chunk) {
            str += chunk;
        });
        req.on("end",function () {
            var query = querystring.parse(str);
            console.log(query);
        })
        res.end("你请求成功啦");

    }


    if(pathname == '/index/index'){
        //对nodejs模拟的客户端请求的处理
        var query = urlObj.query;
        console.log(query);
        res.statusCode = 200;
        res.end();
    }

    if(pathname == "/client"){
        var str = "";
        req.on("data",function (chunk) {
            str += chunk
            console.log(str);
        })
        res.statusCode = 200;
        res.write("aaaaa");
        res.end('{"status":1,"errMsg":"数据接收成功"}');
    }


    var path = "."+pathname;
    if(fs.existsSync(path)){
        fs.createReadStream(path).pipe(res);
    }else{
        res.statusCode = 404;
        fs.createReadStream("404.html").pipe(res);
    }
    // res.end();

}).listen(8080);
