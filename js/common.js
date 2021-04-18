$(document).ready(function () {


    //상단고정
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $("#header").addClass("fix");
        } else {
            $("#header").removeClass("fix");
        }
    });




    //스크롤트리거
    $(window).scroll(function () {
        $('.ani_stop').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani_stop');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).addClass('ani_stop');
            }
        });
    });




    // 모바일메뉴    
    $(".m-menu").click(function () {
        $(".mgnb-wrap").animate({
            right: '0'
        });
    });

    $(".close").click(function () {
        $(".mgnb-wrap").animate({
            right: '100%'
        });
    });





});