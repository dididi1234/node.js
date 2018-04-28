var path = require('path');
//normallize格式化文件名
var pathname="game/index/./about/../catogory/af/b/./c/../d";//game/index/catogory/af/b/d
console.log(path.normalize(pathname));
//join将文件名进行拼接
var pathname="game/index";
var name2="/about/about.html";
console.log(path.join(__dirname,pathname,name2))
console.log(__dirname);//根目录
//resolve将文件名变成一个绝对地址
var partname="game/index";
var name2="about/about.html";
console.log(path.resolve(pathname,name2));