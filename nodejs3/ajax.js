window.onload=function (ev) {
    var btn=document.getElementById("btn");
    btn.onclick=function () {
        //创建xml对象
        var ajax=new XMLHttpRequest();
        //创建请求对象
        ajax.open('post',"/ajax.js",true);
        //发送请求
        ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded")
        ajax.send("user=xxx&pass=123");
        //检测请求状态
        ajax.onreadystatechange=function (ev2) {
            if (ajax.readyState==4){
                if (ajax.status>=200&&ajax.status<=207||ajax.status==304){
                    console.log(ajax.responseText)
                }
            }
        }
    }
}