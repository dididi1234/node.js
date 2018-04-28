/*
stream:流,在对大文件或者大的数据进行读取与写入时容易造成内存爆仓
所以提出流,将大文件进行分段处理,每读出一段就会立即写入,不会一直保存在内存中,
每一段为64k
流可以分为可读流,可写流,可读可写流
node的服务的request是可读流
node服务中的response是可写流
 */
//将一个文件变成一个可读或可写流
var fs = require("fs");
var readStream = fs.createReadStream("01.jpg");
var writeStream = fs.createWriteStream("3.jpg");
//可读可写都是EventEmitter的实例,可读可写流默认,有一些可以监听的事件
var num=0;
/*readStream.on("data",function (chunk) {
    console.log(chunk);
    num++;
    console.log(num)
    writeStream.write(chunk,function (err) {
        if (err){
            console.error(err);
            return

        }
        console.log("本次写入结束")
    })
})
readStream.on("end",function () {
    console.log("读取完")
})*/
//通过pipe管道将可读流直接导向可写流
readStream.pipe(writeStream)