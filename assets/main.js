
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
const body = document.querySelector('body');
const mobileNav = document.querySelector('.menu ul');

  function mobileNavToggle() {
    body.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // 防止點擊按鈕時被「外部點擊」判定
      mobileNavToggle();
    });
  }

  // 點擊選單以外區域時關閉
  document.addEventListener('click', (e) => {
    if (
      body.classList.contains('mobile-nav-active') && // 只有在開啟狀態才處理
      !mobileNav.contains(e.target) && // 點擊位置不在選單內
      !mobileNavToggleBtn.contains(e.target) // 點擊位置不在按鈕上
    ) {
      mobileNavToggle();
    }
  });

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


