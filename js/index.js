document.addEventListener('DOMContentLoaded', function () {
    var banner = document.querySelector('.lmm_banner');
    var width  = banner.offsetWidth;
    var imageBox = banner.querySelector('ul:first-child');
    var pointBox = banner.querySelector('ul:last-child');

    var index = 1;
    var timer = null;

    var addTransition = function () {
        imageBox.style.transition = 'all 0.3s';
        imageBox.style.webkitTransition = 'all 0.3s';
    }
    var removeTransition = function () {
        imageBox.style.transition = 'none';
        imageBox.style.webkitTransition = 'none';
    }
    var setTranslateX = function (translateX) {
        imageBox.style.transform = 'translateX(' + translateX + 'px)';
        imageBox.style.webkitTransform = 'translateX(' + translateX + 'px)';
    }
    var setTimer = function () {
        timer = setInterval(function () {
            index++;
            //根据索引计算位移
            var translateX = -index * width;
            //设置过渡
            addTransition();
            //设置位移
            setTranslateX(translateX);
        }, 1000);
    }
    setTimer();

    imageBox.addEventListener('transitionend', function () {
        if (index >= 9) {
            /*无缝滚动*/
            index = 1;
            //根据索引计算位置 瞬间移动
            var translateX = -index * width;
            //去除过渡
            removeTransition();
            //设置位移
            setTranslateX(translateX);
        } else if (index <= 0) {
            /*无缝滑动*/
            index = 8;
            //根据索引计算位置 瞬间移动
            var translateX = -index * width;
            //去除过渡
            removeTransition();
            //设置位移
            setTranslateX(translateX);
        }

        /*动画结束：切换点容器  1-8 */
        setPoint();
    });

    //切换点
    var setPoint = function () {
        //根据当前的索引去切换点容器
        //index 值 1-8
        //去除之前选中的
        pointBox.querySelector('li.now').classList.remove('now');
        //给当前对应的选中
        pointBox.querySelector('li:nth-child(' + index + ')').classList.add('now');
    }
})