(() => {
	//simple JS file
	console.log("LOADED!");
	//
	// variables work the same in js as python

	// weapon choice options
	var choices = ["Rock","Paper","Scissors"];
	// computers weapon choice
	var computer;
	// players weapon input
	var player = document.querySelector("#weapon");
	// "play" button
	var trigger = document.querySelector("#play");
	// win or lose status. call classes with period not hash
	var status = document.querySelector(".winlose");

	// playGame function
	function playGame(){
		// following prints for testing 
		// debugger;
		//console.log("Executed playGame");

		// make the computer randomly chose a weapon
		computer = choices[Math.floor(Math.random() * choices.length)];
		// following prints for testing
		console.log("computer chooses:", computer);

		// the players choice as a value
		var player_choice = player.value;
		// following prints for testing
		console.log("player chooses:", player_choice);

		// checking for a tie
		if (computer.toLowerCase() == player_choice.toLowerCase()){
			// it's a tie
			status.textContent = "It's a Tie! Try again!";
		}

		// checking for rock vs scissors
		else if ( player_choice.toLowerCase() == "rock"){
			if (computer.toLowerCase() == "scissors"){
				//win
				status.textContent = `You Win! ${player_choice} beats ${computer}.`;
			}
			else {
				//lose
				status.textContent = `You Lose! ${computer} beats ${player_choice}.`;
			}
		}

		// checking for paper vs rock
		else if (player_choice.toLowerCase() == "paper"){
			if (computer.toLowerCase() == "rock"){
				//win
				status.textContent = `You Win! ${player_choice} beats ${computer}.`;
			}
			else {
				//lose
				status.textContent = `You Lose! ${computer} beats ${player_choice}.`;
			}
		}

		// checking for scissors vs paper
		else if ( player_choice.toLowerCase() == "scissors"){
			if (computer.toLowerCase() == "paper"){
				//win
				status.textContent = `You Win! ${player_choice} beats ${computer}.`;
			}
			else {
				//lose
				status.textContent = `You Lose! ${computer} beats ${player_choice}.`;
			}
		}

		// bad entry try again
		else{
			player.value = "";
			alert("You did not pick a valid weapon. Please try again")
		}

	// ending braclket
	}
	
	// if button is clicked, then execute playGame
	trigger.addEventListener("click", playGame);
} )();