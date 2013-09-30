function Player(name) {
	this.name = name;
};

Player.prototype.picks = function(pick) {
	this.pick = pick;
};


function Game(player1, player2) {
	this.player1 = player1;
  this.player2 = player2;
}

var PAIRS = {
	rock: 		{beats: ["scissors", "lizard"]},
	scissors: {beats: ["paper", "lizard"]},
	paper: 		{beats: ["rock", "spock"]},
	lizard: 	{beats: ["spock", "paper"]},
	spock: 		{beats: ["scissors", "rock"]},

};

Game.prototype.same_pick = function() {
	if (this.player1.pick == this.player2.pick) {
		return true;
	} else {
		return false;
	};
};

Game.prototype.winner = function() {
	if (this.same_pick() == true) {
		return null; 
	} else {
		if (PAIRS[player1.pick]["beats"].indexOf(player2.pick) !== -1) {
	    return player1;
	  } else {
	    return player2;
	  };
  };
};