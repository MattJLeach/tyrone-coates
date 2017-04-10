function toggleNav() {
	var x = document.getElementById('site-nav');
	var b = document.getElementById('nav-button');

	if (x.className === 'site-nav') {
		x.className += ' open';
		b.className = 'fa fa-times fa-2x nav-open';
		document.body.className += ' disable-scroll';
	} else {
		x.className = 'site-nav';
		b.className = 'fa fa-bars fa-2x';
		document.body.className = 'site';
	}
}

// Scroll page to desired anchor
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 60
        }, 1000);
				if (document.getElementById('site-nav').className !== 'site-nav') {
					toggleNav();
				}
        return false;
      }
    }
  });
});