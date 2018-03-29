$(document).ready(function() {
    let img_url = "https://dev.apis.sh/P7G0PaMgO/static/";
    $(".peravator").attr("src", img_url + localStorage.pit);
    $(".pernames").html(localStorage.username);
    hoteldetail();
    comment(1, 'all');
    $(".User_evaluation3").css("background", "#5944C3");
    $(".User_evaluation3").css("color", "#FFFFFF");
    $(".room1").css("background", "#5944C3");
    $(".room1").css("color", "#FFFFFF");
    hotelroom('');
    //引入日历插件
    laydate.render({
        elem: '#queryinput1',
        format: 'yyyy/MM/dd',
        min: 0,
        max: 60,
        done: function(value, date, endDate) {
            var times = $(".queryinput1").val();
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
            $(".firsttime1").html(weekDay[dt.getDay()]);
        }
    });
    laydate.render({
        elem: '#queryinput2',
        format: 'yyyy/MM/dd',
        min: 1,
        max: 60,
        done: function(value, date, endDate) {
            var times1 = $(".queryinput1").val();
            var times2 = $(".queryinput2").val();
            var date1 = new Date(times1);
            var date2 = new Date(times2);
            var date3 = date2.getTime() - date1.getTime(); //时间差的毫秒数
            var days = Math.floor(date3 / (24 * 3600 * 1000));
            console.log(days);
            $(".alldates").html(days);
            var timess = $(".queryinput2").val();
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
            $(".secondtime1").html(weekDay[dt.getDay()]);
        }
    });
});



var hotels;
var addressone;
var iphonesone;
var imgs;
var hotelId;

function hoteldetail() {
    let hotelId = getQueryString("hotel_id");
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/hotel/detail", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                hotelId: hotelId
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            if (data.code == "success") {
                // 处理ajax成功的回调
                let img_url = "https://dev.apis.sh/P7G0PaMgO/static/";
                var hotel = data.data.hotel;
                $(".hotelnames").html(hotel.name);
                hotels = hotel.name;

                $(".address").html(hotel.address);
                addressone = hotel.address;
                $(".fivesix").html(hotel.comment_num);
                $(".fournine").html(hotel.overall_rating);
                $(".pricesnum").html(hotel.price);
                //图片
                $(".image1").attr('src', img_url + hotel.picture["0"]);
                imgs = img_url + hotel.picture["0"];
                $(".image2").attr('src', img_url + hotel.picture["1"]);
                $(".image3").attr('src', img_url + hotel.picture["2"]);
                $(".image4").attr('src', img_url + hotel.picture["3"]);
                $(".image5").attr('src', img_url + hotel.picture["4"]);
                //酒店介绍
                $(".words_Introduction1").html(hotel.hotel_introductio.basic_info["1"]);
                $(".words_Introduction2").html(hotel.hotel_introductio.basic_info["2"]);
                $(".words_Introduction3").html(hotel.hotel_introductio.basic_info["3"]);
                $(".words_Introduction4").html(hotel.hotel_introductio.contact_way["0"]);
                iphonesone = hotel.hotel_introductio.contact_way["0"];
                $(".words_Introduction5").html(hotel.hotel_introductio.contact_way["1"]);
                $(".words_Introductionxa").html(hotel.hotel_introductio.detail);
                //酒店政策
                $(".po1").html(hotel.hotel_policy.departure_time);
                $(".po2").html(hotel.hotel_policy.entry_time);
                $(".policy5").html(hotel.hotel_policy.child_policy);
                $(".policy7").html(hotel.hotel_policy.pet_policy);

                const map = new BMap.Map("container") // 创建一个地图实例，其参数可以是元素id也可以是元素对象
                map.centerAndZoom(new BMap.Point(hotel.location.lng, hotel.location.lat), 13) // 初始化地图，设置中心点坐标和地图级别
                map.enableScrollWheelZoom(true) // 启用滚轮放大缩小，默认禁用
                map.addControl(new BMap.ScaleControl()) // 添加控件，比例尺控件
                map.addControl(new BMap.NavigationControl({
                        type: BMAP_NAVIGATION_CONTROL_ZOOM
                    })) // 添加控件，平移缩放控件，type值表示只显示控件的缩放部分功能
                const hotelDataArry = [{
                    name: hotel.name,
                    location: new BMap.Point(hotel.location.lng, hotel.location.lat)
                }]
                hotelDataArry.forEach(el => {
                    const marker = new BMap.Marker(el.location) // 创建标注点
                    map.addOverlay(marker) // 向地图添加标注点
                    marker.setLabel(new BMap.Label(el.name, {
                            offset: new BMap.Size(20)
                        })) // 向标注点添加标注文本
                })
            } else {
                alert("获取失败");
            }
        })
}
//评论
function comment(page, sort) {
    let img_url = "https://dev.apis.sh/P7G0PaMgO/static/";
    let hotelId = getQueryString("hotel_id");
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/hotel/evaluate/list", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                hotelId: hotelId,
                limit: '3',
                page: page,
                sort: sort
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            if (data.code == "success") {
                var comments = data.data.evaluate;
                var numb = data.data.count;
                num = Math.ceil(data.data.count / 3);
                $(".li6").html(10);
                if (num == 3) {
                    $(".li1").show();
                    $(".li2").show();
                    $(".li3").show();
                    $(".li4").hide();
                    $(".li5").hide();
                    $(".li6").hide();
                } else if (num == 2) {
                    $(".li1").show();
                    $(".li2").show();
                    $(".li3").hide();
                    $(".li4").hide();
                    $(".li5").hide();
                    $(".li6").hide();
                } else if (num == 4) {
                    $(".li1").show();
                    $(".li2").show();
                    $(".li3").show();
                    $(".li4").show();
                    $(".li5").hide();
                    $(".li6").hide();
                } else if (num == 5) {
                    $(".li1").show();
                    $(".li2").show();
                    $(".li3").show();
                    $(".li4").show();
                    $(".li6").show();
                    $(".li5").hide();
                } else if (num == 1) {
                    $(".li1").show();
                    $(".li2").hide();
                    $(".li3").hide();
                    $(".li4").hide();
                    $(".li5").hide();
                    $(".li6").hide();
                } else {
                    $(".li1").show();
                    $(".li2").show();
                    $(".li3").show();
                    $(".li4").show();
                    $(".li5").show();
                    $(".li6").show();
                }


                // 处理ajax成功的回调

                var str = '';
                for (var i = 0; i < comments.length; i++) {
                    str += '<div class="commain">';
                    str += '<div class="cominside">';
                    //头像姓名
                    str += '<div class="avatarname">'
                    str += '<img class="avatar" src="' + img_url + comments[i].account.avatar + '">'
                    str += '<span class="avnames">' + comments[i].account.name + '</span>';
                    str += '</div>'
                        //时间和评论图片
                    str += '<div class="timespitc">';
                    str += '<div class="create"><span class="starsss"><img src="img/icon_star.png"><img src="img/icon_star.png"><img src="img/icon_star.png"><img src="img/icon_star.png"><img src="img/icon_star.png"></span><span class="create_time">' + comments[i].create_time + '</span></div>';
                    str += '<div class="content"><span class="contents">' + comments[i].content + '</span></div>';
                    if (comments[i].picture.length !== 0) {
                        str += '<div class="picture"><img class="pictures" src="' + img_url + comments[i].picture["0"] + '"><img class="picturess" src="' + img_url + comments[i].picture["1"] + '"></div>'
                    }
                    str += '</div>';
                    str += '</div>';
                    str += '</div>';
                }
                $(".commentlist").html(str);
            } else if (data.code == "evaluate_not_found") {

                $(".commentlist").html('<div class="empts">暂无评论哦</div>');
            }
        })
}

