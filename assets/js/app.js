$(function(){
    $(window).on('scroll',function(){
        if($(window).scrollTop() > 0){
            $('#my_nav').addClass('stickynav')
        }else{
            $('#my_nav').removeClass('stickynav')
        }
    })

    $(window).on('scroll',function(){
        if($(window).scrollTop() > 400){
            $('#backtotop').fadeIn('slow')
        }else{
            $('#backtotop').fadeOut('slow')
        }
    })

    $('#backtotop').on('click',function(){
        $('html,body').scrollTop(0)
    })
    //slick slider
    $('.slider_slick').slick({
        prevArrow:'<i class="fas fa-chevron-left slider_arrow slider_left"></i>',
        nextArrow:'<i class="fas fa-chevron-right slider_arrow slider_right"></i>',
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive:[
            {
                breakpoint: 768,
                settings: {
                  arrows:false,
                }
              },
        ]
    })
    $('.gallery_slick').slick({
        arrows:false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow:3,
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:2,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
        ]
    })
    $('.testmonial_slick').slick({
        arrows:false,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow:3, 
        dots: true,
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:1,
                }
              },]
        
    })
    $('.blog_slick').slick({
        slidesToShow:2,
        prevArrow:'<i class="fas fa-chevron-left blog_arrow blog_left"></i>',
        nextArrow:'<i class="fas fa-chevron-right blog_arrow blog_right"></i>',
        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:1,
                }
              },]
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