/*******************************************
            SERVICES
*******************************************/
$(function () {

  // animate on scroll
  new WOW().init();
});

/*******************************************
            WORK
*******************************************/
$(function () {
  $("#work").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image', // other options
    gallery: {
      enabled: true
    }
  });
});

/*******************************************
            TEAM
*******************************************/
$(function () {
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});

/*******************************************
            TESTIMONIALS
*******************************************/
$(function () {
  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});


/*******************************************
            STATS
*******************************************/
$(function () {
  $('.counter').counterUp({
    delay: 10,
      time: 2000
  });
});

/*******************************************
            CLIENTS
*******************************************/
$(function () {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});

/*******************************************
            NAVIGATION
*******************************************/
// Show/hide transparent black navigation
$(function () {

  $(window).scroll(function () {

    if ($(this).scrollTop() < 50) {
      // hide nav
      $("nav").removeClass("vesco-top-nav navbar-inverse");
      $("#back-to-top").fadeOut();
    } else {
      // show nav
      $("nav").addClass("vesco-top-nav navbar-inverse");
      $("#back-to-top").fadeIn();
    }
  });
});

// Smooth Scrolling
$(function () {
  $('a.smooth-scroll').click(function (event) {
    event.preventDefault();
    // get/return id like #about, #work, #team..
    var section = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section).offset().top - 64
    }, 1250, "easeInOutExpo");
  })
});

// Close Mobile Menu on click
$(function(){
  $('.navbar-collapse ul li a').on('click touch', function(){
    $('.navbar-toggle').click();
  });
});