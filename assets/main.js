
// isotope
var elem = document.querySelector('.isotope-container');
imagesLoaded(elem, function(){
  var iso = new Isotope(elem, {
    itemSelector: '.portfolio-item',
    layoutMode: 'masonry',
    percentPosition: true,
    masonry: {
      columnWidth: '.portfolio-item'
    },
  });
});

// 課程介紹那的swiper
var swiper = new Swiper(".mySwiper", {
  // effect: 'coverflow',
  // slidesPerView: 1.5,
  // loop: true,
  // centeredSlides: true,
  effect: 'cards',
  // slidesPerView: 1,
  coverflowEffect: {
      // depth: 200,
      // rotate: 0,
      // stretch: 0,
      rotate: 20,
      slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


