$(document).ready(function() {

    page(0);
})

var a = '10'
var num = a;

function page(l) {

    str = '';
    str += '<span class="li1" id="li1"><img class="images" src="img/icon_back_month.png"></span>'
    for (var i = 1; i <= num; i++) {
        str += '<li class="li" value="' + i + '" >' + i + '';
    }
    var html = '<span class="li" id="li3">...</span>';
    str += '<li class="li" id="li2">向右</li>';
    $(".ul").html(str);
    $(".li").siblings().hide();
    $(".li1").show();
    $(".li").eq(0 + l).show();
    $(".li").eq(1 + l).show();
    $(".li").eq(2 + l).show();

    $(".li").eq(-2).show();
    $(".li").eq(-1).show();
    $(".li").eq(-3).after(html);
}
var l = 1;
//如果l小于0,不能点击
$(".ul").on("click", ".li1", function() {
    if (l >= 0) {
        page(l--);
        $("#li2").attr("disabled", false);
        $("#li2").css("color", "");
    } else {
        $(".li1").attr("disabled", true);
        $(".li1").css("color", "red");
    }
});
//如果l到达15,让按钮不能点击
$(".ul").on("click", "#li2", function() {
    if (l <= 5) {
        page(++l);
        $(".li1").attr("disabled", false);
        $(".li1").css("color", "");

    } else if (l > 5) {
        $("#li2").attr("disabled", true);
        $("#li2").css("color", "red");
    }
    //如果l到达最后5位，让...隐藏
    switch (l) {
        case 5:
            $("#li3").hide();
            break;
        case 6:
            $("#li3").hide();
    }

});

$(".ul").on("click", "li", function() {
    var limit = $(this).val();
});