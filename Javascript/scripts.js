// Elevator logic
	
	$(".elevator").fadeIn(3000);

	//Open and closing doors

	var elevator_ding = new Audio('Sounds/elevator_door.wav');

	elevator = window.document['elevator'];

	elevator.addEventListener("mouseenter", (event) => {

		elevator.src="images/elevator_opened.png";

		elevator_ding.play()

	}, false);

	elevator.addEventListener("mouseout", (event) => {

		elevator.src="images/elevator_closed.png";

	}, false);

	elevator.addEventListener("click", (event) => {

		$('#exampleModal').modal('show');

	}, false);

	//END - Open and closing doors




	//Sound in the elevator

	var elevator_press_sound = new Audio('Sounds/button_press.wav');
		
		$("map area").mouseenter(
			function () {
				elevator_press_sound.play();
		}
	);

	//END - Sound in the elevator

//END ELEVATOR



//MISCELANOUS

var victory_sound = new Audio('Sounds/victory_sound.wav');