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
	rock: 		{beats: "scissors"},
	scissors: {beats: "paper"},
	paper: 		{beats: "rock"},

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
		if (PAIRS[player1.pick]["beats"] == player2.pick) {
	    return player1;
	  } else {
	    return player2;
	  };
  };
};