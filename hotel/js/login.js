$(document).ready(function() {
    $(".fastloginbuttons").click(function() {
        fastlogin();
    });
    $(".loginbutton").click(function() {
        login();
    });
    getCaptcha();
    $(".codebutton").click(function() {
        postSms();
    });
    $(".accountlogin").click(function() {
        $(".loginform").show();
        $(".fastlogin").hide();
        $(".accountlogin").css("background", "#5944C3");
        $(".messagelogin").css("background", "#CFC8F4");
    });
    $(".messagelogin").click(function() {
        $(".loginform").hide();
        $(".fastlogin").show();
        $(".accountlogin").css("background", "#CFC8F4");
        $(".messagelogin").css("background", "#5944C3");
    });
    $("#checkbutton").click(function() {
        getCaptchareceive();
    });

    $(".loginbox").fadeIn(3000);
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
        .done(function(data) { // 处理ajax成功的回调
            $('#captcha').html(data) // 将获取到的html元素插入
        })
}
//获取短信验证码
function postSms() {
    let phone = $('#iphones').val(); // 获取手机号input的值
    let imgCaptcha = $('#identifyingcodes').val() // 获取图形验证码input的值
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/sms/captcha", {
            method: "post", // post请求
            dataType: "json", // 希望服务器返回json格式数据，并使ajax进行json解析
            data: {
                phone: phone,
                type: 'login',
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
//登录
function login() {
    let nameOrPhone = $('#telephone').val();
    let password = $('#passwords').val();
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/account/login", {
            method: "post", // post请求
            dataType: "json", // 希望服务器返回json格式数据，并使ajax进行json解析
            data: {
                nameOrPhone: nameOrPhone,
                password: password
            }, // 按接口文档要求传参
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            if (data.code === 'success') { // 进行接口返回状态判断，成功进行数据储存
                localStorage.token = data.data.account.token // 用本地储存，储存token
                localStorage.name = data.data.account.name // 用本地储存，储存name
                localStorage.avatar = data.data.account.avatar // 用本地储存，储存avatar
                localStorage.phone = nameOrPhone;
                window.location.href = "index.html";

            } else { // 失败提示用户
                alert(data.message)
            }
        })
}
//快速登录
function fastlogin() {
    let phone = $('#iphones').val();
    let smsCaptcha = $('#SMSauthenticationcodes').val();
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/account/login/fast", {
            method: "post", // post请求
            dataType: "json", // 希望服务器返回json格式数据，并使ajax进行json解析
            data: {
                phone: phone,
                smsCaptcha: smsCaptcha
            }, // 按接口文档要求传参
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            if (data.code === 'success') { // 进行接口返回状态判断，成功进行数据储存
                localStorage.token = data.data.account.token // 用本地储存，储存token
                localStorage.name = data.data.account.name // 用本地储存，储存name
                localStorage.avatar = data.data.account.avatar // 用本地储存，储存avatar
            } else { // 失败提示用户
                alert(data.message);
            }
        })
}
//检测
function getCaptchareceive() {
    let phone = $('#iphones').val() // 获取手机号input的值
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/sms/captcha/receive", {
            method: "get", // get请求
            dataType: 'html', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                phone: phone,
                type: 'login'
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) { // 处理ajax成功的回调


        })
}