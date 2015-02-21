/*


*/


var halfWidth = window.innerWidth / 2,
	halfHeight = window.innerHeight / 2;



(function() {

	function mousemove(e) {

		Mouse.x = e.clientX;
		Mouse.y = e.clientY;
	}



	$(window).resize(function() {

		halfWidth = window.innerWidth / 2;
		halfHeight = window.innerHeight / 2;
	});



	$(window).bind("mousemove", mousemove);




	// API

	var Mouse = {

		x: 0,
		y: 0,


		off: function(anim) {
			$(window).unbind("mousemove", mousemove);

			if (anim !== false) {
				TweenMax.to(camera.position, 1, { x: 0, y: 0 });
				TweenMax.to(RenderCSS.container.rotation, 1, { x: 0, y: 0});
			}
		},


		on: function() {
			$(window).bind("mousemove", mousemove);
		}

	};


	window.Mouse = Mouse;

})();