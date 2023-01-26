



function makeResizable(element) {
	if (element && jQuery(element).length) {
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
		if (scale > 1) {
			scale = 1;
		}
		var elMarginBottom = (scale * elHeight) - starterData.size.height;
		$el.css({
			transform: "translate3d(-50%, 0, 0) " + "scale(" + scale + ")",
			'margin-bottom': elMarginBottom
		});
	}
}
jQuery(document).ready(function () {
	makeResizable('#very-specific-design');
});
jQuery(window).load(function () {
	//	makeResizable('#very-specific-design');
});
jQuery(window).resize(function () {
	makeResizable('#very-specific-design');
});


var track = document.getElementById('track1');
var controlBtn = document.getElementById('contexto1');
var controlBtnicon = document.getElementById('iconrepContext');

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
track.addEventListener("ended", function () {
	controlBtn.className = "play";
});

var track1 = document.getElementById('track2');
var controlBtn1 = document.getElementById('play-pause');
var controlBtnicon1 = document.getElementById('iconrep');

function playPause2() {
	if (track1.paused) {
		track1.play();
		//controlBtn.textContent = "Pause";
		controlBtnicon1.className = "fa-regular fa-circle-pause";
	} else {
		track1.pause();
		//controlBtn.textContent = "Play";
		controlBtnicon1.className = "fa-regular fa-circle-play";
	}
}

controlBtn1.addEventListener("click", playPause2);
track.addEventListener("ended", function () {
	controlBtn.className = "play";
});

var track2 = document.getElementById('track3');
var controlBtn2 = document.getElementById('play-pause2');
var controlBtnicon2 = document.getElementById('iconrep2');

function playPause3() {
	if (track2.paused) {
		track2.play();
		//controlBtn.textContent = "Pause";
		controlBtnicon2.className = "fa-regular fa-circle-pause";
	} else {
		track2.pause();
		//controlBtn.textContent = "Play";
		controlBtnicon2.className = "fa-regular fa-circle-play";
	}
}

controlBtn2.addEventListener("click", playPause3);
track.addEventListener("ended", function () {
	controlBtn.className = "play";
});


var track3 = document.getElementById('track4');
var controlBtn3 = document.getElementById('play-pause3');
var controlBtnicon3 = document.getElementById('iconrep3');

function playPause4() {
	if (track3.paused) {
		track3.play();
		//controlBtn.textContent = "Pause";
		controlBtnicon3.className = "fa-regular fa-circle-pause";
	} else {
		track3.pause();
		//controlBtn.textContent = "Play";
		controlBtnicon3.className = "fa-regular fa-circle-play";
	}
}

controlBtn3.addEventListener("click", playPause4);
track.addEventListener("ended", function () {
	controlBtn.className = "play";
});

var track4 = document.getElementById('track5');
var controlBtn4 = document.getElementById('play-pause4');
var controlBtnicon4 = document.getElementById('iconrep4');

function playPause5() {
	if (track4.paused) {
		track4.play();
		//controlBtn.textContent = "Pause";
		controlBtnicon4.className = "fa-regular fa-circle-pause";
	} else {
		track4.pause();
		//controlBtn.textContent = "Play";
		controlBtnicon4.className = "fa-regular fa-circle-play";
	}
}

controlBtn4.addEventListener("click", playPause5);
track.addEventListener("ended", function () {
	controlBtn.className = "play";
});

function Show1() {
	var mostrar = document.getElementById('play-pause');
	var esconder = document.getElementById('contexto1');
	var esconder2 = document.getElementById('iconrepContext');
	var esconder3 = document.getElementById('text1');

	mostrar.className = "propValorrec";
	esconder.className = "hide";
	esconder2.className = "hide";
	esconder3.className = "hide";
}

function Show2() {
	var mostrar = document.getElementById('play-pause2');
	var esconder = document.getElementById('play-pause');
	var esconder2 = document.getElementById('iconrep');

	mostrar.className = "modOperativo";
	esconder.className = "hide";
	esconder2.className = "hide";
}

function Show3() {
	var mostrar = document.getElementById('play-pause3');
	var esconder = document.getElementById('play-pause2');
	var esconder2 = document.getElementById('iconrep2');

	mostrar.className = "modExp";
	esconder.className = "hide";
	esconder2.className = "hide";
}

function Show4() {
	var mostrar = document.getElementById('play-pause4');
	var esconder = document.getElementById('play-pause3');
	var esconder2 = document.getElementById('iconrep3');

	mostrar.className = "modFinan";
	esconder.className = "hide";
	esconder2.className = "hide";
}

function Show5() {
	var mostrar = document.getElementById('popup');
	var esconder = document.getElementById('play-pause4');
	var esconder2 = document.getElementById('iconrep4');

	var track4 = document.getElementById('track6');
	var controlBtnicon5 = document.getElementById('iconrepfin');

	mostrar.className = "overlay";
	esconder.className = "hide";
	esconder2.className = "hide";

	if (track4.paused) {
		track4.play();
		//controlBtn.textContent = "Pause";
		controlBtnicon5.className = "fa-regular fa-circle-pause";
	} 
}

