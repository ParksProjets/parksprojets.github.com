/*

Main file

© 2015 - Guillaume Gonnet
License GPLv2

*/




var camera;


function init() {

	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 300;


	RenderWebGL.init();
	RenderCSS.init();

}





function animate() {

	requestAnimationFrame( animate );

	RenderWebGL.render(camera);
	RenderCSS.render(camera);

}


init();
animate();



function start() {
	TweenMax.to(RenderCSS.container.position, 1, { y: 0 });
	TweenMax.to(RenderWebGL.meshLogo.position, 1, { y: 45 });
}





function resize() {
	camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

	RenderWebGL.resize();
	RenderCSS.resize();
}

$(window).resize(resize);