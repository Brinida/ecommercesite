jQuery("#carouselwinter").owlCarousel({
    autoplay: true,
    loop: true, /* use rewind if you don't want loop */
    margin: 20,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,
    autoplayHoverPause:true,

    autoplayTimeout: 5000,
    smartSpeed: 10000,
    nav: true,
    responsive: {
      0: {
        items: 2
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 4
      }
    }
  });


