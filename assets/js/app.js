$(function(){
    //slick slider
    $('.slider_slick').slick({
        prevArrow:'<i class="fas fa-chevron-left slider_arrow slider_left"></i>',
        nextArrow:'<i class="fas fa-chevron-right slider_arrow slider_right"></i>',
        speed: 500,
        fade: true,
        cssEase: 'linear'
    })
    $('.gallery_slick').slick({
        arrows:false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow:3,
    })
    $('.testmonial_slick').slick({
        arrows:false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow:3, 
        dots: true,
    })
    //toggle button
    $('.toggle_btn').on('click',function(){
        $('#my_nav').toggleClass('active')
    })
    $('.dropdown_btn').on('click',function(){
        $('#moblile_menu').toggleClass('active')
    })

    //counter up
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });
})