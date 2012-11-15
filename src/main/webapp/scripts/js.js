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
    t = setInterval(showAuto, 1000);

    $(".slide").hover(function() {
        clearInterval(t);
    }, function () {
        t = setInterval(showAuto, 1000);
    });

    function showAuto() {
        slider.switch_random();
    }

    /* var cur = -1;
     var t = 0;
     var count = $(".slide-thumb li").length;*/
    /*
     var obj = {thumb:$(".slide-thumb"), content: $(".slide-content")};
     $(".slide-thumb li").click(function(e) {
     cur = $(e.currentTarget).index();
     n =  cur;
     switch_slider(obj, cur, 0);
     });

     $(".slide-thumb li").hover(function(e) {
     switch_slider(obj, $(e.currentTarget).index(), 1);
     },function(e) {
     if (cur != $(e.currentTarget).index()) {
     switch_slider(obj, $(e.currentTarget).index(), 2);
     }
     });
     */

    //幻灯片点击切换
    /*    t = setInterval(showAuto, 6000);
     $(".slide").hover(function(){clearInterval(t);},function(){t = setInterval(showAuto, 6000);});

     //图片自动轮播
     function showAuto(){
     n = n >=(count - 1) ? 0 : ++n;
     $(".slide-thumb li").eq(n).trigger("click");
     }*/

    //幻灯片点击切换
    /*    function switch_slider(slider, index, type){
     var SELECTTED_CLASS = "transparent";

     switch(type){
     case 0:
     slider.thumb.children().addClass(SELECTTED_CLASS);
     slider.thumb.children().eq(index).removeClass(SELECTTED_CLASS);

     slider.content.children(":visible").fadeOut(500);
     slider.content.children().eq(index).fadeIn(1000);
     break;
     case 1:
     slider.thumb.children().eq(index).removeClass(SELECTTED_CLASS);
     break;
     case 2:
     slider.thumb.children().eq(index).addClass(SELECTTED_CLASS);
     break;
     default:
     break;
     }
     }*/

});