

$('.btn_nav').click(function() {
  // animate content
  $('.page__style').addClass('animate_content');
  $('.page__description').fadeOut(100).delay(2800).fadeIn();

  setTimeout(function() {
    $('.page__style').removeClass('animate_content');
  }, 3200);

  //remove fadeIn class after 1500ms
  setTimeout(function() {
    $('.page__style').removeClass('fadeIn');
  }, 1500);

});

// on click show page after 1500ms
$('.paso1').click(function() {
  setTimeout(function() {
    $('.home').addClass('fadeIn');
  }, 1500);
});

$('.paso2').click(function() {
  setTimeout(function() {
    $('.projects').addClass('fadeIn');
  }, 1500);
});

$('.paso3').click(function() {
  setTimeout(function() {
    $('.skills').addClass('fadeIn');
  }, 1500);
});

$('.paso4').click(function() {
  setTimeout(function() {
    $('.about').addClass('fadeIn');
  }, 1500);
});

$('.paso5').click(function() {
  setTimeout(function() {
    $('.contact').addClass('fadeIn');
  }, 1500);
});

$('.paso6').click(function() {
  setTimeout(function() {
    $('.projects2').addClass('fadeIn');
  }, 1500);
});

$('.final').click(function() {
  setTimeout(function() {
    $('.skills2').addClass('fadeIn');
  }, 1500);
});





function makeResizable(element){
	if (element && jQuery(element).length){
		var $el = jQuery(element);
		var elHeight = $el.outerHeight();
		var elWidth = $el.outerWidth();

		var $wrapper = $el.parent();

		var starterData = {
			size: {
				width: $wrapper.width(),
				height: $wrapper.height()
			}
		}
		var scale = Math.min(
			starterData.size.width / $el.outerWidth(),
			starterData.size.height / $el.outerHeight()
		);
		if (scale > 1){
			scale = 1;
		}
		var elMarginBottom = (scale * elHeight) - starterData.size.height;
		$el.css({
			transform: "translate3d(-50%, 0, 0) " + "scale(" + scale + ")",
			'margin-bottom': elMarginBottom
		});
	}
}
jQuery(document).ready(function() {
	makeResizable('#very-specific-design');
});
jQuery(window).load(function() {
//	makeResizable('#very-specific-design');
});
jQuery(window).resize(function() {
	makeResizable('#very-specific-design');
});


