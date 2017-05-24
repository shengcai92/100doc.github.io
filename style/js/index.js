$(function () {


    // 开启全屏滚动的方法
    $('#dowebok').fullpage({
        'navigation': true,
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
        menu: '#trans'
    });

    // 页面中的效果实现右侧焦点
    $("#trans li").each(function () {
        $(this).find('a').click(function () {
            var ind = $(this).attr("dateType");
            document.body.className = "fp-viewing-"+ind;
            $("#fp-nav ul li a").removeClass("active");
            $("#fp-nav ul li a").eq(ind-1).addClass("active");
            $(".nav_box_menu").css('height',0);
            $(".nav_box_menu").removeClass('in');
            $(".nav_box_menu_btn").addClass('collapsed');
        })
    })
    $(".test .sp").mouseenter(function () {
        var index = $(this).index();
        $(".bg .sp").addClass("none");
        $(".bg span").eq(index).removeClass("none");

    })
    $(".test .sp").mouseleave(function () {
        $(".bg span").addClass("none");
    })
    // 判断系统版本下载客户端的函数方法
    function downloadFn() {
        var result = systemCheck();
        if (result) {
            if (result.win == "win7") {
                if (result.bit == 64) {
                    location.href = "http://yibai-1252497236.costj.myqcloud.com/pc/v1.0/yibai_v1.0_win7_64.exe";
                } else {
                    location.href = "http://yibai-1252497236.costj.myqcloud.com/pc/v1.0/yibai_v1.0_win7_32.exe";
                }
            } else if(result.win == "mac") {
                alert("客户端暂时不支持苹果版本");
            } else if(result.win == "win10") {
                if (result.bit == 64) {
                    location.href = "http://yibai-1252497236.costj.myqcloud.com/pc/v1.0/yibai_v1.0_win10_64.exe";
                } else {
                    location.href = "http://yibai-1252497236.costj.myqcloud.com/pc/v1.0/yibai_v1.0_win10_32.exe";
                }
            }
        }
    }
    // 点击下载pc客户端
    $(".down").click(function(){
        // console.log(123213123)
        downloadFn('pc');
    })
    // 电脑系统检测
    function systemCheck() {
        var sUserAgent = navigator.userAgent;
        var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows") || (navigator.platform == "MacIntel");
        if (isWin) {
            var obj = {};
            obj.bit = sUserAgent.indexOf("Win64") > -1 || sUserAgent.indexOf("WOW64")>=0 ? 64 : 32;
            var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
            if (isWin7) obj.win = "win7";
            var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
            if (isWin10) obj.win = "win10";
            var isMac = sUserAgent.indexOf("Mac OS") > -1 || sUserAgent.indexOf("Mac") > -1;
            if (isMac) obj.win = "mac";
            return obj;
        }
        return false;
    }

});
