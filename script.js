



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


var track = document.getElementById('track');

var controlBtn = document.getElementById('play-pause');
var controlBtnicon = document.getElementById('iconrep');

function playPause() {
    if (track.paused) {
        track.play();
        //controlBtn.textContent = "Pause";
        controlBtnicon.className = "fa-regular fa-circle-pause";
    } else { 
        track.pause();
         //controlBtn.textContent = "Play";
         controlBtnicon.className = "fa-regular fa-circle-play";
    }
}

controlBtn.addEventListener("click", playPause);
track.addEventListener("ended", function() {
  controlBtn.className = "play";
});

function  Show1(){
  var mostrar = document.getElementById('play-pause2');
  var esconder = document.getElementById('play-pause');
  var esconder2 = document.getElementById('iconrep');

  mostrar.className = "modOperativo";
  esconder.className = "hide";
  esconder2.className = "hide";
}