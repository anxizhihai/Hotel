let img_url = "https://dev.apis.sh/P7G0PaMgO/static/";
$(document).ready(function() {
    $("#myimg").attr("src", img_url + localStorage.pit);
    $(".Phones").html(localStorage.phone);
});
//改变时预览图片并且上传图片
$(".far").change(function() {
    mypit();
    Upload();
});
var url = 'https://dev.apis.sh/P7G0PaMgO/'
$(".WeChatButton").click(function() {
    $(".imgWeChat").attr("src", url + 'v1/account/wei/bind?token=' + localStorage.token);
});

//上传图片
function Upload() {
    let token = localStorage.token // 获取token的值
    let img = $("#myfile").get(0).files[0];
    let somedata = new FormData();
    somedata.append("token", token);
    somedata.append("img", img);
    somedata.append("type", "avatar");
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/upload/picture", {
            method: "post", // post请求
            dataType: "json", // 希望服务器返回json格式数据，并使ajax进行json解析
            data: somedata, // 按接口文档要求传参
            processData: false,
            contentType: false,
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            localStorage.pit = data.data.picturePath;
        })
}
//图片预览
function mypit() {
    var myfiles = document.getElementById("myfile"); //获取点击按钮的对象
    var ua = navigator.userAgent.toLowerCase(); //判断浏览器类型
    var url = '';
    if (/msie/.test(ua)) //判断当前浏览器是否为IE浏览器
    {
        url = myfiles.value;
    } else {
        url = window.URL.createObjectURL(myfiles.files[0]); //获取forms中的文件，并赋值给url，每次调用URL.crreateObjectURl方法时，都会创建一个对象。
    }
    document.getElementById("myimg").src = url; //获取img标签对象的src，并将url赋值给img标签的src属性，这是完成打印的一步。
}
//绑定微信二维码
function binding() {
    let token = localStorage.token;
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/account/wei/bind", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                token: token
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) { // 处理ajax成功的回调
            $(".imgWeChat").attr("src", 'data:image/png;base64,' + img_url + data);
        });
}

//姓名
$(".zmnames").blur(function() {
    localStorage.username = $(".zmnames").val();
    alert("修改成功");
});
$(".zmnames").val(localStorage.username);
//密码

$(".pass").blur(function() {
    localStorage.passwords = $(".pass").val();
    alert("修改成功");
    $(".pass").css("border", "none");
});
$(".pass").val(localStorage.passwords);
$(".passpit").click(function() {
    $(".pass").css("border", "1px solid #222629");
});

$(".peravator").attr("src", img_url + localStorage.pit);
$(".pernames").html(localStorage.username);
//我的订单
$(".span1").click(function() {
    window.location.href = "Order_list.html"
});