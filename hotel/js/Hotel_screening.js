$(document).ready(function() {

    let img_url = "https://dev.apis.sh/P7G0PaMgO/static/";
    $(".peravator").attr("src", img_url + localStorage.pit);
    $(".pernames").html(localStorage.username);
    if (localStorage.token !== "") {
        $(".header1").show();
        $(".header").hide();
    }

    //引入日历插件
    laydate.render({
        elem: '#choicedatein',
        range: '~', //或 range: '~' 来自定义分割字符
        format: 'yyyy/MM/dd',
        done: function(value, date, endDate) {
            console.log(value); //得到日期生成的值，如：2017-08-18
            console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
            console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
        }
    });


    //调用添加城市函数
    getCaptchareceive();
    var a = GetUrlByParamName("ainput");
    console.log(a);
    var b = GetUrlByParamName("dates");
    console.log(b);
    var c = GetUrlByParamName("aimport");
    //从上个页面传递过来的默认关键字
    $(".choicemessagein").val(c);
    //从上边传递过来的默认时间
    $(".choicedatein").val(b);
    //默认设定城市为西安
    $(".choicecityin").val(a);
    $(".recommend1").css("background-color", "#5944C3");
    //一开始就加载的西安的酒店
    hotelist('1');
    window.addEventListener('scroll', _.throttle(lazyLoad(), 100));
    window.addEventListener('scroll', _.throttle(lazyLoad1(), 100));
    // window.addEventListener('scroll', _.throttle(lazyLoad2(), 100));
    // window.addEventListener('scroll', _.throttle(lazyLoad3(), 100));

});

//行政
var i = 0;
$(".choice_boxs1span3").click(function() {
    $(".district").toggle();
    $(".Business_Circles").hide();
    $(".dstation").hide();
    $(".Station").hide();
    $(".Scenic").hide();
    $(".districtul li").remove();
    getCaptcha();
    i++;
    if (i % 2 == 1) {
        $(".aimgs").css("transform", "rotate(180deg)");
        $(".aimgs").css("transition", "transform 2s");
    } else {
        $(".aimgs").css("transform", "");
        $(".aimgs").css("transition", "transform 2s");
    }


});
//商圈
var j = 0
$(".choice_boxs1span4").click(function() {
    $(".Business_Circles").toggle();
    $(".district").hide();
    $(".dstation").hide();
    $(".Station").hide();
    $(".Scenic").hide();
    $(".Business_Circlesul li").remove();
    Business();
    j++;
    if (j % 2 == 1) {
        $(".aimgs1").css("transform", "rotate(180deg)");
        $(".aimgs1").css("transition", "transform 2s");
    } else {
        $(".aimgs1").css("transform", "rotate(360deg)");
        $(".aimgs1").css("transition", "transform 2s");
    }
});
//地铁站
$(".choice_boxs1span5").click(function() {
    $(".dstation").toggle();
    $(".dstation").empty();
    Metro();


    $(".Business_Circles").hide();
    $(".Station").hide();
    $(".district").hide();
    $(".Scenic").hide();

});
//车站
var f = 0;
$(".choice_boxs1span6").click(function() {
    $(".Station").toggle();
    $(".Business_Circles").hide();
    $(".dstation").hide();
    $(".district").hide();
    $(".Scenic").hide();
    $(".Stationul1 li").remove();
    $(".Stationul2 li").remove();
    $(".Stationul3 li").remove();
    Station();
    f++;
    if (f % 2 == 1) {
        $(".aimgs3").css("transform", "rotate(180deg)");
        $(".aimgs3").css("transition", "transform 2s");
    } else {
        $(".aimgs3").css("transform", "rotate(360deg)");
        $(".aimgs3").css("transition", "transform 2s");
    }
});
//景点
var z = 0;
$(".choice_boxs1span7").click(function() {
    $(".Scenic").toggle();
    $(".Business_Circles").hide();
    $(".dstation").hide();
    $(".Station").hide();
    $(".district").hide();
    $(".Scenic_ul li").remove();
    Scenic();
    z++;
    if (z % 2 == 1) {
        $(".aimgs4").css("transform", "rotate(180deg)");
        $(".aimgs4").css("transition", "transform 2s");
    } else {
        $(".aimgs4").css("transform", "");
        $(".aimgs4").css("transition", "transform 2s");
    }
})

