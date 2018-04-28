/*
buffer:node为了处理请求与响应中以及文件 I/O(读取与写入)二进制数据
所以提供了一个Buffer类,通过实例化Buffer创建一个二进制缓存区
未进行解析的Buffer以Buffer数组的形式展示,数组的每一位是由一个8位
二进制数转换成的十六进制数

 */
/*var fs = require("fs");
fs.readFile("text.txt",function (err,data) {
    if (err){
        console.error(err);
    }else{
        console.log(data)
    }
})*/
//buffer初始化
const buf1=Buffer.alloc(10,"f")//占缓存空间10;
console.log(buf1);
//Buffer的填充fill
buf1.fill(254,3,6)
console.log(buf1)
//Buffer.from参数为数组
const buf2=Buffer.from([254,054,0xa4]);//在es5中八进制用0表示,在es6中用0o表示,16进制统一用0x
//表示
console.log(buf2);
//Buffer.from参数为字符串
const buf3=Buffer.from("今天下雨了")
console.log(buf3);
//将Buffer再解析成字符
const buf4=Buffer.from([0xe4,0xbb,0x8a,0xe5,0xa4]);
console.log(buf4.toString())
//Buffer的拼接,Buffer.concat
const buf5=Buffer.from([0xa9,0xe4,0xb8,0x8b,0xe9,0x9b,0xa8])
console.log(buf5.toString())
const  buf6=Buffer.concat([buf4,buf5]);
console.log(buf6.toString())
//如果出现Buffer不全,可以使用string-decoder解析
const StringDecoder = require("string_decoder").StringDecoder;
var decoder = new StringDecoder();
console.log(decoder.write(buf4));
console.log(decoder.write(buf5));

