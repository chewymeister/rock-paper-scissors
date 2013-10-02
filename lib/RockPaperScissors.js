function Player(name) {
	this.name = name;
};

Player.prototype.picks = function(pick) {
	this.pick = pick;
};


function Game(player1, player2) {
	this.player1 = player1;
  this.player2 = player2;
};

var PAIRS = {
	// rock: 		{beats: ["scissors", "lizard"]},
	// scissors: {beats: ["paper", "lizard"]},
	// paper: 		{beats: ["rock", "spock"]},
	// lizard: 	{beats: ["spock", "paper"]},
	// spock: 		{beats: ["scissors", "rock"]},

	'rock': {
		'scissors': 'crushes',
		'lizard': 'crushes'
	},
	'paper': {
		'rock': 'covers',
		'spock': 'disproves'
	},
	'scissors': {
		'paper': 'cuts',
		'lizard': 'decapitates'
	},
	'spock': {
		'scissors': 'smashes',
		'rock': 'vaporises'
	},
	'lizard': {
		'spock': 'poisons',
		'paper': 'eats'
	}
};

Game.prototype.same_pick = function() {
	if (this.player1.pick == this.player2.pick) {
		return true;
	} else {
		return false;
	};
};

Game.prototype.winner = function() {
	if (this.same_pick()) {
		// return null; 
		message = 'Draw! Now duke it out to see who wins...'
		return [message]
	} else {
		if (PAIRS[this.player1.pick][this.player2.pick]) {
			message = player1.pick + ' ' + PAIRS[player1.pick][player2.pick] + ' ' + player2.pick;
	    return [this.player1, message]; 
	  } else {
	  	message = player2.pick + ' ' + PAIRS[player2.pick][player1.pick] + ' ' + player1.pick;
	    // return this.player2;
	    return [this.player2, message]
	  };
  };
};

