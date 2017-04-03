$(function() {

    /* ======= jquery.scrollTo插件-平滑滚动 ======= */
    $(".scrollto").on("click", function(e) {
        $(this).parent().addClass("active").siblings().removeClass("active");
        var target = this.hash;
        e.preventDefault();
        //竖直滚动，滚动y轴
        $("body").scrollTo(target, 700, { offset: -60, "axis": "y" });
    });

    /* ======= 固定导航栏 ========= */
    $(window).on("scroll resize load", function() {
        $("#nav-wrapper").removeClass("fixed");
        //获取滚动的距离
        var scrollDistance = $(this).scrollTop();
        //获取到顶部的距离
        var topDistance = $("#nav-wrapper").offset().top;
        if ((topDistance) > scrollDistance) {
            $("#nav-wrapper").removeClass("fixed");
            $(".sm-device").css("background", "#357a38");
            $(".navbar-toggle").css("background", "#4CAF50");
        } else {
            $("#nav-wrapper").addClass("fixed");
            $(".sm-device").css("background", "#4CAF50");
            $(".navbar-toggle").css("background", "#357a38");
        }
        var scrollLocation = scrollDistance + 60;
        var skills = $("#skills-section").offset().top;
        var projects = $("#projects-section").offset().top;
        var education = $("#education-section").offset().top;
        var halfOfEducation = parseInt($("#education-section").css("height")) / 2;
        var hobby = $("#hobby-section").offset().top;
        if (scrollLocation >= skills && scrollLocation < projects) {
            $(".skills").addClass("active").siblings().removeClass("active");
        } else if (scrollLocation >= projects && scrollLocation < education) {
            $(".projects").addClass("active").siblings().removeClass("active");
        } else if (scrollLocation >= education && scrollLocation < education + halfOfEducation) {
            $(".education").addClass("active").siblings().removeClass("active");
        } else if (scrollLocation >= education + halfOfEducation && scrollLocation < hobby) {
            $(".hobby").addClass("active").siblings().removeClass("active");
        }
    });

    /* ======= 收缩导航栏 ========= */
    $("#navbar-toggle-btn").click(function() {
        $(".sm-device").slideToggle("slow");
    });
    $(".scrollto").click(function() {
        $(".sm-device").slideUp();
    });
    /* ======= 画图表 ========= */
    $(".chart").easyPieChart({
        trackColor: "#e8e8e8", //初始颜色
        barColor: "#4CAF50", //填充的颜色
        scaleColor: false, //比例尺显示
        lineWidth: 5, //填充的宽度
        animate: 2000, //时间
        onStep: function(from, to, percent) {
            $(this.el).find("span").text(Math.round(percent));
        }
    });
});