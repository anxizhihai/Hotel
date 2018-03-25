$(document).ready(function() {
        var imgs = GetUrlByParamName("src");
        $(".hotelname").attr("src", imgs);
        var hotelnames = GetUrlByParamName("hotelone");
        $(".names").html(hotelnames);
        var type = GetUrlByParamName("House_big");
        $(".Bed_Type").html(type);
        var pays = GetUrlByParamName("pay");
        $(".pricesss").html(pays);
        $(".imgs1").css("border", "2px solid #FF5D5B");
        //需要支付
        var pays = GetUrlByParamName("pay");
        $(".pay").html(pays);
        //给img创建自定义属性 
        var ali = getValue();


    })
    //支付方式切换
$(".imgs1").click(function() {
    $(this).css("border", "2px solid #FF5D5B");
    $(".imgs2").css("border", '');


});
$(".imgs2").click(function() {
    $(this).css("border", "2px solid #FF5D5B");
    $(".imgs1").css("border", '');


});

function GetUrlByParamName(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var URL = decodeURI(window.location.search);
    var r = URL.substr(1).match(reg);
    if (r != null) {
        //decodeURI() 函数可对 encodeURI() 函数编码过的 URI 进行解码  
        return decodeURI(r[2]);
    };
    return null;
};


// 13772591851
function getValue() {
    var radio = document.getElementsByName("names");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value
        }
    }
}

// jqueryajax方法

function Paymentorder() {
    var token = localStorage.token;
    console.log(token);
    var payType = getValue();
    console.log(payType)
    var orderId = GetUrlByParamName("id");
    console.log(orderId)
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/order/pay", {
            method: "post", // post请求
            dataType: "json", // 希望服务器返回json格式数据，并使ajax进行json解析
            data: {
                token: token,
                payType: payType,
                orderId: orderId

            }, // 按接口文档要求传参
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            alert(data.message) // 提示用户
        })
}

//提交订单
$(".btn").click(function() {
    Paymentorder();
});
//我的订单
$(".span1").click(function() {
    window.location.href = "Order_list.html"
});