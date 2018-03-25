$(document).ready(function() {
    getCaptcha();
    $(".codebutton").click(function() {
        postSms();
    });

    $(".checkbutton").click(function() {
        getCaptchareceive();
    });
    $(".fastloginbuttons1").click(function() {
        register();
    });
});

function getCaptcha() {
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/img/captcha", {
            method: "get", // get请求
            dataType: 'html', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) { // 处理ajax成功的回调
            $('#captcha').html(data) // 将获取到的html元素插入
        })
}

function getCaptchareceive() {
    let phone = $('#phone').val() // 获取手机号input的值
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/sms/captcha/receive", {
            method: "get", // get请求
            dataType: 'html', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                phone: phone,
                type: 'register'
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) { // 处理ajax成功的回调


        })
}

function postSms() {
    let phone = $('#phone').val() // 获取手机号input的值
    let imgCaptcha = $('#imgCaptcha').val() // 获取图形验证码input的值
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/sms/captcha", {
            method: "post", // post请求
            dataType: "json", // 希望服务器返回json格式数据，并使ajax进行json解析
            data: {
                phone: phone,
                type: 'register',
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

function register() {
    let phone = $('#phone').val() // 获取手机号input的值
    let smsCaptcha = $('#smsCaptcha1').val() // 获取短信验证码input的值
    let password = $('#password').val() // 获取密码input的值
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/account/register", {
            method: "post", // post请求
            dataType: "json", // 希望服务器返回json格式数据，并使ajax进行json解析
            data: {
                phone: phone,
                smsCaptcha: smsCaptcha,
                password: password
            }, // 按接口文档要求传参
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            alert(data.message);
        })
}