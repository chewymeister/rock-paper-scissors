//Player Class

function Player(player1, player2) {
  this.player1 = player1
  this.player2 = player2

}

// equivalent of Ruby instance method
// "." is the same as "@""
Player.prototype.picks = function() {

}

function Game() {

}

Game.prototype.winner = function() {
  return player1;
}
