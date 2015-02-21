/*

RenderWebGL

*/



(function() {


	var scene, renderer, meshLogo;



	function init() {

		// Scene

		scene = RenderWebGL.scene = new THREE.Scene();



		// Logo

		var loader = new THREE.JSONLoader(),
		obj = loader.parse(logo);

		var geometry = obj.geometry, materials = obj.materials;

		var s = 200;

		meshLogo = RenderWebGL.meshLogo = new THREE.SkinnedMesh( geometry, new THREE.MeshFaceMaterial( materials ) );
		meshLogo.position.set( 0, -800, -300 );
		meshLogo.scale.set( s, s, s );
		scene.add( meshLogo );




		// Lights

		var light = new THREE.DirectionalLight( 0xebf3ff, 1.2 );
		light.position.set( 0, 140, 500 ).multiplyScalar( 1.1 );
		scene.add( light );


		var light = new THREE.DirectionalLight( 0xebf3ff, .6 );
		var obj = new THREE.Object3D();
		obj.position.set(0, 0, 0);
		light.position.set(200, 0, 0);
		light.target = obj;
		scene.add( light );


		var light = new THREE.DirectionalLight( 0xebf3ff, .6 );
		var obj = new THREE.Object3D();
		obj.position.set(0, 0, 0);
		light.position.set(-200, 0, 0);
		light.target = obj;
		scene.add( light );




		// Renderer

		renderer = RenderWebGL.renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setClearColor( 0xeeeeee );
		renderer.setSize( window.innerWidth, window.innerHeight );

		document.body.appendChild( renderer.domElement );

	}




	function render(camera) {

		renderer.render( scene, camera );
	}




	function resize() {
		renderer.setSize( window.innerWidth, window.innerHeight );
	}





	// API

	var RenderWebGL = {

		init: init,
		render: render,
		resize: resize

	};



	window.RenderWebGL = RenderWebGL;

})();