$('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    autoplay: true,
    dots: false,
    responsiveClass: true,
    responsive:{
        0:{
            items: 2,
        },
        767:{
            items: 3,
        },
        1200:{
            items: 4,
        }
    }
});