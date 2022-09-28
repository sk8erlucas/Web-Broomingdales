
//Invocada mas abajo
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

var cat = new Audio('Sounds/cat.wav');
var puppy = new Audio('Sounds/dog_bark.wav');

counter = 0;

//Randoms de cero a 8 (9 Canastas)
puppyIn = Math.floor(Math.random() * 9);
stringIn = Math.floor(Math.random() * 9);

//Si son iguales debe usar otro -----------

//Asignando ID a las canastas
$(".basket").each(function () {

	if (counter == puppyIn)
	{
		$(this).prop('id', "p");
	}
	else if (counter == stringIn)
	{
		$(this).prop('id', "h");
	}
	else
	{
		$(this).prop('id', counter);
	}

	counter++;

});

var puppyFound = false;
var boneFound = false;

$(".basket").on( "click", 
	function (){
		var idClick = $(this).attr("id");

		if (idClick == "p")
		{
			$(this).attr("src","images/puppy basket.png");
			puppy.play();
			puppyFound = true;
		}
		else if (idClick == "h")
		{
			$(this).attr("src","images/bone basket.png");
			puppy.play();
			boneFound = true;
		}
		else
		{
			$(this).attr("src","images/cat basket.png");
			cat.play();

			sleep(1000).then(() => 
							 $(this).attr("src","images/basket.png"));

			if (puppyFound == true)
			{
				$("#p").attr("src","images/basket.png");
				puppyFound = false;

			}

			if (boneFound == true)
			{
				$("#h").attr("src","images/basket.png");
				boneFound = false;
			}

			//Si los 2 son true you won console log
			//clap sound al ganar
			//Modal won botones jugar de vuelta o ir a otro piso
		}

	if (boneFound == true && puppyFound == true)
	{
		console.log("Felicidades ganaste el juego!");
		victory_sound.play();
		$('#winModal').modal('show');
	}

});