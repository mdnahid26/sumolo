$(function(){
    //slick slider
    $('.slider_slick').slick({
        prevArrow:'<i class="fas fa-chevron-left slider_arrow slider_left"></i>',
        nextArrow:'<i class="fas fa-chevron-right slider_arrow slider_right"></i>',
        speed: 500,
        fade: true,
        cssEase: 'linear'
    })
    //toggle button
    $('.toggle_btn').on('click',function(){
        $('#my_nav').toggleClass('active')
    })
    $('.dropdown_btn').on('click',function(){
        $('#moblile_menu').toggleClass('active')
    })
})