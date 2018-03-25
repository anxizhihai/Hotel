$(document).ready(function() {
    var roomname = GetUrlByParamName('name');
    $(".House_big").html(roomname);
    $(".bigroom").html(roomname);
    var type = GetUrlByParamName('type');
    $(".size").html(type);
    var areas = GetUrlByParamName('area');
    $(".areas").html(areas)
    var wifi = GetUrlByParamName('wifi');
    $(".broadbands").html(wifi);
    var breakfast = GetUrlByParamName('breakfast');
    $(".breakfasts").html(breakfast);
    var hotelname = GetUrlByParamName('hotelname');
    $(".bighotel").html(hotelname);
    var addressone = GetUrlByParamName('addressone');
    $(".address").html(addressone);
    var iphonesone = GetUrlByParamName('iphonesone');
    $(".phone").html(iphonesone);
    var img = GetUrlByParamName('imgs');
    $(".images").attr('src', img);
    var hotelId = GetUrlByParamName('hotelid');
    var price = GetUrlByParamName('price');
    $(".costs").html(price);
    $(".pay").val(price);
    //选取日期
    var times1 = GetUrlByParamName("times1");
    var times2 = GetUrlByParamName("times2");
    var week1 = GetUrlByParamName("week1");
    var week2 = GetUrlByParamName("week2");
    $(".Checkin1").val(times1);
    $(".Checkin2").val(times2);
    $(".weekspan01").html(week1);
    $(".weekspan02").html(week2);

    laydate.render({
        elem: '#Checkin1',
        format: 'yyyy/MM/dd',
        min: 0,
        max: 60,
        done: function(value, date, endDate) {
            var times = $(".Checkin1").val();
            var str12 = times.split('/');
            console.log(str12["0"]);
            console.log(str12["1"]);
            console.log(str12["2"])
            var year = str12["0"],
                month = str12["1"] - 1,
                date = str12["2"]; // month=6表示7月
            var dt = new Date(year, month, date);
            var weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
            // alert(weekDay[dt.getDay()]);
            $(".weekspan01").html(weekDay[dt.getDay()]);
        }
    });
    laydate.render({
        elem: '#Checkin2',
        format: 'yyyy/MM/dd',
        min: 1,
        max: 60,
        done: function(value, date, endDate) {


            var timess = $(".Checkin2").val();
            var str13 = timess.split('/');
            console.log(str13["0"]);
            console.log(str13["1"]);
            console.log(str13["2"])
            var year = str13["0"],
                month = str13["1"] - 1,
                date = str13["2"]; // month=6表示7月
            var dt = new Date(year, month, date);
            var weekDay = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
            // alert(weekDay[dt.getDay()]);
            $(".weekspan02").html(weekDay[dt.getDay()]);
        }
    });
})

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
//页面加载后立即执行  
window.onload = function() {
        //使用GetUrlByParamName()方法获取url中参数名为questionnaireName的参数内容  
        var questionnaireName = GetUrlByParamName("questionnaireName");
        // alert(questionnaireName);
    }
    //房间数量增加或较少
var num = 1;
var price;
$(".Numberroom").val(num);

$(".redues").click(function() {
    if ($(".Numberroom").val() > 1) {
        num--;
        $(".Numberroom").val(num);
        var price = GetUrlByParamName('price');

        var all = $(".costs").text() - price;
        console.log(all);
        $(".costs").html(all);
        $(".pay").val(all);
    }
});
$(".add").click(function() {
    num++;
    $(".Numberroom").val(num);
    var price = GetUrlByParamName('price');

    var all = price * $(".Numberroom").val();
    $(".costs").html(all);
    console.log(all);
    $(".pay").val(all);
});
//提交表单数据
function Generating_order(checkTime) {
    let token = localStorage.token;
    let roomName = $(".House_big").text();
    let hotelId = GetUrlByParamName('hotelid');
    let roomNumber = $(".Numberroom").val();
    let customerName = $(".Guests").val();
    let customerPhone = $(".Contact").val();
    // let checkTime = '1524153600000,1524326400000';
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/order/create", {
            method: "post", // post请求
            dataType: "json", // 希望服务器返回json格式数据，并使ajax进行json解析
            data: {
                token: token,
                roomName: roomName,
                hotelId: hotelId,
                checkTime: checkTime,
                roomNumber: roomNumber,
                customerName: customerName,
                customerPhone: customerPhone

            }, // 按接口文档要求传参
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            // 提示用户
            if (data.code == "success") {
                alert("订单创建成功");
                var hotelone = $(".bighotel").text();
                var hotelrooms = $(".House_big").text();
                var priceroom = $(".pay").val();
                var src1 = $(".images")[0].src;
                var id = data.data._id;
                window.location.href = "payment.html?hotelone=" + hotelone + "&House_big=" + hotelrooms + "&pay=" + priceroom + "&src=" + src1 + "&id=" + id + "";
            } else if (data.message == '已无房间可预订') {
                alert("已无房间可预订");
            } else if (data.message == '可预订房间数小于预订房间数') {
                alert("可预订房间数小于预订房间数")
            } else if (data.message == '订单创建失败') {
                alert("订单创建失败");
            }
        })
}
$(".Order").click(function() {
        var times1 = $(".Checkin1").val();
        var times2 = $(".Checkin2").val();
        var date1 = new Date(times1);
        var date2 = new Date(times2);
        var ti1 = date1.getTime();
        var ti2 = date2.getTime();
        let checkTime = '' + ti1 + ',' + ti2 + '';
        console.log(ti1);
        console.log(ti2);
        Generating_order(checkTime);
    })
    //我的订单
$(".span1").click(function() {
    window.location.href = "Order_list.html"
});