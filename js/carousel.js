$(document).ready(function(){
  var prev_btn = $(this).find('.quotes__prev');
  var next_bth = $(this).find('.quotes__next');

  var width = $(this).width();

  if(width < 768) {
    prev_btn.hide();
    next_bth.hide();
  }

  if (width >= 768) {
    prev_btn.show();
    next_bth.show();
  }

  var owl = $(this).find('.owl-carousel').owlCarousel({
    loop:true,
    autoHeight: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      }
    }
  });

  prev_btn.on('click', function () {
    owl.trigger('prev.owl.carousel');
  });

  next_bth.on('click', function () {
    owl.trigger('next.owl.carousel');
  });
});
