$('.owl-carousel').owlCarousel({
    items:1,
    merge:true,
    loop:true,
    margin:10,
    video:true,
    lazyLoad:true,
    center:true,
    responsive:{
        480:{
            items:2
        },
        600:{
            items:4
        }
    }
})