$(function (){

    //best-menu swiper
    var swiper = new Swiper(".item_wrap", {
      slidesPerView: 5,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      breakpoints: {
        380: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        640: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      },
    });

});//script end