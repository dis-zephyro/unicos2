
$(document).ready(function() {

    $(window).bind('load', function() {
        $("#preloader").fadeOut();
        $("#preloader").delay(2000).fadeOut("slow");
    });

    // Анимация
    var Android = navigator.userAgent.search(/Android/i);
    var iPhone = navigator.userAgent.search(/iPhone/i);
    var iPad = navigator.userAgent.search(/iPad/i);
    if(Android != -1 || iPhone != -1 || iPad != -1) {

        $('head').append('<link rel="stylesheet" type="text/css" href="css/mobile.css" />'); //подключение файла mobile.css если мобильник

    } else {

        $('head').append('<link rel="stylesheet" type="text/css" href="js/vendor/jquery.fullPage/jquery.fullPage.css" />'); //подключение файла jquery.fullPage.css если не мобильник

        $('#page').fullpage({
            css3: true,
            verticalCentered: false,
            navigation: true,
            slidesNavigation: false,
            navigationPosition: 'right',
            showActiveTooltip: true,
            responsive: 980,
            anchors: ['block-01', 'block-02', 'block-03', 'block-04', 'block-05', 'block-06', 'block-07', 'block-08', 'block-09'],
            navigationTooltips: ['Главная', 'О компании', 'Схема работы', 'Разработка ТУ', 'Оценка рисков', 'Разрешения', 'Согласование', 'Декларация', 'Контакты']
        });

    }


    $(".popup, .certificate-img").fancybox({
        padding     : '0'
    });

});


$('.object').slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 1000
});

