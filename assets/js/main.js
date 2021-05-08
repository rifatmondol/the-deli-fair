// window.addEventListener("scroll",function(){
//     var header = document.querySelector(".header-section");
//     header.classList.toggle("sticky", window.scrollY > 0);
// })

// Input search option 
$('span.search').on('click',function(){
    $('.search-input').toggleClass('active');
})


// Banner section js 
$('#banner-section .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    animateOut: 'fadeOut',
    mouseDrag: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



// Client section js
$('#customer-review .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    animateOut: 'fadeOut',
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:4
        }
    }
})







// Scroll To Top 
var scrollTop = $(".scrollToTop");
$(window).on('scroll', function () {
    if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
    } 
    else {
        scrollTop.addClass("active");
    }
});
//Click event to scroll to top
$('.scrollToTop').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 300);
    return false;
});