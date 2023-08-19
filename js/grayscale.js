(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        if (this.hash == '#location' || this.hash == '#learnmore') {
            var topoffset = 150;
        } else {
            var topoffset = 70;
        }
        $('html, body').animate({
          scrollTop: (target.offset().top - topoffset)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });



  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  if ( $('.photorow').length ) {
      var lightbox = new SimpleLightbox('.photorow a', {'showCounter': false});
  }

  if (document.cookie && document.cookie.indexOf('firsttimeloading') == -1) {
    var a = new Date();
    a = new Date(a.getTime() + 1000*60*60*24);
    document.cookie = 'firsttimeloading=true; expires='+a.toGMTString()+';';

    $('#discountPopup').modal('show');
  }

})(jQuery); // End of use strict


// Super quick slideshow
var slideIndex = [1, 1, 1, 1, 1, 1];
var slideId = ["slides-0", "slides-1", "slides-2", "slides-3", "slides-4", "slides-5"];
slideShow(1, 0);
slideShow(1, 1);
slideShow(1, 2);
slideShow(1, 3);
slideShow(1, 4);
slideShow(1, 5);


// no: index of slideshow on page (e.g. if there are 3 slideshows, the first `no` is 0, 2nd is 1, etc)
function slidesMoveIndex(n, no) {
  slideShow(slideIndex[no] += n, no);
}

// n: 1 to move forward 1 slide, -1 to move backward a slide
// no: index of slideshow on page (e.g. if there are 3 slideshows, the first `no` is 0, 2nd is 1, etc)
function slideShow(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  if (x[slideIndex[no]-1]) {
      x[slideIndex[no]-1].style.display = "block";
  }
}

function enableSubmitBtn() {
    $('#submitForm').removeAttr('disabled');
}

window.onload = function() {
    var $recaptcha = document.querySelector('#g-recaptcha-response');

    if($recaptcha) {
        $recaptcha.setAttribute("required", "required");
    }
};
