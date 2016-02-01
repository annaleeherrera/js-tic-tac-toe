var TicTacToe = function() {
  this.board = [" "," "," "," "," "," "," "," "," "];
  this.player = "x";
  this.turn = 0;
};
TicTacToe.prototype.mark = function() {
  this.turn++;
 if (this.turn % 2 === 0) {
    this.player = "x";
 } else {
   this.player = "o";
 }
 };


// player 1 =x, player 2 = 0
// };

// TicTacToe.prototype.Player = function(board) {
//   this.isTurn = false;
//  // select any square
//   // change board array
//   // increase turnCount
// };

// TicTacToe.prototype.Player1 = function() {
//   if (turnCount % 2 == 1) {
//     this.isTurn = true;
//   }
//   Player1.prototype = new Player();
//   var player1 = new Player1();
//   // on click show x
// };
//
// TicTacToe.prototype.Player2 = function() {
//   if (turnCount % 2 == 0) {
//     this.isTurn = true;
//   }
//   Player2.prototype = new Player();
//   var player1 = new Player2();
//   // on click show x
// };

TicTacToe.prototype.tie = function() {

};


TicTacToe.prototype.win = function() {
  // this.win= [[0,1,2], [3,4,5], [6,7,8],
  //           [0,3,6], [1,4,7], [2,5,8],
  //           [0,4,8], [6,4,2]]

};


//
// TicTacToe.prototype.win = function() {
//
//
// };

  // $("#show").click(function(){
  //   var hide = (".hide").hide();
  // });
$('#new_game').click(function(){
    location.reload();
  });
