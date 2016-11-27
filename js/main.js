$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(100).fadeOut('slow');
});

$(function() {

    var $menu = $("#menu");
    // var typeblock = $(".type");

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 150 && $menu.hasClass("default") ){
            $menu.fadeOut('fast',function(){
                // typeblock.addClass("customer-block");
                $(this).removeClass("default")
                    .addClass("header-fixed ")
                    .fadeIn('fast');

            });

        } else if($(this).scrollTop() <= 150 && $menu.hasClass("header-fixed")) {
            $menu.fadeOut('fast',function(){
                // typeblock.removeClass("customer-block");
                $(this).removeClass("header-fixed ")
                    .addClass("default")
                    .fadeIn('fast');

            });
        }
    });//scroll

    $(".adv-circle-element-1, .adv-circle-element-2, .adv-circle-element-3," +
        ".adv-circle-element-4, .adv-circle-element-5, .adv-circle-element-6").fadeTo(0, 0);
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 2000 ){
            $(".adv-circle-element-1").delay(500).fadeTo(1000, 1);
            $(".adv-circle-element-2").delay(1000).fadeTo(1000, 1);
            $(".adv-circle-element-3").delay(1500).fadeTo(1000, 1);
            $(".adv-circle-element-4").delay(2000).fadeTo(1000, 1);
            $(".adv-circle-element-5").delay(2500).fadeTo(1000, 1);
            $(".adv-circle-element-6").delay(3000).fadeTo(1000, 1);


        // } else if($(this).scrollTop() <= 1900 ){
        //     $(".adv-circle-element-1, .adv-circle-element-2, .adv-circle-element-3," +
        //         ".adv-circle-element-4, .adv-circle-element-5, .adv-circle-element-6").fadeTo(1500, 0);
        }
    });//scroll

    var wind = $(window).height();
    $(window).resize(function (){
        $('.main-block').height( wind);
    });
    $('.main-block').height(wind);

    $('[href^="#"]').on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('.scale_small').animate({scrollTop: top}, 1500);
    });


    $(".carusel_1").slick( {
        slidesToShow:1,
        slidesToScroll:1,
        fade:true,
        prevArrow: '<a href="#" class="arrow_cont prev"><img src="imges/left_arrow.png" alt="" class="customer_arrow" /></a>',
        nextArrow: '<a href="#" class="arrow_cont next"><img src="imges/ right_arrow.png" alt=""  class="customer_arrow" /></a>'
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'});
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        prevArrow: '<a href="#" class="arrow_cont prev"><img src="images/left-arrow.png" alt="" class="customer_arrow" /></a>',
        nextArrow: '<a href="#" class="arrow_cont next"><img src="images/right-arrow.png" alt=""  class="customer_arrow" /></a>'
    });

});