
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


