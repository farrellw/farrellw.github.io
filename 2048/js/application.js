$(document).ready(function() {
  var game = new Game;
  renderBoard(game.gameString,game.score);
  Mousetrap.bind("up",function() {
    game.move("up");
    renderBoard(game.gameString,game.score);
  })
  Mousetrap.bind("down",function() {
    game.move("down");
   renderBoard(game.gameString,game.score);
  })
  Mousetrap.bind("left",function() {
    game.move("left");
    renderBoard(game.gameString,game.score);
  })
  Mousetrap.bind("right",function() {
    game.move("right");
    renderBoard(game.gameString,game.score);
  })

});


