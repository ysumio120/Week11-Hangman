// Importing data from other necessary files
var game = require("./game.js");
var word = require("./word.js");
var readline = require('readline');

// Read input from user
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var guessedLetter;
var newGame = new game.game();

// Initiate game
newGame.init();

console.log(newGame.word);

console.log("Guesses left: " + newGame.guessCount);
newGame.printProgress();
process.stdout.write("\nYour Guess: ");

rl.on('line', function(line){
	if(line.trim().length != 1 ) {
		console.log("Please guess a letter");
		process.stdout.write("Your Guess: ");
	}
	else {
    	guessedLetter = line;
    	if(newGame.checkLetter(guessedLetter) == true) {
    		console.log("Already guessed. Guess again");
    		console.log("Guesses left: " + newGame.guessCount);
    		newGame.printProgress();
    		process.stdout.write("\nYour Guess: ");
    		return;
    	}
    	if(word.checkMatch(guessedLetter, newGame)) {
    		console.log("You guessed right!");
    	}
    	else {
    		console.log("Wrong. Try again!");
    		newGame.guessCount--;
    	}
    	console.log("Guesses left: " + newGame.guessCount);
    	newGame.printProgress();
    	console.log();
    	
    	if(newGame.checkWord()) {
    		console.log("YOU WIN!!");
    		process.exit();
    	}
    	if(newGame.guessCount <= 0) {
    		console.log("No more guesses. You lose!");
    		process.exit();
    	}
    	process.stdout.write("Your Guess: ");
    }
});

