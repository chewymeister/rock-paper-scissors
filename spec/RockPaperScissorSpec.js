describe("rock paper scissors",function(){
  beforeEach(function(){

    player1 = new Player();
    player2 = new Player();

    game = new Game(player1, player2);


  });

  describe("winning and losing", function(){
    describe("rock", function(){
      it("should beat scissors", function(){
        
        player1.picks("rock");
        player2.picks("scissors");
        expect(game.winner()).toBe(player1);

      });

      it("should lose to paper", function(){

        player1.picks("rock");
        player2.picks("paper");
        expect(game.winner()).toBe(player2);

      });
      
    });

  });


});