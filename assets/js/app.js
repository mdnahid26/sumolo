$(function(){
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