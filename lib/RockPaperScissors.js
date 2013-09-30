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

function samePick(){
	
};

Game.prototype.winner = function() {
	if (samePick == true) {
		return null;
	};

	if (PAIRS[player1.pick]["beats"] == player2.pick)	 {
	    return player1;
	  } else {
	    return player2;
  };
};