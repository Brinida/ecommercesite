jQuery("#carouselsofa").owlCarousel({
    autoplay: true,
    loop: true, /* use rewind if you don't want loop */
    margin: 10,
     /*
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    */
    responsiveClass: true,
    autoHeight: true,

    autoplayTimeout: 40000000,
    smartSpeed: 500,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 5
      }
    }
  });