/*

RenderCSS

*/



(function() {


	var scene, container, renderer;

	var width = 0, height = 0;

	var nbArtLigne = 2; // Nombre d'article par ligne
	var marginTop = 30; // Marge entre deux lignes
	var marginLeft = 30;

	var z = 0;  // Axe z
	var s = 0.25;



	function init() {

		// Scene

		scene = RenderCSS.scene = new THREE.Scene();

		container = RenderCSS.container = new THREE.Object3D();
		container.position.y = -1000;
		scene.add(container);


		width = $("article").width() * s;
		height = $("article").height() * s;

		var wT = nbArtLigne * (width + marginLeft) - marginLeft,
			nbLignes = Math.ceil($("article").length / nbArtLigne),
			hT = nbLignes * (height + marginTop) - marginTop;


		// Elements

		$("article").each(function(i) {

			var e = new THREE.CSS3DObject(this);

			var l = Math.floor(i / nbArtLigne);

			e.position.y = hT / 2 - l * (height + marginTop) - height / 2;
			e.position.x = -wT / 2 + (i - l*nbArtLigne) * (width + marginLeft) + width / 2;
			e.position.z = z;

			e.scale.set(s, s, s);


			container.add(e);
		});




		// Renderer

		renderer = RenderCSS.renderer = new THREE.CSS3DRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );

		document.body.appendChild( renderer.domElement );
		renderer.domElement.className = "cssRenderer";

	}




	function render(camera) {

		container.rotation.y = (Mouse.x / halfWidth - 1) * -Math.PI / 35;
		camera.position.x = (Mouse.x - halfWidth) / -6;

		container.rotation.x = (Mouse.y / halfHeight - 1) * -Math.PI / 60;
		camera.position.y = (Mouse.y - halfHeight) / -2;
		
		renderer.render( scene, camera );
	}




	function resize() {
		renderer.setSize( window.innerWidth, window.innerHeight );
	}




	// API

	var RenderCSS = {

		init: init,
		render: render,
		resize: resize

	};



	window.RenderCSS = RenderCSS;

})();