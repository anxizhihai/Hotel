function mypit() {
    var myfiles = document.getElementById("uploadfiles"); //获取点击按钮的对象
    var ua = navigator.userAgent.toLowerCase(); //判断浏览器类型
    var url = '';
    if (/msie/.test(ua)) //判断当前浏览器是否为IE浏览器
    {
        url = myfiles.value;
    } else {
        url = window.URL.createObjectURL(myfiles.files[0]); //获取forms中的文件，并赋值给url，每次调用URL.crreateObjectURl方法时，都会创建一个对象。
    }
    // document.getElementById("myimg").src = url; //获取img标签对象的src，并将url赋值给img标签的src属性，这是完成打印的一步。
    var str = '';
    str += '<span class="dynamicfeed">';
    str += '<img class="imagesss" src="' + url + '">';
    str += '<img class="uiimgs" src="img/ui.jpg">';
    str += '</span>'
    $(".uploadnew").append(str);

}
$(".uploadfiles").change(function() {
    mypit();

});
$('.uploadnew').on('click', '.uiimgs', function() {
    // $(this).splice($(this).index(), 1);
    arr.splice($.inArray($(this).index(), arr));
    $(this).siblings().remove();
    $(this).remove();
    console.log(arr);

});

function Upload() {
    let token = localStorage.token // 获取token的值
    let orderId = GetUrlByParamName("id");
    let score = i;
    let content = $(".textare").val();
    let a = JSON.stringify(arr);
    let picturePathArry = a;
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/order/evaluate", {
            method: "post", // post请求
            dataType: "json", // 希望服务器返回json格式数据，并使ajax进行json解析
            data: {
                token: token,
                orderId: orderId,
                score: i,
                content: content,
                picturePathArry: picturePathArry
            }, // 按接口文档要求传参
            // processData: false,
            // contentType: false,
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            if (data.code == "success") {
                alert("评价成功")
            } else if (data.code == "already_evaluated") {
                alert("您已经评价过该订单")
            }
        })
}

//上传图片
var arr = [];

function Uploade() {
    let token = localStorage.token // 获取token的值
    let img = $("#uploadfiles").get(0).files[0];
    let somedata = new FormData();
    somedata.append("token", token);
    somedata.append("img", img);
    somedata.append("type", "evaluate");
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
            // localStorage.pit = data.data.picturePath;
            arr.push(data.data.picturePath);
        })
}
$(".btnssse").click(function() {
    howstars();
    Upload();
});
var j = 0;
$(".uploadfiles").change(function() {
    j++;
    if (j >= 11) {
        $(".uploadfiles").unbind();

    } else if (j < 11) {
        Uploade();
        console.log(arr);
    }

});

$(".stars5").click(function() {
    if ($(this).attr("src") == "img/icon_star_no.png") {
        $(this).attr("src", "img/icon_star_yes.png");
        $(this).siblings().attr("src", "img/icon_star_yes.png");
    } else {
        $(this).attr("src", "img/icon_star_no.png");
    }
});
$(".stars4").click(function() {
    if ($(this).attr("src") == "img/icon_star_no.png") {
        $(this).attr("src", "img/icon_star_yes.png");
        $(".stars3").attr("src", "img/icon_star_yes.png");
        $(".stars2").attr("src", "img/icon_star_yes.png");
        $(".stars1").attr("src", "img/icon_star_yes.png");
    } else {
        $(this).attr("src", "img/icon_star_no.png");
        $(".stars5").attr("src", "img/icon_star_no.png");
    }
});
$(".stars3").click(function() {
    if ($(this).attr("src") == "img/icon_star_no.png") {
        $(this).attr("src", "img/icon_star_yes.png");
        $(".stars2").attr("src", "img/icon_star_yes.png");
        $(".stars1").attr("src", "img/icon_star_yes.png");
    } else {
        $(this).attr("src", "img/icon_star_no.png");
        $(".stars5").attr("src", "img/icon_star_no.png");
        $(".stars4").attr("src", "img/icon_star_no.png");
    }
});
$(".stars2").click(function() {
    if ($(this).attr("src") == "img/icon_star_no.png") {
        $(this).attr("src", "img/icon_star_yes.png");
        $(".stars1").attr("src", "img/icon_star_yes.png");
    } else {
        $(this).attr("src", "img/icon_star_no.png");
        $(".stars5").attr("src", "img/icon_star_no.png");
        $(".stars4").attr("src", "img/icon_star_no.png");
        $(".stars3").attr("src", "img/icon_star_no.png");
    }
});
$(".stars1").click(function() {
    if ($(this).attr("src") == "img/icon_star_no.png") {
        $(this).attr("src", "img/icon_star_yes.png");
    } else {
        $(this).attr("src", "img/icon_star_no.png");
        $(".stars5").attr("src", "img/icon_star_no.png");
        $(".stars4").attr("src", "img/icon_star_no.png");
        $(".stars3").attr("src", "img/icon_star_no.png");
        $(".stars2").attr("src", "img/icon_star_no.png");
    }
});
var i = 0;

