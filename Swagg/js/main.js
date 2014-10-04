/*

Swagg Tester

© Parks Projets

*/




function setCookie(cname, cvalue, min) {
	var d = new Date();
	d.setTime(d.getTime() + (min*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}


function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
	}
	return "";
}






// Variables jQuery

var $level = $("#level"),
	$bar = $("#level-bar"),
	$btn = $("#btn-start");



// Boutton Start

$btn.click(function() {

	var level = getCookie("swagg") || Math.floor((Math.random() * 4) + 1);
	setCookie("swagg", level, 20);


	$("body").css("overflow", "hidden");


	TweenMax.to($btn, .8, { y: 30, opacity: 0 });


	var scale = 2,
		x = $level.width() / 2 * scale,
		time = 2;


	TweenMax.to(document.body, 1, { delay: .2, x: x, scale: scale, onComplete: function() {

		var tl = new TimelineMax({ delay: .2, onComplete: function() {

			TweenMax.to(document.body, .4, { delay: 1, scale: 1, x: 0, onComplete: function() {
				$btn.hide();

				showMsg(level);
			} });

		} });

		tl.to($bar, level * time / 4, { width: level*25 + "%" });
		tl.to(document.body, level * time / 4, { x: x - ($level.width() * level / 4) * scale }, 0);

	} });

});





function showMsg(index) {

	$("#messages").show();

	var $elem = $("#msg" + index).show();
	console.log($elem);
	TweenMax.from($elem, .2, { scale: 10 });

}






$(".swaggy,.swaggy-color,.swaggy-transform").each(function() {

	var $this = $(this),
		text = $this.text().split("");

	$this.text("");


	for (var i = 0, l = text.length; i < l; i++) {

		var $span = $('<span>' + (text[i] == " " ? "&nbsp;" : text[i]) + '</span>');

		var t = -(l-i) * 100,
			val = t + "ms, " + t + "ms";

		$span.css("animation-delay", val)
			 .css("-webkit-animation-delay", val);

		$this.append($span);
	}
});