//行政圈
function getCaptcha() {
    let cityName = $(".choicecityin").val();
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/city/area", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                cityName: cityName
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            // 处理ajax成功的回调
            var area = data.data.area;
            var str = "";
            for (var i = 0; i < area.length; i++) {
                str += '<li class="districtli">' + area[i] + '</li>';
            }
            $(".districtul").append(str);
            $(function() {
                //限制字符个数
                $(".districtli").each(function() {
                    var maxwidth = 3;
                    if ($(this).text().length > maxwidth) {
                        $(this).text($(this).text().substring(0, maxwidth));
                        $(this).html($(this).html() + '…');
                    }
                });
            });
        })
}
$(".districtul").on("click", "li ", function() {
    var Uarry = $(".districtul li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicemessagein").val(Tresult);
});
//商圈
function Business() {
    let cityName = $(".choicecityin").val();
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/city/trad", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                cityName: cityName
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            // 处理ajax成功的回调
            var area = data.data.trad;
            var str = "";
            for (var i = 0; i < area.length; i++) {
                str += '<li class="Business_Circlesli">' + area[i] + '</li>';
            }
            $(".Business_Circlesul").append(str);
            $(function() {
                //限制字符个数
                $(".Business_Circlesli").each(function() {
                    var maxwidth = 3;
                    if ($(this).text().length > maxwidth) {
                        $(this).text($(this).text().substring(0, maxwidth));
                        $(this).html($(this).html() + '…');
                    }
                });
            });
        })
}
$(".Business_Circlesul").on("click", "li ", function() {
    var Uarry = $(".Business_Circlesul li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicemessagein").val(Tresult);
});
//地铁

function Metro() {
    let cityName = $(".choicecityin").val();
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/city/subway/station", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                cityName: cityName
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) { // 处理ajax成功的回调
            var station = data.data.subway;
            var arr = Object.keys(station);
            var str1 = '';
            str1 += '<div class="stations1">';
            for (var i = 0; i < arr.length; i++) {
                str1 += '<ul class="Metro1" value="' + i + '" >' + arr[i] + '';
                str1 += '</ul>';
            }
            str1 += '</div>'
            $(".dstation").append(str1);
            var str = '';
            str += '<div class="sat">';
            for (var i = 0; i < arr.length; i++) {
                // str += '<ul class="Metro">' + arr[i] + '';
                str += '<ul class="Metro" value="' + i + '" style="display:none">';
                for (var j = 0; j < station[arr[i]].length; j++) {
                    str += '<li class="litwo">' + station[arr[i]][j] + ' ';
                }
                str += '</li>'
                str += '</ul>';
            }
            str += '</div>'

            $(".dstation").append(str);
            $(".Metro").eq(0).show();
        });
}


$(".dstation").on("click", ".Metro1", function() {
    var Uarry = $(".Metro1"); //获取所有的ul元素
    var count = $(this).index(); //获取ul的下标  
    var Tresult = Uarry.eq(count).text();
    var Uarrys = $(".Metro");
    var counts = $(this).index();
    console.log(counts);
    $(".Metro").eq(counts).show();
    $(".Metro").eq(counts).siblings().hide();
});
$(".dstation").on("click", "li ", function() {
    // var Uarry = $(".sat li"); //获取所有的li元素
    // var count = $(this).index(); //获取li的下标  
    // var Tresult = Uarry.eq(count).text();
    $(".choicemessagein").val($(this).html());

});

function last() {

    $(".dstation").each(function() {
        //var tmp;  

        $(this).find('li').each(function() {
            //tmp = $(this).text();  

            key.push($(this).text());
        });

    });
    //遍历该数组可以获取所有值  
    for (var i = 0; i < key.length; i++) {
        //todo  
    }
}
//车站
function Station() {
    let cityName = $(".choicecityin").val();
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/city/station", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                cityName: cityName
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            // 处理ajax成功的回调
            var railway = data.data.station["火车站"];
            var str = "";
            for (var i = 0; i < railway.length; i++) {
                str += '<li class="Business_Circlesli1">' + railway[i] + '</li>';
            }
            $(".Stationul1").append(str);
            //限制字符个数
            $(".Business_Circlesli1").each(function() {
                var maxwidth = 5;
                if ($(this).text().length > maxwidth) {
                    $(this).text($(this).text().substring(0, maxwidth));
                    $(this).html($(this).html() + '…');
                }
            });
            var BusStation = data.data.station["长途汽车站"];
            var str1 = "";
            for (var i = 0; i < BusStation.length; i++) {
                str1 += '<li class="Business_Circlesli2">' + BusStation[i] + '</li>';
            }
            $(".Stationul2").append(str1);
            //限制字符个数
            $(".Business_Circlesli2").each(function() {
                var maxwidth = 5;
                if ($(this).text().length > maxwidth) {
                    $(this).text($(this).text().substring(0, maxwidth));
                    $(this).html($(this).html() + '…');
                }
            });

            var Airport = data.data.station["飞机场"];
            var str2 = "";
            for (var i = 0; i < Airport.length; i++) {
                str2 += '<li class="Business_Circlesli3">' + Airport[i] + '</li>';
            }
            $(".Stationul3").append(str2);
            //限制字符个数
            $(".Business_Circlesli3").each(function() {
                var maxwidth = 5;
                if ($(this).text().length > maxwidth) {
                    $(this).text($(this).text().substring(0, maxwidth));
                    $(this).html($(this).html() + '…');
                }
            });
        });
}
$(".Stationul1").on("click", "li ", function() {
    var Uarry = $(".Stationul1 li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicemessagein").val(Tresult);
});
$(".Stationul2").on("click", "li ", function() {
    var Uarry = $(".Stationul2 li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicemessagein").val(Tresult);
});
$(".Stationul3").on("click", "li ", function() {
    var Uarry = $(".Stationul3 li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicemessagein").val(Tresult);
});