function howstars() {
    if ($(".stars5").attr("src") == "img/icon_star_yes.png" && $(".stars4").attr("src") == "img/icon_star_yes.png" && $(".stars3").attr("src") == "img/icon_star_yes.png" && $(".stars2").attr("src") == "img/icon_star_yes.png" && $(".stars1").attr("src") == "img/icon_star_yes.png") {
        i = 5;
    } else if ($(".stars5").attr("src") == "img/icon_star_no.png" && $(".stars4").attr("src") == "img/icon_star_yes.png" && $(".stars3").attr("src") == "img/icon_star_yes.png" && $(".stars2").attr("src") == "img/icon_star_yes.png" && $(".stars1").attr("src") == "img/icon_star_yes.png") {
        i = 4;
    } else if ($(".stars5").attr("src") == "img/icon_star_no.png" && $(".stars4").attr("src") == "img/icon_star_no.png" && $(".stars3").attr("src") == "img/icon_star_yes.png" && $(".stars2").attr("src") == "img/icon_star_yes.png" && $(".stars1").attr("src") == "img/icon_star_yes.png") {
        i = 3;
    } else if ($(".stars5").attr("src") == "img/icon_star_no.png" && $(".stars4").attr("src") == "img/icon_star_no.png" && $(".stars3").attr("src") == "img/icon_star_no.png" && $(".stars2").attr("src") == "img/icon_star_yes.png" && $(".stars1").attr("src") == "img/icon_star_yes.png") {
        i = 2;
    } else if ($(".stars5").attr("src") == "img/icon_star_no.png" && $(".stars4").attr("src") == "img/icon_star_no.png" && $(".stars3").attr("src") == "img/icon_star_no.png" && $(".stars2").attr("src") == "img/icon_star_no.png" && $(".stars1").attr("src") == "img/icon_star_yes.png") {
        i = 1;
    } else if ($(".stars5").attr("src") == "img/icon_star_no.png" && $(".stars4").attr("src") == "img/icon_star_no.png" && $(".stars3").attr("src") == "img/icon_star_no.png" && $(".stars2").attr("src") == "img/icon_star_no.png" && $(".stars1").attr("src") == "img/icon_star_no.png") {
        i = 0;
    }

}

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
$(document).ready(function() {
    var pictruemore = GetUrlByParamName("pictmore");
    console.log(pictruemore);
    var roomName = GetUrlByParamName("roomName");
    var name = GetUrlByParamName("name");
    var amount = GetUrlByParamName("amount");
    let img_url = "https://dev.apis.sh/P7G0PaMgO/static/";
    $(".images").attr("src", img_url + pictruemore);
    $(".rightbox1").html(name);
    $(".rightbox2").html(roomName);
    $(".prices2").html(amount);

    $(".peravator").attr("src", img_url + localStorage.pit);
    $(".pernames").html(localStorage.username);
});
//我的订单
$(".span1").click(function() {
    window.location.href = "Order_list.html"
});