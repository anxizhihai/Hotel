$(document).ready(function() {
    //1
    getCaptcha();
    $(".identifyingspan").click(function() {
        getCaptcha();
    });
    $(".codebutton").click(function() {
        postSms();
    });
    $(".codebuttoncheck").click(function() {
        getCaptchareceive();
    });
    //xiayibu 
    $("#changepass").click(function() {
        $("#loginform1").hide();
        $("#loginform2").show();
        $("#loginform3").hide();
        $("#findpasswordssecond").hide();
        $("#findpasswordsfirst").hide();
        $("#findpasswordsthird").show();
    });
    $("#changepassw").click(function() {
        $("#loginform1").hide();
        $("#loginform2").hide();
        $("#loginform3").show();
        $("#findpasswordssecond").hide();
        $("#findpasswordsfirst").show();
        $("#findpasswordsthird").hide();


    });
    $("#agrees").click(function() {
        //修改密码
        changepasswords();
        // $(location).attr('href', 'login.html');
    })


});

//获取图文验证码
function getCaptcha() {
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/img/captcha", {
            method: "get", // get请求
            dataType: 'html', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            // 处理ajax成功的回调
            $('#captcha').html(data); // 将获取到的html元素插入
            var overallcaptcha = data;

        })
}
//短信验证码
function postSms() {
    let phone = $('#phone').val(); // 获取手机号input的值
    let imgCaptcha = $('#imgCaptcha').val() // 获取图形验证码input的值
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/sms/captcha", {
            method: "post", // post请求
            dataType: "json", // 希望服务器返回json格式数据，并使ajax进行json解析
            data: {
                phone: phone,
                type: 'reset',
                imgCaptcha: imgCaptcha
            }, // 按接口文档要求传参
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            alert(data.message) // 提示用户
        })
}
//检测
function getCaptchareceive() {
    let phone = $('#phone').val() // 获取手机号input的值
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/sms/captcha/receive", {
            method: "get", // get请求
            dataType: 'html', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                phone: phone,
                type: 'reset'
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }

        })
        .done(function(data) { // 处理ajax成功的回调
            if (data.code == "success") {
                alert("发送成功，请查看短信");
                var overallreceive = data.data.smsCaptcha;
                console.log("overallreceive");
            } else {
                alert("请重新检查");
            }

        })
}
//下一步事件
function nextstay() {
    let phone = $("#phone").val();
    let imgCaptcha = $("#imgCaptcha").val();
    let smsCaptcha = $("#smsCaptcha").val();

}
//修改密码
function changepasswords() {
    let phone = $('#phone').val(); // 获取手机号input的值
    console.log(phone);
    let smsCaptcha = $('#smsCaptcha').val(); // 获取图形验证码input的值
    console.log(smsCaptcha);
    let password = $("#password").val(); //获取新密码
    console.log(password);
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/account/reset", {
            method: "post", // post请求
            dataType: "json", // 希望服务器返回json格式数据，并使ajax进行json解析
            data: {
                phone: phone,
                password: password,
                smsCaptcha: smsCaptcha
            }, // 按接口文档要求传参
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            alert(data.message) // 提示用户
        })
}
//我的订单
$(".span1").click(function() {
    window.location.href = "Order_list.html"
});