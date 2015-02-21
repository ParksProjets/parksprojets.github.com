/*

Array of all links
Loader via Preload.js

© 2015 - Guillaume Gonnet
License GPLv2

*/





// Links

var Links = [

	{ name: "Parks Projets", url: "http://parksprojets.tk", img: "PP.png" },

	{ name: "Music JS", url: "http://parksprojets.github.io/Music", img: "Music.png" },

	{ name: "Notes", url: "http://parksprojets.github.io/Notes", img: "Notes.png" },

	{ name: "GeoSpace JS", url: "http://parksprojets.github.io/GSJS", img: "GSJS.png" },

	{ name: "Swagg Tester", url: "http://parksprojets.github.io/Swagg", img: "Swagg.png" },

	{ name: "Github", url: "http://github.com/ParksProjets", img: "Github.png" },

	{ name: "The Puzzle Rooms", url: "https://drive.google.com/open?id=0B6K3_P_KD5X2bXlsYzJoUFZkS3M&authuser=0", img: "TPR.png" },

	{ name: "The Platformer", url: "http://parksprojets.tk/Games/Platformer", img: "Platformer.png" }

];






// Loader

var $loader = document.getElementById("loader"),
	$logo = document.getElementById("logo");

$logo.onload = function() {
	$loader.className = "actif";
}

$logo.src="img/logo.png" ;


var $loadingState = document.getElementById("loadingState");
function onLoadStart(e) {
	$loadingState.className = "ok";
}

var $loadingPerc = document.getElementById("loadingPerc");
function onLoadProgress(e) {
	$loadingPerc.innerHTML = Math.round(e.progress * 1000) / 10;
}

function onLoadComplete() {
	setTimeout(function() {
		$loader.className = $loadingState.className = "";
		$("#loader").delay(1000).fadeOut(200, start);
	}, 500);
}




// Queue

var queue = new createjs.LoadQueue(true);

queue.on("loadstart", onLoadStart);
queue.on("progress", onLoadProgress);
queue.on("complete", onLoadComplete);




var paths = [
	"css/main.css",

	"js/vendors/jquery.js",
	"js/vendors/TweenMax.js",
	"js/vendors/three.js",
	"js/vendors/CSS3DRenderer.js",

	"js/Mouse.js",
	"js/logo.js",
	"js/RenderWebGL.js",
	"js/RenderCSS.js",
	"js/LinksHTML.js",
	"js/main.js"
	
];


// We add image of every link
for (var i = 0; i < Links.length; i++)
	paths.push("img/" + Links[i].img)


queue.loadManifest(paths);