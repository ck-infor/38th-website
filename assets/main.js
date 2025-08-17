var elem = document.querySelector('.isotope-container');
var iso = new Isotope(elem, {
  itemSelector: '.portfolio-item',
  layoutMode: 'masonry',
  percentPosition: true,
  masonry: {
    columnWidth: '.portfolio-item'
  },
});

// elem.querySelectorAll('.portfolio-item').forEach(function(item){
//   const info = item.querySelector('.portfolio-info');

//   item.addEventListener('mouseenter', function(){
//     // var h = info.scrollHeight;
//     // item.style.setProperty('--info-open', h + 'px');
//     iso.layout();
//   });
//   item.addEventListener('mouseleave', function(){
//     iso.layout();
//   });

//   info.addEventListener('transitionend', function(e){
//     if (e.propertyName === 'max-height' || e.propertyName === 'opacity') {
//       iso.layout();
//     }
//   });
// });

