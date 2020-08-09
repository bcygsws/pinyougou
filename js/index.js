$(function () {
    // 为我的品优购添加二级菜单
    // 使用hover方法 hover(inf,outf) 或者链式编程 mouseenter mouseleave

    // 定义数组arr,存放通栏中需要加入二级菜单的a标签
    var arr = [2, 8, 10, 12];
    // 本质：渲染时，show hide()方法解释成display:none;这个属性的添加和移除,然后使用$.each(数组名，function(i,ele){})，注意这个是i索引在前，数组元素ele在后
    $.each(arr, function (i, ele) {
        // 初始化代码
        $('.head_son dd:eq(' + ele + ') ul').hide();
        // 对于有二级菜单的那几个dd，在此设置样式
        $('.head_son dd:eq(' + ele + ')').hover(
            function () {
                $(this).children('ul').show();
                // 点击有二级菜单的dd,a标签的一些属性状态交给其父元素dd来管理，比如：a的颜色，以及上下箭头的切换，因此在涉及二级菜单时我们要使用父级菜单的hover事件，而不是任意一个子元素，例如原有的a,和添加删除切换的ul,都不用这俩子元素的hover事件
                $(this).children('a').css({ color: '#c91706' });
                $(this).children('a').addClass('icon-arrowDown').removeClass('icon-arrowUp');
            },
            function () {
                $(this).children('ul').hide();
                $(this).children('a').css({ color: '#666666' });
                $(this).children('a').addClass('icon-arrowUp').removeClass('icon-arrowDown');
            },
        );
    });
    // 商品分类中的二级菜单
    var arr1 = $('.shopping_nav .shopping_cate dl').children('dd');
    $('.shopping_nav .shopping_cate dl').find('ul').hide();
    // 虽然arr1是jQuery对象数组，each方法中遍历值仍然还是原生DOM对象
    $.each(arr1, function (i, ele) {
        $(ele).hover(
            function () {
                console.log(i);
                $(this).css({ backgroundColor: '#ffffff' });
                $(this).children('a').css({ color: '#c91706' });
                $(this).children('ul').show();
                $(this)
                    .children('ul')
                    .css({ top: -31 * i + 'px' });
            },
            function () {
                $(this).css({ backgroundColor: '#c91706' });
                $(this).children('a').css({ color: '#ffffff' });
                $(this).children('ul').hide();
            },
        );
    });
});
