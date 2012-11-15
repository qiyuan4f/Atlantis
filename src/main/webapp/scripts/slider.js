/**
 * Slider类：实现了图片幻灯片切换
 * @param thumb：小图的选择块
 * @param content ：大图的选择块
 * @param index ： 索引值
 */
function Slider(thumb, content, index) {
    this.thumb = thumb;
    this.content = content;
    this.index = index;
    this.counts = thumb.length;

    //this指向当前代码对象的所有者
    var thumb_click = this.click_handler.bind(this, this.click_handler);
    var thumb_select = this.mouseenter_handler.bind(this, this.mouseenter_handler);
    var thumb_cancel = this.mouseleave_handler.bind(this, this.mouseleave_handler);

    this.thumb.click(thumb_click);
    this.thumb.mouseenter(thumb_select);
    this.thumb.mouseleave(thumb_cancel);
}

Slider.prototype = {
    SELECTED_CLASS:"transparent",
    click_handler:function (obj, e) {
        var index = $(e.currentTarget).index();

        this.switch_to(index);
    },
    mouseenter_handler:function (obj, e) {
        var index = $(e.currentTarget).index();

        this.select(index);
    },
    mouseleave_handler:function (obj, e) {
        var index = $(e.currentTarget).index();

        if (index != this.index) {
            this.cancel(index);
        }
    },
    /**
     * 移除蒙版效果
     */
    select:function (index) {
        this.thumb.eq(index).removeClass(this.SELECTED_CLASS);
    },
    /**
     * 增加蒙版效果
     */
    cancel:function (index) {
        this.thumb.eq(index).addClass(this.SELECTED_CLASS);
    },
    /**
     * 图片点击切换
     */
    switch_to:function (index) {
        if (this.index === index) {
            return;
        }

        // 小图的隐藏和显示
        this.cancel(this.index);
        this.select(index);

        //大图的隐藏和显示
        this.content.filter(":visible").fadeOut(500);
        this.content.eq(index).fadeIn(1000);
        this.index = index;
    },
    /**
     *切换到后一个图片显示
     */
    switch_next:function () {
        this.switch_to((this.index + 1) % this.counts);
    },
    /**
     * 切换到前一个图片显示
     */
    switch_pre:function () {
        this.switch_to((this.index > 0) ? (this.index - 1) : (this.counts - 1));
    },
    /**
     * 随机切换图片显示
     */
    switch_random:function () {
        var random = Math.ceil(Math.random() * (this.counts - 1));
        this.switch_to(random);
    }
};