//景点
function Scenic() {
    let cityName = $(".choicecityin").val();
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/city/view/spot", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                cityName: cityName
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            // 处理ajax成功的回调
            var viewSpot = data.data.viewSpot;
            var str = "";
            for (var i = 0; i < viewSpot.length; i++) {
                str += '<li class="Scenicli">' + viewSpot[i] + '</li>';
            }
            $(".Scenic_ul").append(str);
            $(function() {
                //限制字符个数
                $(".Business_Circlesli").each(function() {
                    var maxwidth = 3;
                    if ($(this).text().length > maxwidth) {
                        $(this).text($(this).text().substring(0, maxwidth));
                        $(this).html($(this).html() + '…');
                    }
                });
            });
        })
}
$(".Scenic_ul").on("click", "li ", function() {
    var Uarry = $(".Scenic_ul li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicemessagein").val(Tresult);
});
//一打开页面显示的西安酒店函数
function hotelist(page) {
    let img_url = "https://dev.apis.sh/P7G0PaMgO/static/";
    let cityName = $(".choicecityin").val();
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/hotel/list", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                cityName: cityName,
                limit: '5',
                page: page
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            var a = [];
            console.log(a);
            var Dynamic = data.data.hotelList;
            var str = "";
            for (var i = 0; i < Dynamic.length; i++) {
                str += '<div class="divbox">';
                str += '<div class="divinside">';
                str += '<a target = "_blank" href="Hotel_Details.html?hotel_id=' + Dynamic[i]._id + '">'
                str += '<img class="picture" src="' + img_url + Dynamic[i].picture['0'] + '">';
                str += '</a>'
                str += '<div class="rightbox">'; //图片右边的盒子
                str += '<span class="name">' + Dynamic[i].name + '</span>'; //酒店名字
                // str += '<span class="star">' + Dynamic[i].star_level + '</span>' //几个星星
                if (Dynamic[i].star_level == 3) {
                    str += '<span class="strstar">';
                    str += '<img class="starimg1" src="img/icon_star.png"><img class="starimg2" src="img/icon_star.png"><img class="starimg3" src="img/icon_star.png">';
                    str += '</span>';
                } else if (Dynamic[i].star_level == 4) {
                    str += '<span class="strstar">';
                    str += '<img class="starimg1" src="img/icon_star.png"><img class="starimg1" src="img/icon_star.png"><img class="starimg2" src="img/icon_star.png"><img class="starimg3" src="img/icon_star.png">';
                    str += '</span>';
                } else if (Dynamic[i].star_level == 5) {
                    str += '<span class="strstar">';
                    str += '<img class="starimg1" src="img/icon_star.png"><img class="starimg1" src="img/icon_star.png"><img class="starimg1" src="img/icon_star.png"><img class="starimg2" src="img/icon_star.png"><img class="starimg3" src="img/icon_star.png">';
                    str += '</span>';
                } else if (Dynamic[i].star_level == 2) {
                    str += '<span class="strstar">';
                    str += '<img class="starimg2" src="img/icon_star.png"><img class="starimg3" src="img/icon_star.png">';
                    str += '</span>';
                } else if (Dynamic[i].star_level == 1) {
                    str += '<span class="strstar">';
                    str += '<img class="starimg3" src="img/icon_star.png">';
                    str += '</span>';
                }
                // str += '<img class="starimg1" src="img/icon_star.png"><img class="starimg2" src="img/icon_star.png"><img class="starimg3" src="img/icon_star.png"><img class="starimg4" src="img/icon_star.png"><img class="starimg5" src="img/icon_star.png">';
                str += '<span class="address">' + Dynamic[i].address + '</span>'; //地址
                str += '<div class="rightboxoverall">' //图片右边盒子里的盒子，分数，点评
                str += '<span class="overall">' + Dynamic[i].overall_rating + '/5分</span><br>'; //几分
                str += '<span class="comment">' + Dynamic[i].comment_num + '次点评</span>'; //评论次数
                str += '</div>';
                str += '</div>';
                str += '<div class="boxprice">' //价格，详情
                str += '<span class="price">￥' + Dynamic[i].price + '起</span>'
                str += '<a target = "_blank" href="Hotel_Details.html?hotel_id=' + Dynamic[i]._id + '">'
                str += '<button type="button" class="pricebutton">查看详情</button>'
                str += '</a>';
                str += '</div>'
                str += '</div>';
                str += '</div>';


            }
            $(".dynamiclists").append(str);
            $(function() {
                //限制字符个数
                $(".name").each(function() {
                    var maxwidth = 7;
                    if ($(this).text().length > maxwidth) {
                        $(this).text($(this).text().substring(0, maxwidth));
                        $(this).html($(this).html() + '');
                    }
                });
            });
            console.log(Dynamic[0].name);
            console.log(Dynamic[0].location.lat);
            console.log(Dynamic[0].location.lng);
            const map = new BMap.Map("container") // 创建一个地图实例，其参数可以是元素id也可以是元素对象
            map.centerAndZoom(new BMap.Point(Dynamic[0].location.lng, Dynamic[0].location.lat), 13) // 初始化地图，设置中心点坐标和地图级别
            map.enableScrollWheelZoom(true) // 启用滚轮放大缩小，默认禁用
            map.addControl(new BMap.ScaleControl()) // 添加控件，比例尺控件
            map.addControl(new BMap.NavigationControl({
                    type: BMAP_NAVIGATION_CONTROL_ZOOM
                })) // 添加控件，平移缩放控件，type值表示只显示控件的缩放部分功能
            const hotelDataArry = [{
                name: Dynamic[0].name,
                location: new BMap.Point(Dynamic[0].location.lng, Dynamic[0].location.lat)
            }, {
                name: Dynamic[1].name,
                location: new BMap.Point(Dynamic[1].location.lng, Dynamic[1].location.lat)
            }, {
                name: Dynamic[2].name,
                location: new BMap.Point(Dynamic[2].location.lng, Dynamic[2].location.lat)
            }, {
                name: Dynamic[3].name,
                location: new BMap.Point(Dynamic[3].location.lng, Dynamic[3].location.lat)
            }, {
                name: Dynamic[4].name,
                location: new BMap.Point(Dynamic[4].location.lng, Dynamic[4].location.lat)
            }]
            hotelDataArry.forEach(el => {
                const marker = new BMap.Marker(el.location) // 创建标注点
                map.addOverlay(marker) // 向地图添加标注点
                marker.setLabel(new BMap.Label(el.name, {
                        offset: new BMap.Size(20)
                    })) // 向标注点添加标注文本
            })


        });
}

