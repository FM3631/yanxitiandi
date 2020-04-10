// 轮播 swiper
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 按钮
$(function () {
    $("#btnMeau").click(function () {
        if ($("#meau").css("display") == "none") {
            $("#meau").css("display", "block")
            $("#meanUl>li").slideDown(1000);
            
        } else {
            $("#meau").css("display", "none")
            $("#meanUl>li").slideUp(1000);
        }
    })
})