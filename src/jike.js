document.addEventListener('DOMContentLoaded', function () {
    var today = new Date();
    var myday = today.getDay();//注:0-6对应为星期日到星期六
    var week;
    switch (myday) {
        case 0:
            week = "星期日";
            break;
        case 1:
            week = "星期一";
            break;
        case 2:
            week = "星期二";
            break;
        case 3:
            week = "星期三";
            break;
        case 4:
            week = "星期四";
            break;
        case 5:
            week = "星期五";
            break;
        case 6:
            week = "星期六";
            break;
        default:
            week = "系统错误！"
    }
    var month = today.getMonth();//注:0-11对应为一月到十二月
    var monthCn;
    switch (month) {
        case 0:
            monthCn = "一";
            break;
        case 1:
            monthCn = "二";
            break;
        case 2:
            monthCn = "三";
            break;
        case 3:
            monthCn = "四";
            break;
        case 4:
            monthCn = "五";
            break;
        case 5:
            monthCn = "六";
            break;
        case 6:
            monthCn = "七";
            break;
        case 7:
            monthCn = "八";
            break;
        case 8:
            monthCn = "九";
            break;
        case 9:
            monthCn = "十";
            break;
        case 10:
            monthCn = "十一";
            break;
        case 11:
            monthCn = "十二";
            break;
        default:
            monthCn = "系统错误！"
    }
    $("#header").html(today.getFullYear() + " " + monthCn + "月" + " " + week);
    $("#body").html(today.getDate());

    $.ajax({
        url: "https://v1.hitokoto.cn",
        success: function (result) {
            $("#contentA").html(result.hitokoto);
            $("#footer").html("via " + result.creator + " from " + result.from);
        }
    });

    $.ajax({
        url: "https://api.juejin.cn/growth_api/v1/get_coder_calendar",
        success: function (result) {
            $("#content").html(result.data.should_or_not);
        }
    });
});