//关键字条件搜索
function Hotel_lists(page, overallRating, price, distance) {
    let hotelKeyword = $(".choicemessagein").val();
    let cityName = $(".choicecityin").val();
    let number = getValue();
    let priceRange = '';
    if (number == '1') {
        priceRange = '0,100';
    } else if (number == '2') {
        priceRange = '100, 300';
    } else if (number == '3') {
        priceRange = '300, 600';
    } else if (number == '4') {
        priceRange = '600, 1000';
    }
    let a = $(".pricesin").val();
    let b = $(".pricesinp").val();
    if (a > 0 || b > 0) {
        priceRange = '' + a + ',' + b + '';
    }
    let number1 = getValue1();
    let starLevel = '';
    if (number1 == '1') {
        starLevel = '5';
    } else if (number1 == '2') {
        starLevel = '4';
    } else if (number1 == '3') {
        starLevel = '3';
    } else if (number1 == '4') {
        starLevel = '2'
    }
    let number2 = getValue2();
    let specialLevel = '';
    if (number2 == '1') {
        specialLevel = '经济连锁';
    } else if (number2 == '2') {
        specialLevel = '客栈公寓';
    }
    let number3 = getValue3();
    let brand = "";
    brand = $("input:checkbox[name='brads']:checked").map(function(index, elem) {
        return $(elem).val();
    }).get().join(',');
    var times = $(".choicedatein").val();
    var str12 = times.split('~');
    var date1 = new Date(str12["0"]);
    var date2 = new Date(str12["1"]);
    var ti1 = date1.getTime();
    var ti2 = date2.getTime();
    let checkTime = '' + ti1 + ',' + ti2 + '';
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/hotel/list", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                cityName: cityName,
                limit: '5',
                page: page,
                checkTime: checkTime,
                hotelKeyword: hotelKeyword,
                priceRange: priceRange,
                starLevel: starLevel,
                specialLevel: specialLevel,
                brand: brand,
                overallRating: overallRating,
                price: price,
                distance: distance
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) {
            // 处理ajax成功的回调
            if (data.code == "success") {
                let img_url = "https://dev.apis.sh/P7G0PaMgO/static/";
                var Dynamic = data.data.hotelList;
                var str = "";
                for (var i = 0; i < Dynamic.length; i++) {
                    str += '<div class="divbox">';
                    str += '<div class="divinside">';
                    str += '<a target = "_blank" href="Hotel_Details.html?hotel_id=' + Dynamic[i]._id + '">'
                    str += '<img class="picture" src="' + img_url + Dynamic[i].picture['0'] + '">';
                    str += '</a>'
                    str += '<div class="rightbox">'; //图片右边的盒子
                    str += '<span class="name">' + Dynamic[i].name + '</span>'; //酒店名字
                    // str += '<span class="star">' + Dynamic[i].star_level + '</span><br>' //几个星星
                    if (Dynamic[i].star_level == 3) {
                        str += '<span class="strstar">';
                        str += '<img class="starimg1" src="img/icon_star.png"><img class="starimg2" src="img/icon_star.png"><img class="starimg3" src="img/icon_star.png">';
                        str += '</span>';
                    } else if (Dynamic[i].star_level == 4) {
                        str += '<span class="strstar">';
                        str += '<img class="starimg1" src="img/icon_star.png"><img class="starimg1" src="img/icon_star.png"><img class="starimg2" src="img/icon_star.png"><img class="starimg3" src="img/icon_star.png">';
                        str += '</span>';
                    } else if (Dynamic[i].star_level == 5) {
                        str += '<span class="strstar">';
                        str += '<img class="starimg1" src="img/icon_star.png"><img class="starimg1" src="img/icon_star.png"><img class="starimg1" src="img/icon_star.png"><img class="starimg2" src="img/icon_star.png"><img class="starimg3" src="img/icon_star.png">';
                        str += '</span>';
                    } else if (Dynamic[i].star_level == 2) {
                        str += '<span class="strstar">';
                        str += '<img class="starimg2" src="img/icon_star.png"><img class="starimg3" src="img/icon_star.png">';
                        str += '</span>';
                    } else if (Dynamic[i].star_level == 1) {
                        str += '<span class="strstar">';
                        str += '<img class="starimg3" src="img/icon_star.png">';
                        str += '</span>';
                    }
                    str += '<span class="address">' + Dynamic[i].address + '</span>'; //地址
                    str += '<div class="rightboxoverall">' //图片右边盒子里的盒子，分数，点评
                    str += '<span class="overall">' + Dynamic[i].overall_rating + '/5分</span><br>'; //几分
                    str += '<span class="comment">' + Dynamic[i].comment_num + '次点评</span>'; //评论次数
                    str += '</div>';
                    str += '</div>';
                    str += '<div class="boxprice">' //价格，详情
                    str += '<span class="price">￥' + Dynamic[i].price + '起</span>'
                    str += '<a target = "_blank" href="Hotel_Details.html?hotel_id=' + Dynamic[i]._id + '">'
                    str += '<button type="button" class="pricebutton">查看详情</button>'
                    str += '</a>';
                    str += '</div>'
                    str += '</div>';
                    str += '</div>';
                }
                $(".dynamiclists1").append(str);
            } else if (data.code == "hotel_not_found") {
                $(".loading").html("别拉了，我可是是有底线的哦");
            }
            const map = new BMap.Map("container1") // 创建一个地图实例，其参数可以是元素id也可以是元素对象
            map.centerAndZoom(new BMap.Point(Dynamic[0].location.lng, Dynamic[0].location.lat), 13) // 初始化地图，设置中心点坐标和地图级别
            map.enableScrollWheelZoom(true) // 启用滚轮放大缩小，默认禁用
            map.addControl(new BMap.ScaleControl()) // 添加控件，比例尺控件
            map.addControl(new BMap.NavigationControl({
                    type: BMAP_NAVIGATION_CONTROL_ZOOM
                })) // 添加控件，平移缩放控件，type值表示只显示控件的缩放部分功能
            const hotelDataArry = [{
                name: Dynamic[0].name,
                location: new BMap.Point(Dynamic[0].location.lng, Dynamic[0].location.lat)
            }, {
                name: Dynamic[1].name,
                location: new BMap.Point(Dynamic[1].location.lng, Dynamic[1].location.lat)
            }, {
                name: Dynamic[2].name,
                location: new BMap.Point(Dynamic[2].location.lng, Dynamic[2].location.lat)
            }, {
                name: Dynamic[3].name,
                location: new BMap.Point(Dynamic[3].location.lng, Dynamic[3].location.lat)
            }, {
                name: Dynamic[4].name,
                location: new BMap.Point(Dynamic[4].location.lng, Dynamic[4].location.lat)
            }]
            hotelDataArry.forEach(el => {
                const marker = new BMap.Marker(el.location) // 创建标注点
                map.addOverlay(marker) // 向地图添加标注点
                marker.setLabel(new BMap.Label(el.name, {
                        offset: new BMap.Size(20)
                    })) // 向标注点添加标注文本
            })
        });

}
//搜索按钮
$(".btn").click(function() {
    $(".container1c").show();
    $(".dynamiclists1").show();
    $('.dynamiclists1').empty();
    $(".dynamiclists").hide();
    Hotel_lists('1');
    window.addEventListener('scroll', _.throttle(lazyLoad1(), 100));

});
var va1;
var va2;
var va3;
//推荐
$(".recommend1").click(function() {
    $(".container1c").show();
    $(".dynamiclists1").show();
    $('.dynamiclists1').empty();
    $(".dynamiclists").hide();
    Hotel_lists('1', '', '', '');

});
//按照评价
$(".recommend2").click(function() {
    $(".container1c").show();
    $(".dynamiclists1").show();
    $('.dynamiclists1').empty();
    $(".dynamiclists").hide();
    va1 = 1;
    va2 = '';
    va3 = '';
    Hotel_lists('1', '1', '', '');
});
//按照价格
$(".recommend3").click(function() {
    $(".container1c").show();
    $(".dynamiclists1").show();
    $('.dynamiclists1').empty();
    $(".dynamiclists").hide();
    va1 = '';
    va2 = 1;
    va3 = '';
    Hotel_lists('1', '', '1', '');
});
//按照距离
$(".recommend4").click(function() {
    $(".container1c").show();
    $(".dynamiclists1").show();
    $('.dynamiclists1').empty();
    $(".dynamiclists").hide();
    va1 = '';
    va2 = '';
    va3 = 1;
    Hotel_lists('1', '', '', '1');
});

