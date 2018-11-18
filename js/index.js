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
            //������������λ��
            var translateX = -index * width;
            //���ù���
            addTransition();
            //����λ��
            setTranslateX(translateX);
        }, 1000);
    }
    setTimer();

    imageBox.addEventListener('transitionend', function () {
        if (index >= 9) {
            /*�޷����*/
            index = 1;
            //������������λ�� ˲���ƶ�
            var translateX = -index * width;
            //ȥ������
            removeTransition();
            //����λ��
            setTranslateX(translateX);
        } else if (index <= 0) {
            /*�޷컬��*/
            index = 8;
            //������������λ�� ˲���ƶ�
            var translateX = -index * width;
            //ȥ������
            removeTransition();
            //����λ��
            setTranslateX(translateX);
        }

        /*�����������л�������  1-8 */
        setPoint();
    });

    //�л���
    var setPoint = function () {
        //���ݵ�ǰ������ȥ�л�������
        //index ֵ 1-8
        //ȥ��֮ǰѡ�е�
        pointBox.querySelector('li.now').classList.remove('now');
        //����ǰ��Ӧ��ѡ��
        pointBox.querySelector('li:nth-child(' + index + ')').classList.add('now');
    }
})