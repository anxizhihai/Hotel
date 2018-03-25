$(".img1").click(function() {
    $(".img1").attr("src", "img/icon_checkbox_choose.png");
    $(".img2").attr("src", "img/icon_checkbox.png");
    $(".img3").attr("src", "img/icon_checkbox.png");
    $(".img4").attr("src", "img/icon_checkbox.png");
})
$(".img2").click(function() {
    $(".img2").attr("src", "img/icon_checkbox_choose.png");
    $(".img1").attr("src", "img/icon_checkbox.png");
    $(".img3").attr("src", "img/icon_checkbox.png");
    $(".img4").attr("src", "img/icon_checkbox.png");
})
$(".img3").click(function() {
    $(".img3").attr("src", "img/icon_checkbox_choose.png");
    $(".img1").attr("src", "img/icon_checkbox.png");
    $(".img2").attr("src", "img/icon_checkbox.png");
    $(".img4").attr("src", "img/icon_checkbox.png");
})
$(".img4").click(function() {
    $(".img4").attr("src", "img/icon_checkbox_choose.png");
    $(".img1").attr("src", "img/icon_checkbox.png");
    $(".img2").attr("src", "img/icon_checkbox.png");
    $(".img3").attr("src", "img/icon_checkbox.png");
});

$(".starimgs1").click(function() {
    $(".starimgs1").attr("src", "img/icon_checkbox_choose.png");
    $(".starimgs2").attr("src", "img/icon_checkbox.png");
    $(".starimgs3").attr("src", "img/icon_checkbox.png");
    $(".starimgs4").attr("src", "img/icon_checkbox.png");

});
$(".starimgs2").click(function() {
    $(".starimgs2").attr("src", "img/icon_checkbox_choose.png");
    $(".starimgs1").attr("src", "img/icon_checkbox.png");
    $(".starimgs3").attr("src", "img/icon_checkbox.png");
    $(".starimgs4").attr("src", "img/icon_checkbox.png");

});
$(".starimgs3").click(function() {
    $(".starimgs3").attr("src", "img/icon_checkbox_choose.png");
    $(".starimgs2").attr("src", "img/icon_checkbox.png");
    $(".starimgs1").attr("src", "img/icon_checkbox.png");
    $(".starimgs4").attr("src", "img/icon_checkbox.png");

});
$(".starimgs4").click(function() {
    $(".starimgs4").attr("src", "img/icon_checkbox_choose.png");
    $(".starimgs2").attr("src", "img/icon_checkbox.png");
    $(".starimgs3").attr("src", "img/icon_checkbox.png");
    $(".starimgs1").attr("src", "img/icon_checkbox.png");

});

$(".starimgs11").click(function() {
    $(".starimgs11").attr("src", "img/icon_checkbox_choose.png");
    $(".starimgs12").attr("src", "img/icon_checkbox.png");
});
$(".starimgs12").click(
    function() {
        $(".starimgs12").attr("src", "img/icon_checkbox_choose.png");
        $(".starimgs11").attr("src", "img/icon_checkbox.png");
    }

);
$(document).ready(function() {
    trunaround(".bradsimg1");
    trunaround(".bradsimg2");
    trunaround(".bradsimg3");
    trunaround(".bradsimg4");
    trunaround(".bradsimg5");
    trunaround(".bradsimg6");
});
//封装品牌一栏样式函数
function trunaround(alte) {
    var coun = 0;
    $(alte).click(function() {
        coun++;
        if (coun % 2 == 0) {
            $(alte).attr("src", "img/icon_checkbox.png");
        } else {
            $(alte).attr("src", "img/icon_checkbox_choose.png");
        }
    })
}
// 移除单选框选中状态
// var remove = $(".anyprices");
$(".anyprices").click(function(e) {
    var checkedbrowser = document.getElementsByName("names");
    var len = checkedbrowser.length;

    for (var i = 0; i < len; i++) {
        checkedbrowser[i].checked = false;
        checkedbrowser[i].removeAttribute("checked");
    }
    $(".img1").attr("src", "img/icon_checkbox.png");
    $(".img2").attr("src", "img/icon_checkbox.png");
    $(".img3").attr("src", "img/icon_checkbox.png");
    $(".img4").attr("src", "img/icon_checkbox.png");
});
$(".everyprice").click(function(e) {
    var checkedbrowser = document.getElementsByName("stars");
    var len = checkedbrowser.length;

    for (var i = 0; i < len; i++) {
        checkedbrowser[i].checked = false;
        checkedbrowser[i].removeAttribute("checked");
    }
    $(".starimgs1").attr("src", "img/icon_checkbox.png");
    $(".starimgs2").attr("src", "img/icon_checkbox.png");
    $(".starimgs3").attr("src", "img/icon_checkbox.png");
    $(".starimgs4").attr("src", "img/icon_checkbox.png");
});
$(".everyprice").click(function(e) {
    var checkedbrowser = document.getElementsByName("star");
    var len = checkedbrowser.length;

    for (var i = 0; i < len; i++) {
        checkedbrowser[i].checked = false;
        checkedbrowser[i].removeAttribute("checked");
    }
    $(".starimgs11").attr("src", "img/icon_checkbox.png");
    $(".starimgs12").attr("src", "img/icon_checkbox.png");

});
$(".Unlimited").click(function(e) {
    var checkedbrowser = document.getElementsByName("brads");
    var len = checkedbrowser.length;

    for (var i = 0; i < len; i++) {
        checkedbrowser[i].checked = false;
        checkedbrowser[i].removeAttribute("checked");
    }
    $(".bradsimg1").attr("src", "img/icon_checkbox.png");
    $(".bradsimg2").attr("src", "img/icon_checkbox.png");
    $(".bradsimg3").attr("src", "img/icon_checkbox.png");
    $(".bradsimg4").attr("src", "img/icon_checkbox.png");
    $(".bradsimg5").attr("src", "img/icon_checkbox.png");
    $(".bradsimg6").attr("src", "img/icon_checkbox.png");

});

//推荐一栏
$(".recommend1").click(function() {
    $(".recommend1").css("background-color", "#5944C3");
    $(".recommend1").siblings().css("background-color", "");
    $(".recommend22").attr("src", "img/icon_arrow_down1.png");
    $(".recommend32").attr("src", "img/icon_arrow_down1.png");
    $(".recommend42").attr("src", "img/icon_arrow_up1.png");

});
$(".recommend2").click(function() {
    $(".recommend2").css("background-color", "#5944C3");
    $(".recommend2").siblings().css("background-color", "");
    $(".recommend22").attr("src", "img/icon_arrow_down1_white.png");
    $(".recommend32").attr("src", "img/icon_arrow_down1.png");
    $(".recommend42").attr("src", "img/icon_arrow_up1.png");
});
$(".recommend3").click(function() {
    $(".recommend3").css("background-color", "#5944C3");
    $(".recommend3").siblings().css("background-color", "");
    $(".recommend32").attr("src", "img/icon_arrow_down1_white.png");
    $(".recommend22").attr("src", "img/icon_arrow_down1.png");
    $(".recommend42").attr("src", "img/icon_arrow_up1.png");
});
$(".recommend4").click(function() {
    $(".recommend4").css("background-color", "#5944C3");
    $(".recommend4").siblings().css("background-color", "");
    $(".recommend42").attr("src", "img/icon_arrow_up1_white.png")
    $(".recommend22").attr("src", "img/icon_arrow_down1.png");
    $(".recommend32").attr("src", "img/icon_arrow_down1.png");
});