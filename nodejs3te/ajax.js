window.onload = function () {
    var btn = document.getElementById("btn");

    btn.onclick = function () {
    //    创建XMLhttpRequest对象
        var ajax = new XMLHttpRequest();
    //    创建请求对象
        ajax.open('post',"/ajax",true);

    //    发送请求
        ajax.setRequestHeader("Content-Type",'application/x-www-form-urlencoded');
        ajax.send('user=xxxx&pass=123');
    //    监测请求状态
        ajax.onreadystatechange = function () {
            if(ajax.readyState == 4){
                if(ajax.status >= 200 && ajax.status<=207 || ajax.status == 304){
                    console.log(ajax.responseText);
                }
            }
        }
    }
}