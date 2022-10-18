

$(function () {



    var windowh = $(window).height();
    var windowW = $(window).width();



try {
    $('ul.list').niceScroll({
        emulatetouch:true
      });

    var swiper = new Swiper(".main-slider", {
        autoplay: {
            delay: 4000,
        },
        speed: 500,
        loop:true,
        spaceBetween: 80,
        centeredSlides: true,
        slidesPerView: "auto",
        effect: "coverflow",
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        }
    });
} catch(e) {}


    var keypadtarget = $("input:focus").attr("id");

    
    $("input.forkeypad").on("click", function(){
        keypadtarget = $(this).attr("id");

    });


    $("article.keypad button").on("click", function(){
        $("input#" + keypadtarget).focus();

        if ($(this).hasClass("back")) {

            $("input#" + keypadtarget).val($("input#" + keypadtarget).val().slice(0,-1));

        } else if ($(this).hasClass("del")) {

            $("input#" + keypadtarget).val("");

        } else {
            $("input#" + keypadtarget).val($("input#" + keypadtarget).val() + $(this).text());
        }
    });



    $.fn.datepicker.language['ko'] = {
        days: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        daysShort: ['일', '월', '화', '수', '목', '금', '토'],
        daysMin: ['일', '월', '화', '수', '목', '금', '토'],
        months: ['1월','2월','3월','4월','5월','6월', '7월','8월','9월','10월','11월','12월'],
        monthsShort: ['1월','2월','3월','4월','5월','6월', '7월','8월','9월','10월','11월','12월'],
        today: '오늘',
        clear: '초기화',
        dateFormat: 'yyyy-mm-dd',
        timeFormat: 'hh:ii aa',
        firstDay: 0
    };



// Initialization
$('.start-date').datepicker({
    language: "ko"
});
// Access instance of plugin
$('.start-date').data('datepicker');

// Initialization
$('.end-date').datepicker({
    language: "ko"
});
// Access instance of plugin
$('.end-date').data('datepicker');


});