function getValue() {
    var radio = document.getElementsByName("names");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value
        }
    }
}
//星级
function getValue1() {
    var radio = document.getElementsByName("stars");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value
        }
    }
}
//经济连锁
function getValue2() {
    var radio = document.getElementsByName("star");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value
        }
    }
}

//快捷酒店
function getValue3() {
    var radio = document.getElementsByName("brads");
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value
        }
    }
}


//懒加载
//页面一打开整个西安的酒店
function lazyLoad() {
    var page = 2;
    return function() {
        var loading = document.getElementById("loading");
        if (loading.getBoundingClientRect().top + loading.offsetHeight < document.documentElement.clientHeight) {
            // hotelist(page++);
            $(".mapone").css("position", "fixed");
            $(".mapone").css("right", "230px");
            $(".mapone").css(".bottom", "30px");
        }
    }
}
//懒加载
//搜索,推荐懒加载
function lazyLoad1() {
    var page = 2;
    return function() {
        var loading = document.getElementById("loading");
        if (loading.getBoundingClientRect().top + loading.offsetHeight < document.documentElement.clientHeight) {

            // Hotel_lists(page++, va1, va2, va3);
        }
    }
}

//我的订单
$(".span1").click(function() {
    window.location.href = "Order_list.html"
});
//添加城市
function getCaptchareceive() {

    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/city/list", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) { // 处理ajax成功的回调

            //热门城市
            var list = data.data.hot;
            var str = "";
            for (var i = 0; i < list.length; i++) {
                str += '<li class="li-list0" >' + list[i].cityName + '</li>';
            }
            $(".ul-listrm").append(str);
            //abcdef
            var abcdef1 = data.data.cityList.a;
            var abcdef2 = data.data.cityList.b;
            var abcdef3 = data.data.cityList.c;
            var abcdef4 = data.data.cityList.d;
            var abcdef5 = data.data.cityList.e;
            var abcdef6 = data.data.cityList.f;
            var str1 = "";
            for (var i = 0; i < abcdef1.length; i++) {
                str1 += '<li class="li-list" id="li-list">' + abcdef1[i].cityName + '</li>';
            }
            $(".ul-list").append(str1);
            var str2 = "";
            for (var i = 0; i < abcdef2.length; i++) {
                str2 += '<li class="li-list">' + abcdef2[i].cityName + '</li>';
            }
            $(".ul-list").append(str2);
            var str3 = "";
            for (var i = 0; i < abcdef3.length; i++) {
                str3 += '<li class="li-list">' + abcdef3[i].cityName + '</li>';
            }
            $(".ul-list").append(str3);

            var str4 = "";
            for (var i = 0; i < abcdef4.length; i++) {
                str4 += '<li class="li-list">' + abcdef4[i].cityName + '</li>';
            }
            $(".ul-list").append(str4);
            var str5 = "";
            for (var i = 0; i < abcdef5.length; i++) {
                str5 += '<li class="li-list">' + abcdef5[i].cityName + '</li>';
            }
            $(".ul-list").append(str5);
            var str6 = "";
            for (var i = 0; i < abcdef6.length; i++) {
                str6 += '<li class="li-list">' + abcdef6[i].cityName + '</li>';
            }
            $(".ul-list").append(str6);

            $(function() {
                //限制字符个数
                $(".li-list").each(function() {
                    var maxwidth = 3;
                    if ($(this).text().length > maxwidth) {
                        $(this).text($(this).text().substring(0, maxwidth));
                        $(this).html($(this).html() + '…');
                    }
                });
            });

            //ghjk
            var ghjk1 = data.data.cityList.g;
            var ghjk2 = data.data.cityList.h;
            var ghjk3 = data.data.cityList.j;
            var ghjk4 = data.data.cityList.k;

            var gh1 = ""
            for (var i = 0; i < ghjk1.length; i++) {
                gh1 += '<li class="li-list1">' + ghjk1[i].cityName + ' </li>';
            }
            $(".ul-listgk").append(gh1);

            var gh2 = ""
            for (var i = 0; i < ghjk2.length; i++) {
                gh2 += '<li class="li-list1">' + ghjk2[i].cityName + ' </li>';
            }
            $(".ul-listgk").append(gh2);

            var gh3 = ""
            for (var i = 0; i < ghjk3.length; i++) {
                gh3 += '<li class="li-list1">' + ghjk3[i].cityName + ' </li>';
            }
            $(".ul-listgk").append(gh3);
            var gh4 = ""
            for (var i = 0; i < ghjk4.length; i++) {
                gh4 += '<li class="li-list1">' + ghjk4[i].cityName + ' </li>';
            }
            $(".ul-listgk").append(gh4);

            $(function() {
                //限制字符个数
                $(".li-list1").each(function() {
                    var maxwidth = 3;
                    if ($(this).text().length > maxwidth) {
                        $(this).text($(this).text().substring(0, maxwidth));
                        $(this).html($(this).html() + '…');
                    }
                });
            });
            //lmnpq
            var lmnpq1 = data.data.cityList.l;
            var lmnpq2 = data.data.cityList.m;
            var lmnpq3 = data.data.cityList.n;
            var lmnpq4 = data.data.cityList.p;
            var lmnpq5 = data.data.cityList.q;

            var lnm1 = "";
            for (var i = 0; i < lmnpq1.length; i++) {
                lnm1 += '<li class="li-list2">' + lmnpq1[i].cityName + '</li>';
            }
            $(".ul-listlq").append(lnm1);
            var lnm2 = "";
            for (var i = 0; i < lmnpq2.length; i++) {
                lnm2 += '<li class="li-list2">' + lmnpq2[i].cityName + '</li>';
            }
            $(".ul-listlq").append(lnm2);
            var lnm3 = "";
            for (var i = 0; i < lmnpq3.length; i++) {
                lnm3 += '<li class="li-list2">' + lmnpq3[i].cityName + '</li>';
            }
            $(".ul-listlq").append(lnm3);
            var lnm4 = "";
            for (var i = 0; i < lmnpq4.length; i++) {
                lnm4 += '<li class="li-list2">' + lmnpq4[i].cityName + '</li>';
            }
            $(".ul-listlq").append(lnm4);
            var lnm5 = "";
            for (var i = 0; i < lmnpq5.length; i++) {
                lnm5 += '<li class="li-list2">' + lmnpq5[i].cityName + '</li>';
            }
            $(".ul-listlq").append(lnm5);

            $(function() {
                //限制字符个数
                $(".li-list2").each(function() {
                    var maxwidth = 3;
                    if ($(this).text().length > maxwidth) {
                        $(this).text($(this).text().substring(0, maxwidth));
                        $(this).html($(this).html() + '…');
                    }
                });
            });
            //rstw
            var rstw1 = data.data.cityList.r;
            var rstw2 = data.data.cityList.s;
            var rstw3 = data.data.cityList.t;
            var rstw4 = data.data.cityList.w;
            var rst1 = "";
            for (var i = 0; i < rstw1.length; i++) {
                rst1 += '<li class="li-list3">' + rstw1[i].cityName + '</li>';
            }
            $(".ul-listrw").append(rst1);

            var rst2 = "";
            for (var i = 0; i < rstw2.length; i++) {
                rst2 += '<li class="li-list3">' + rstw2[i].cityName + '</li>';
            }
            $(".ul-listrw").append(rst2);
            var rst3 = "";
            for (var i = 0; i < rstw3.length; i++) {
                rst3 += '<li class="li-list3">' + rstw3[i].cityName + '</li>';
            }
            $(".ul-listrw").append(rst3);
            $(function() {
                //限制字符个数
                $(".li-list3").each(function() {
                    var maxwidth = 3;
                    if ($(this).text().length > maxwidth) {
                        $(this).text($(this).text().substring(0, maxwidth));
                        $(this).html($(this).html() + '…');
                    }
                });
            });

            //xyz
            var xyz1 = data.data.cityList.x;
            var xyz2 = data.data.cityList.y;
            var xyz3 = data.data.cityList.z;

            var xy1 = "";
            for (var i = 0; i < xyz1.length; i++) {
                xy1 += '<li class="li-list4">' + xyz1[i].cityName + '</li>';
            }
            $(".ul-listxz").append(xy1);

            var xy2 = "";
            for (var i = 0; i < xyz2.length; i++) {
                xy2 += '<li class="li-list4">' + xyz2[i].cityName + '</li>';
            }
            $(".ul-listxz").append(xy2);
            var xy3 = "";
            for (var i = 0; i < xyz3.length; i++) {
                xy3 += '<li class="li-list4">' + xyz3[i].cityName + '</li>';
            }
            $(".ul-listxz").append(xy3);
            $(function() {
                //限制字符个数
                $(".li-list4").each(function() {
                    var maxwidth = 3;
                    if ($(this).text().length > maxwidth) {
                        $(this).text($(this).text().substring(0, maxwidth));
                        $(this).html($(this).html() + '…');
                    }
                });
            });
        });
}

