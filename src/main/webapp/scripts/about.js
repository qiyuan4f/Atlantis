$(document).ready(function () {
    //右侧菜单切换和页面加载
    $(".list li").click(sub_menu_swich);

    /*
     *  about页面右侧菜单切换
     */
    function sub_menu_swich() {
        var link = $(this).attr("href");

        $(".list-visited").removeClass("list-visited");
        $(this).addClass("list-visited");
        $("#content").load(link);
    }

    /**
     * Culture页面图片幻灯片播放
     */
    var slider = new Slider($(".slide-thumb li"), $(".slide-content li"), 0);
    var t = 0;
    t = setInterval(showAuto, 2000);

    $(".slide").hover(function() {
        clearInterval(t);
    }, function () {
        t = setInterval(showAuto, 2000);
    });

    //幻灯片随机播放
      function showAuto() {
        slider.switch_random();
    }
});