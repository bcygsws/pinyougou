$(function () {
    // 为我的品优购添加二级菜单
    // 使用hover方法 hover(inf,outf) 或者链式编程 mouseenter mouseleave
    // 初始化代码
    $('.head_son dd:eq(1) ul').hide();
    // 本质：渲染时，show hide()方法解释成display:none;这个属性的添加和移除
    $('.head_son dd:eq(1) a').hover(
        function () {
            $(this).parent().children('ul').show();
        },
        function () {
            $(this).parent().children('ul').hide();
        },
    );
});
