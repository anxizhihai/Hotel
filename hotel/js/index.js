$(document).ready(function() {
    let img_url = "https://dev.apis.sh/P7G0PaMgO/static/";
    $(".peravator").attr("src", img_url + localStorage.pit);
    $(".pernames").html(localStorage.username);
    if (localStorage.token !== "") {
        $(".header1").show();
        $(".header").hide();
    }
    $(".arrowsul li").eq(0).css("border-color", "transparent transparent #5944C3 transparent");
    getCaptchareceive();
    hothotel("西安");
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

// $(document).bind("click", function() {
//     $('.ajaxcity').hide();
// });
//li的点击事件
var element = $("ul li").eq(0);


//首页加载的热门城市列表
function hothotel(cityName) {
    let img_url = "https://dev.apis.sh/P7G0PaMgO/static/";
    $.ajax("https://dev.apis.sh/P7G0PaMgO/v1/hotel/list", {
            method: "get", // get请求
            dataType: 'json', // 当服务器发来html元素时，需要如此设置，使ajax进行html解析
            data: {
                cityName: cityName,
                limit: '8',
                page: '1'
            },
            xhrFields: {
                withCredentials: true // 允许跨域名储存和访问cookie
            }
        })
        .done(function(data) { // 处理ajax成功的回调

            if (data.code == "success") {
                var hotel = data.data.hotelList;
                var str = '';
                for (var i = 0; i < hotel.length; i++) {
                    str += '<a target = "_blank" href="Hotel_Details.html?hotel_id=' + hotel[i]._id + '">';
                    str += '<div class="hotelslist" style="background:url(' + img_url + hotel[i].picture["0"] + '); height:220; width:220;">';
                    str += '<div class="insideboxlist">';
                    str += '<div>';
                    str += '<span class="hotelnames">' + hotel[i].name + ' </span>';
                    if (hotel[i].price >= 300) {
                        str += '<span class="Deluxe">豪华型</span>';
                    } else if (hotel[i].price < 300) {
                        str += '<span class="Deluxe">高档型</span>';
                    }
                    str += '<div class="pricehotels"><span class="pricehotel">￥</span><span>' + hotel[i].price + '</span></div>';
                    str += '</div>';
                    str += '</div>';
                    str += '</div>';
                    str += '</a>';
                }
                $(".Dynamicl").html(str);
                //限制字符个数
                $(".hotelnames").each(function() {
                    var maxwidth = 7;
                    if ($(this).text().length > maxwidth) {
                        $(this).text($(this).text().substring(0, maxwidth));
                        $(this).html($(this).html() + '');
                    }
                });
            } else {
                var str1 = '';
                str1 += '<div class="empt">暂无数据</div>';
                $(".Dynamicl").html(str1);

            }


        })
}
$(".ulli li").eq(1).bind('click', function() {
    hothotel($(this).html());
    $(".arrowsul li").eq(0).css("border-color", "transparent transparent #5944C3 transparent");
    $(".arrowsul li").eq(0).siblings().css("border-color", "transparent transparent #FFFFFF transparent");

});
$(".ulli li").eq(2).bind('click', function() {
    hothotel($(this).html());
    $(".arrowsul li").eq(1).css("border-color", "transparent transparent #5944C3 transparent");
    $(".arrowsul li").eq(1).siblings().css("border-color", "transparent transparent #FFFFFF transparent");
});
$(".ulli li").eq(3).bind('click', function() {
    hothotel($(this).html());
    $(".arrowsul li").eq(2).css("border-color", "transparent transparent #5944C3 transparent");
    $(".arrowsul li").eq(2).siblings().css("border-color", "transparent transparent #FFFFFF transparent");
});
$(".ulli li").eq(4).bind('click', function() {
    hothotel($(this).html());
    $(".arrowsul li").eq(3).css("border-color", "transparent transparent #5944C3 transparent");
    $(".arrowsul li").eq(3).siblings().css("border-color", "transparent transparent #FFFFFF transparent");
});
$(".ulli li").eq(5).bind('click', function() {
    hothotel($(this).html());
    $(".arrowsul li").eq(4).css("border-color", "transparent transparent #5944C3 transparent");
    $(".arrowsul li").eq(4).siblings().css("border-color", "transparent transparent #FFFFFF transparent");
});
$(".ulli li").eq(6).bind('click', function() {
    hothotel($(this).html());
    $(".arrowsul li").eq(5).css("border-color", "transparent transparent #5944C3 transparent");
    $(".arrowsul li").eq(5).siblings().css("border-color", "transparent transparent #FFFFFF transparent");
});
$(".ulli li").eq(7).bind('click', function() {
    hothotel($(this).html());
    $(".arrowsul li").eq(6).css("border-color", "transparent transparent #5944C3 transparent");
    $(".arrowsul li").eq(6).siblings().css("border-color", "transparent transparent #FFFFFF transparent");
});
$(".ulli li").eq(8).bind('click', function() {
    hothotel($(this).html());
    $(".arrowsul li").eq(7).css("border-color", "transparent transparent #5944C3 transparent");
    $(".arrowsul li").eq(7).siblings().css("border-color", "transparent transparent #FFFFFF transparent");
});
$(".ulli li").eq(9).bind('click', function() {
    hothotel($(this).html());
    $(".arrowsul li").eq(8).css("border-color", "transparent transparent #5944C3 transparent");
    $(".arrowsul li").eq(8).siblings().css("border-color", "transparent transparent #FFFFFF transparent");
});
$(".ulli li").eq(10).bind('click', function() {
    hothotel($(this).html());
    $(".arrowsul li").eq(9).css("border-color", "transparent transparent #5944C3 transparent");
    $(".arrowsul li").eq(9).siblings().css("border-color", "transparent transparent #FFFFFF transparent");
});


// var strbtn = '';
// strbtn += '<a target = "_blank" href="Hotel_screening.html?ainput=' + ainput + '&dates=' + adates + '&aimport=' + aimport + '">';
// strbtn += '<button class="btn" type="button">搜索</button>';
// strbtn += '</a>';
// $(".search").append(strbtn);
$(".btn").click(function() {
    var ainput = $(".choicecityin").val();
    var adates = $(".choicedatein").val();
    var aimport = $(".choicemessagein").val();
    window.location.href = "Hotel_screening.html?ainput=" + ainput + "&dates=" + adates + "&aimport=" + aimport + "";
})