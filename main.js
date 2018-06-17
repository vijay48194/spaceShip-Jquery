
var keySpace = 32;
var keyLeft = 37;
var keyUp = 38;
var keyRight = 39;
var keyDown = 40; 

$(document).ready(function() {

	var spaceship = $("#spaceship");
	var bullet = $("#bullet");

	spaceship.css({
		"position": "absolute",
		"left": 10,
		"top": 300
	});

	bullet.css({
		"position": "absolute",
		"display": "none"
	});


	var speed = 5;
	var direction = {
		left: false,
		up: false,
		right: false,
		down: false
	};

	var bulletSpeed = 3;
	var bulletState = {
		val: "available"
	}

	$(document).on('keydown', function(e) {
		var kc = e.keyCode;
		e.preventDefault();

		if (kc === 37) direction.left = true;
		if (kc === 38) direction.up = true;
		if (kc === 39) direction.right = true;
		if (kc === 40) direction.down = true;

		if (kc == keySpace && bulletState.val == "available") bulletState.val = "fired";
	});

	$(document).on('keyup', function(e) {
		var kc = e.keyCode;
		e.preventDefault();

		if (kc === 37) direction.left = false;
		if (kc === 38) direction.up = false;
		if (kc === 39) direction.right = false;
		if (kc === 40) direction.down = false;
	});

	

	function move() {
		if (direction.left) spaceship.css("left", (spaceship.position().left - speed) + "px");
		if (direction.up) spaceship.css("top", (spaceship.position().top - speed) + "px");
		if (direction.right) spaceship.css("left", (spaceship.position().left + speed) + "px");
		if (direction.down) spaceship.css("top", (spaceship.position().top + speed) + "px");

		if (bulletState.val == "fired") {
			bulletState.val = "unavailable";
			bullet.css({
				"display": "block",
				"left": spaceship.position().left + 50,
				"top": spaceship.position().top + 50,
			}).animate({left:1500}, 1000/bulletSpeed, function(){
				bullet.css({
					"display": "none"
				});
				bulletState.val = "available";
			});
		}
	}

	setInterval(move, 10);
});