//用户评价
$(".User_evaluation3").click(function() {
    $(".User_evaluation3").css("background", "#5944C3");
    $(".User_evaluation3").siblings().css("background", "");
    $(".User_evaluation3").css("color", "#FFFFFF");
    $(".User_evaluation3").siblings().css("color", "");
    comment(1, 'all');


});
$(".User_evaluation4").click(function() {
    $(".User_evaluation4").css("background", "#5944C3");
    $(".User_evaluation4").siblings().css("background", "");
    $(".User_evaluation4").css("color", "#FFFFFF");
    $(".User_evaluation4").siblings().css("color", "");
    comment(1, 'praise');
});
$(".User_evaluation5").click(function() {
    $(".User_evaluation5").css("background", "#5944C3");
    $(".User_evaluation5").siblings().css("background", "");
    $(".User_evaluation5").css("color", "#FFFFFF");
    $(".User_evaluation5").siblings().css("color", "");
    comment(1, 'negative');
});
$(".User_evaluation6").click(function() {
    $(".User_evaluation6").css("background", "#5944C3");
    $(".User_evaluation6").siblings().css("background", "");
    $(".User_evaluation6").css("color", "#FFFFFF");
    $(".User_evaluation6").siblings().css("color", "");
    comment(1, 'picture');
});

$(".room1").click(function() {
    $(".room1").css("background", "#5944C3");
    $(".room1").siblings().css("background", "")
    $(".room1").css("color", "#FFFFFF");
    $(".room1").siblings().css("color", "")
})
$(".room2").click(function() {
    $(".room2").css("background", "#5944C3");
    $(".room2").siblings().css("background", "")
    $(".room2").css("color", "#FFFFFF");
    $(".room2").siblings().css("color", "")
})
$(".room3").click(function() {
    $(".room3").css("background", "#5944C3");
    $(".room3").siblings().css("background", "")
    $(".room3").css("color", "#FFFFFF");
    $(".room3").siblings().css("color", "")
})
$(".room4").click(function() {
    $(".room4").css("background", "#5944C3");
    $(".room4").siblings().css("background", "")
    $(".room4").css("color", "#FFFFFF");
    $(".room4").siblings().css("color", "")
})

//酒店房间列表

