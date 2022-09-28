
//--------------------------- DESORDENADO DE LAS LETRAS -------------------------
var chkLetters = document.getElementsByClassName("letters");

var sweep_sound = new Audio("Sounds/sweep_sound.mp3");

var x = Math.random();
for (i = 0; i < chkLetters.length; i++) {
	var x = Math.floor(Math.random() * 100).toString() + "%";
	var y = Math.floor(Math.random() * 100).toString() + "%";

	chkLetters[i].style.left = x;
	chkLetters[i].style.top = y;
}

//--------------------------- END: DESORDENADO DE LAS LETRAS --------------------





// -------------------------- CLOCK --------------------------------------------
var clock;

$(document).ready(function () {
	clock = $(".clock").FlipClock({
  	clockFace: "MinuteCounter",
	});
});
// -------------------------- END: CLOCK ----------------------------------------




//------------------------- CLEAN DE LAS LETRAS ---------------

var indicePalabra = 1;

//Function check antitraba
function checkTraba()
{
	if (indicePalabra == 1)
	{
		var allClean = true;

		$(".clean1").each(function () {
			if ($(this).is(":visible")) {
			  allClean = false;
		
			}
		});
						  
		if (allClean == true) {
			indicePalabra = 2;
			$("#PalabraBuscada").html("<h1 style='color: chocolate'>Clean: Sorceress</h1>");
	  	}
	}
	
	if (indicePalabra == 2)
	{
		var allClean = true;

		$(".clean2").each(function () {
			if ($(this).is(":visible")) {
			  allClean = false;
		
			}
		});
						  
		if (allClean == true) {
			indicePalabra = 3;
			$("#PalabraBuscada").html("<h1 style='color:yellowgreen'>Clean: Spells</h1>");
	  	}
	}
	
	if (indicePalabra == 3)
	{
		var allClean = true;

		$(".clean3").each(function () {
			if ($(this).is(":visible")) {
			  allClean = false;
		
			}
		});
						  
		if (allClean == true) {
			indicePalabra = 4;
			$("#PalabraBuscada").html("<h1 style='color:darksalmon'>Clean: Full Moon</h1>");
	  	}
	}

	if (indicePalabra == 4)
	{
		var allClean = true;

		$(".clean4").each(function () {
			if ($(this).is(":visible")) {
			  allClean = false;
		
			}
		});
						  
		if (allClean == true) {
			indicePalabra = 5;
			$("#PalabraBuscada").html("<h1 style='color:deepskyblue'>Clean: Conjure</h1>");
	  	}
	}
	
	if (indicePalabra == 5)
	{
		var allClean = true;

		$(".clean5").each(function () {
			if ($(this).is(":visible")) {
			  allClean = false;
		
			}
		});
						  
		if (allClean == true) {
			indicePalabra = 6;
			$("#PalabraBuscada").html("<h1 style='color:firebrick'>Clean: Wizard</h1>");
	  	}
	}
	
	if (indicePalabra == 6)
	{
		var allClean = true;

		$(".clean6").each(function () {
			if ($(this).is(":visible")) {
			  allClean = false;
		
			}
		});
						  
		if (allClean == true) {
			indicePalabra = 7;
			$("#PalabraBuscada").html("<h1 style='color:deeppink'>Clean: Charms</h1>");
	  	}
	}
	
	if (indicePalabra == 7)
	{
		var allClean = true;

		$(".clean7").each(function () {
			if ($(this).is(":visible")) {
			  allClean = false;
		
			}
		});
						  
		if (allClean == true) {
			indicePalabra = 8;
			$("#PalabraBuscada").html("<h1 style='color:gold'>Clean: Magical</h1>");
	  	}
	}
	
	if (indicePalabra == 8)
	{
		var allClean = true;

		$(".clean8").each(function () {
			if ($(this).is(":visible")) {
			  allClean = false;
		
			}
		});
						  
		if (allClean == true) {
			indicePalabra = 9;
			$("#PalabraBuscada").html("<h1 style='color:black'>Congratulations you won!</h1>");
			
			console.log("Felicidades ganaste el juego!");
			victory_sound.play();
			$('#winModal').modal('show');
	  	}
	}
	
}

//Fin de funcion y arranca el main program
$(".clean1").hover(function () {
	if (indicePalabra == 1) {
	  $(this).fadeOut(100);
	  sweep_sound.play();

	  checkTraba();
	}
});

//CLEAN 2 -----------------------------
$(".clean2").hover(function () {
	if (indicePalabra == 2) {
	  $(this).fadeOut(100);
	  sweep_sound.play();

	  checkTraba();
	}
});

//CLEAN 3 -----------------------------
$(".clean3").hover(function () {
	if (indicePalabra == 3) {
	  $(this).fadeOut(100);
	  sweep_sound.play();

	  checkTraba();
	}
});

//CLEAN 4 -----------------------------
$(".clean4").hover(function () {
	if (indicePalabra == 4) {
	  $(this).fadeOut(100);
	  sweep_sound.play();

	  checkTraba();
	}
});

//CLEAN 5 -----------------------------
$(".clean5").hover(function () {
	if (indicePalabra == 5) {
	  $(this).fadeOut(100);
	  sweep_sound.play();

	  checkTraba();
	}
});






//CLEAN 6 -----------------------------
$(".clean6").hover(function () {
	if (indicePalabra == 6) {
	  $(this).fadeOut(100);
	  sweep_sound.play();

	  checkTraba();
	}
});

//CLEAN 7 -----------------------------
$(".clean7").hover(function () {
	if (indicePalabra == 7) {
	  $(this).fadeOut(100);
	  sweep_sound.play();

	  checkTraba();
	}
});

//CLEAN 8 -----------------------------
$(".clean8").hover(function () {
	if (indicePalabra == 8) {
	  $(this).fadeOut(100);
	  sweep_sound.play();

	  checkTraba();
	}
});