// Javascript
// 

$(document).ready(function() {
  AOS.init( {
    //pour l'animation on scroll
    //quand c: true  
  }); // scroll library AOS
});

// Smooth scroll pour links
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      //just quand l'animation veut se déclancher
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback apres animation
        //  focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { 
          return false;
        } else {
          $target.attr('tabindex','-1'); 
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
