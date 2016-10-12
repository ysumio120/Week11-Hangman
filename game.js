var pokemon =
	["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle",
	"Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto",
	"Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew",
	"Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix",
	"Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", 
	"Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey",
	"Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop",
	"Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler",
	"Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio",
	"Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee",
	"Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee",
	"Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea",
	"Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir",
	"Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte",
	"Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair",
	"Dragonite", "Mewtwo", "Mew"];

var letter = require("./letter.js");

exports.game = function() {
	this.guessCount = 10;
	this.guessedLetters = [];
	this.word = pokemon[Math.floor(Math.random() * pokemon.length)];
	this.guessedWord = [];
	this.init = function() {
		for(var i = 0; i < this.word.length; i++) {
			var char = this.word.charAt(i);
			var obj = new letter.letter(char);
			this.guessedWord.push(obj);
		}
	};
	this.printProgress = function() {
		var progress = "";
		for(var i = 0; i < this.guessedWord.length; i++) {
			progress += this.guessedWord[i].display() + " ";
		}
		console.log(progress);
	};
	this.checkLetter = function(letter) {
		for(var i = 0; i < this.guessedLetters.length; i++) {
			if(letter == this.guessedLetters[i]) {
				return true;
			}
		}
		this.guessedLetters.push(letter);
		return false;
	};
	this.checkWord = function() {
		for(var i = 0; i < this.guessedWord.length; i++) {
			if(this.guessedWord[i].guessed == false) {
				return false;
			}
		}
		return true;
	};
}