$(".ul-listrm").on("click", "li ", function() {
    var Uarry = $(".ul-listrm li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicecityin").val(Tresult);
    $(".ajaxcity").hide();
});
$(".ul-list").on("click", "li ", function() {
    var Uarry = $(".ul-list li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicecityin").val(Tresult);
    $(".ajaxcity").hide();
});
$(".ul-listgk").on("click", "li ", function() {
    var Uarry = $(".ul-listgk li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicecityin").val(Tresult);
    $(".ajaxcity").hide();
});
$(".ul-listlq").on("click", "li ", function() {
    var Uarry = $(".ul-listlq li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicecityin").val(Tresult);
    $(".ajaxcity").hide();
});
$(".ul-listrw").on("click", "li ", function() {
    var Uarry = $(".ul-listrw li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicecityin").val(Tresult);
    $(".ajaxcity").hide();
});
$(".ul-listxz").on("click", "li ", function() {
    var Uarry = $(".ul-listxz li"); //获取所有的li元素
    var count = $(this).index(); //获取li的下标  
    var Tresult = Uarry.eq(count).text();
    $(".choicecityin").val(Tresult);
    $(".ajaxcity").hide();
});


//展开合上
$(".onclickimg").click(function() {
    $(".ajaxcity").show();
    $(".ajaxcitylist").show();
    // $(".ajaxcitylist").toggle();

});
$(".navigation1").css("background", "#5944C3");
//鼠标移入移出事件
$(".navigation1").mouseenter(function() {
    $(".ajaxlist1").show();
    $(".ajaxlist1").siblings().hide();
    $(".navigation1").css("background", "#5944C3");
    $(".navigation1").siblings().css("background", "");
});

$(".navigation2").mouseenter(function() {
    $(".ajaxlist2").show();
    $(".ajaxlist2").siblings().hide();
    $(".navigation2").css("background", "#5944C3");
    $(".navigation2").siblings().css("background", "");
});
$(".navigation3").mouseenter(function() {
    $(".ajaxlist3").show();
    $(".ajaxlist3").siblings().hide();
    $(".navigation3").css("background", "#5944C3");
    $(".navigation3").siblings().css("background", "");
});
$(".navigation4").mouseenter(function() {
    $(".ajaxlist4").show();
    $(".ajaxlist4").siblings().hide();
    $(".navigation4").css("background", "#5944C3");
    $(".navigation4").siblings().css("background", "");
});
$(".navigation5").mouseenter(function() {
    $(".ajaxlist5").show();
    $(".ajaxlist5").siblings().hide();
    $(".navigation5").css("background", "#5944C3");
    $(".navigation5").siblings().css("background", "");
});
$(".navigation6").mouseenter(function() {
    $(".ajaxlist6").show();
    $(".ajaxlist6").siblings().hide();
    $(".navigation6").css("background", "#5944C3");
    $(".navigation6").siblings().css("background", "");
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