
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('.menu a').forEach(menu => {
    menu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.menu .toggle-dropdown').forEach(menu => {
    menu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

function aosInit() {
    AOS.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

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

swiper.on("slideChange", function () {
  document.querySelectorAll(".collapse.show").forEach(el => {
    bootstrap.Collapse.getInstance(el)?.hide();
  });
});


