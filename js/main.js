"use strict";
var Roles = ["Javasript/Typescript", "C#/Java/Python/PHP", "Angular/React", "ASP.NET/Spring/Laravel", "MongoDB/MySQL", "UX/UI Design"];
var Window = $(window);
var Slide1 = $('#slide-brand');
var limit = 300;
var Wrapload = $('.preloader');
var Headder = $('#header-wrap');
var offset = Headder.offset().top;
var goup = $('.scroll-top');
var partner = $('#craxpartner-slide');
var slideoutMenu = $('.wrap-mobilemenu');
var slideoutMenuWidth = $('.wrap-mobilemenu').width();
//Filtering items on portfolio
var portfolioFilter = $('.filter-list li');
// filter items on button click
$(portfolioFilter).on('click', function () {
  var filterValue = $(this).attr('data-filter');
  $('.porto-content').isotope({
    filter: filterValue
  });
});
//Add/remove class on filter list
$(portfolioFilter).on('click', function () {
  $(this).addClass('aktip').siblings().removeClass('aktip');
});
// documennt ready
$(document).ready(function () {
  $('.skill-bar').each(function (i) {
    var width = $(this).attr('data-valuenow');
    $(this).width(width + '%');
    $(this).html('<span>' + width + '%</span>');
  });
  //animated typed init ------------------------
  new Typed('#typed-text', {
    strings: Roles,
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 4000,
    startDelay: 1000,
    loop: true,
    showCursor: true
  });
  /* isotope */
  setTimeout(() => {
    $('.porto-content').isotope({
      resizable: false,
      itemSelector: '.porto-item',
      layoutMode: 'masonry',
      filter: '*'
    });
  }, 3000)
  /*parallax hero */
  $('.jarallax').jarallax({
    speed: 0.5,
    disableParallax: function () {
      return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
    },
    disableVideo: function () {
      return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
    }
  });
  // magnific image init ----------------------
  $('.image-popup').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });
  // mobile navigation init ----------------------
  $('.menu-mobile > .navigation-list li a').on("click", function (e) {
    var anchor = $(this);
    slideoutMenu.animate({
      right: -slideoutMenuWidth
    }, 500);    
    $('.overlay-fade').fadeOut(); 
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 50
    }, 1500);
    e.preventDefault();
  });
  // mobile navigation burger toggle switch init ----------------------
  $('#openmenu').on('click', function (e) {
    slideoutMenu.show(50);
    slideoutMenu.animate({
      right: "0px"
    }, 500);
    $('.overlay-fade').show();
  });
  // navbar mobile overlay close init ----------------------
  $(document).on('click', '#closesmenu', function () {
    slideoutMenu.animate({
      right: -slideoutMenuWidth
    }, 500);
    $('.overlay-fade').fadeOut();
    slideoutMenu.hide();
  });
  // scrollspy init ----------------------
  $("body").scrollspy({
    target: "",
    offset: 1
  })
  if ($('.image-popup').length > 0) {
    $('.image-popup').magnificPopup({
      type: 'image',
      fixedContentPos: true,
      gallery: {
        enabled: true
      },
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
  }

});
/*scroll window */
Window.on('scroll', function () {
  if (Window.scrollTop() > 300) {
    goup.addClass('show')
    Headder.addClass('fixed');
  } else {
    goup.removeClass('show')
    Headder.removeClass('fixed');
  }
});
// window on load
Window.on('load', function () {
  Wrapload.fadeOut(600);
});