function hotelroom(checkTime) {
    var times1 = $(".queryinput1").val();
    var times2 = $(".queryinput2").val();
    var week1 = $(".firsttime1").html();
    var week2 = $(".secondtime1").html();
    let hotelId = getQueryString("hotel_id");
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/hotel/room", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                hotelId: hotelId,
                checkTime: checkTime
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {

            // 处理ajax成功的回调
            if (data.code == "success") {
                var hotelrooms = data.data.roomList;

                var str = '';
                for (var i = 0; i < hotelrooms.length; i++) {
                    str += '<div class="deluxe_king">'
                    str += '<span class="deluxe_king1">' + hotelrooms[i].name + '</span>';
                    str += '<span class="deluxe_king2">' + hotelrooms[i].bedType + '</span>';
                    str += '<span class="deluxe_king3">' + hotelrooms[i].area + '</span>';
                    str += '<span>M²</span>';
                    str += '<span class="deluxe_king4">' + hotelrooms[i].wayOfInternet + '</span>';
                    str += '<span class="deluxe_king5">' + hotelrooms[i].breakfast + '</span>';
                    str += '<span class="deluxe_king6">' + hotelrooms[i].window + '</span>';
                    str += '<span class="deluxe_king7">' + hotelrooms[i].cancelOfRules + '</span>';
                    str += '<span class="deluxe_king8"><span>¥</span>' + hotelrooms[i].price + '</span>';
                    if (hotelrooms[i].canCheckIn == false) {
                        str += '<button type="button" class="deluxe_king99">已预定</button>';
                    } else {
                        str += '<a target = "_blank" href="predetermine.html?name=' + hotelrooms[i].name + '&type=' + hotelrooms[i].bedType + '&area=' + hotelrooms[i].area + '&wifi=' + hotelrooms[i].wayOfInternet + '&price=' + hotelrooms[i].price + '&breakfast=' + hotelrooms[i].breakfast + '&hotelname=' + hotels + '&addressone=' + addressone + '&iphonesone=' + iphonesone + '&imgs=' + imgs + '&hotelid=' + hotelId + '&times1=' + times1 + '&times2=' + times2 + '&week1=' + week1 + '&week2=' + week2 + '">';
                        str += '<button type="button" class="deluxe_king9">预定</button>';
                        str += '</a>';
                    }
                    str += '</div>'
                }
                $(".house").append(str);
            } else if (data.code == "param_incomplete") {
                alert("请求参数不完整");
            } else if (data.code == "param_error") {
                alert("入住时间不能比当前时间早");
            } else if (data.code == "database_error") {
                alert("服务器或数据库内部错误");
            }

        })
}

$(".li1").click(function() {
    var on1 = $(this).text();
    console.log($(this).text());
    comment(on1, 'all');
});
$(".li2").click(function() {
    var on2 = $(this).text();
    console.log($(this).text());
    comment(on2, 'all');

});
$(".li3").click(function() {
    var on3 = $(this).text();
    comment(on3, 'all');

});
$(".li4").click(function() {
    var on4 = $(this).text();
    comment(on4, 'all');

});
$(".li6").click(function() {
    var on5 = $(this).text();
    comment(on5, 'all');

});
//点击查询酒店房间列表
$(".btnquery").click(function() {
    $('.house').empty();
    var times1 = $(".queryinput1").val();
    var times2 = $(".queryinput2").val();
    var date1 = new Date(times1);
    var date2 = new Date(times2);
    var ti1 = date1.getTime();
    var ti2 = date2.getTime();
    let checkTime = '' + ti1 + ',' + ti2 + '';
    console.log(ti1);
    console.log(ti2);
    hotelroom(checkTime);

});
//我的订单
$(".span1").click(function() {
    window.location.href = "Order_list.html"
});
//封装取传递过来的id函数
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    var q = window.location.pathname.substr(1).match(reg_rewrite);
    if (r != null) {
        return unescape(r[2]);
    } else if (q != null) {
        return unescape(q[2]);
    } else {
        return null;
    }
}

//分页
var num;
var i = 1;
var q = 2;
var w = 3;
var e = 4;
$(".liimg1").click(function() {
    addition();
});
//减
$(".liimg").click(function() {
    subtraction();
});
$(".li4").click(function() {
    addition();
})
$(".li1").click(function() {
    subtraction();
})

function subtraction() {
    if (i > 1) {
        for (var j = 0; j < 1; j++) {
            i--;
            q--;
            w--;
            e--;
        }
        $(".li1").html(i);
        $(".li2").html(q);
        $(".li3").html(w);
        $(".li4").html(e);

    }
    if (e < num && e > 1) {
        $(".li5").show();
        $(".li6").show();
    }
}

function addition() {
    if (e < num - 1) {
        for (var j = 0; j < 1; j++) {
            i++;
            q++;
            w++;
            e++;
        }
        $(".li1").html(i);
        $(".li2").html(q);
        $(".li3").html(w);
        $(".li4").html(e);
    }
    if (e == num - 1) {
        $(".li5").hide();

    }

}
$('#nav').on('click', 'li', function(e) {
    var target = e.target;
    var id = $(target).data("to");
    $('html,body').animate({ scrollTop: $('#' + id).offset().top }, 800);
});