/*

 Create atricles in HTML for every links

© 2015 - Guillaume Gonnet
License GPLv2

*/


(function() {


	var $body = $(document.body);


	Links.forEach(function(l) {

		var $article = $('<article></article>'),
			$img = $(queue.getItem("img/" + l.img).tag);

		$article.append($img);


		$article.click(function() {


			Mouse.off();
			TweenMax.to(RenderCSS.container.position, 1, { y: -window.innerHeight-Mouse.y });


			var tl = new TimelineMax({ delay: .2, onComplete: function() {
				window.location = l.url;
			} });

			tl.to(RenderWebGL.meshLogo.position, .8, { z: 200 });
			tl.to(RenderWebGL.meshLogo.rotation, .6, { y: -Math.PI }, 0);

		});


		$body.append($article);

	});



	window.Links = Links;

})();