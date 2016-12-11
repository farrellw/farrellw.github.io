var Game = function(gameString = '') {
  this.score = 0 ;
  this.gameString = gameString.split("");
  if ( gameString.length === 0) {
    var randOne = Math.floor(Math.random() * 16);
    var randTwo = Math.floor(Math.random() * 16);
    for ( var i = 0; i < 16; i++) {
      if (i === randOne || i === randTwo) {
       this.gameString.push("2");
      }
      else {
       this.gameString.push("0");
      };
    };
  };
};

// Game.prototype.toString = function() {
//   var output = "";
//   for ( var i = 0 ; i < 4 ; i++ ) {
//     output += this.gameString. 4*i , 4 );
//     output += '\n' ;
//   };
//   return output ;
// };


Game.prototype.move = function(direction) {
  var checkGame = this.gameString.slice(0);
  switch (direction)
  {
    case "up":
      this.gameString = this.upMove(this.gameString)
      break;
    case "down":
      this.gameString = this.downMove(this.gameString)
      break;
    case "left":
      this.gameString = this.leftMove(this.gameString)
      break;
    case "right":
      this.gameString = this.rightMove(this.gameString)
      break;
  };
  if (checkGame.toString() != this.gameString.toString()) {
    this.gameString = this.addNumber(this.gameString);
  }
  var checkGame = this.gameString.slice(0);
  if (this.checkCheckGame(checkGame)) {
    return
  } else {
    alert("Game Over");
  };
};

Game.prototype.checkCheckGame = function(checkGame) {
  checkGame = this.upMove(checkGame,"check");
  if (checkGame.toString() != this.gameString.toString()) { return true }
  checkGame = this.downMove(checkGame,"check");
  if (checkGame.toString() != this.gameString.toString()) { return true }
  checkGame = this.leftMove(checkGame,"check");
  if (checkGame.toString() != this.gameString.toString()) { return true }
  checkGame = this.rightMove(checkGame,"check");
  if (checkGame.toString() != this.gameString.toString()) { return true }
}


Array.prototype.replaceAt = function(index, character) {
  this[index] = character;
  return this;
};

Game.prototype.upMove = function(gameString, env = "") {
  for ( var i = 4; i < 16; i++) {
    var neighbor = gameString[i-4];
    var current = gameString[i];
    if (neighbor === "0" && current != "0") {
      gameString = gameString.replaceAt(i-4, gameString[i]);
        gameString = gameString.replaceAt(i, "0");
        i -= 5;
    };
  };
  for ( var i = 4; i < 16; i++) {
    var neighbor = gameString[i-4];
    var current = gameString[i];
    if (current != "0" && current === neighbor) {
      if (env !="check"){this.score += current * 2};
      gameString = gameString.replaceAt(i-4, String(current * 2) );
      gameString = gameString.replaceAt(i, "0");
    };
  };
  for ( var i = 4; i < 16; i++) {
    var neighbor = gameString[i-4];
    var current = gameString[i];
    if (neighbor === "0" && current != "0") {
      gameString = gameString.replaceAt(i-4, gameString[i]);
      gameString = gameString.replaceAt(i, "0");
      i -= 5;
    };
  };
  return gameString;
}

// Game.prototype.upRemoveWhite = function (gamestring) {
//   for ( var i = 4; i < 16; i++) {
//     var neighbor = gameString[i-4];
//     var current = gameString[i];
//     if (neighbor === "0" && current != "0") {
//       gameString = gameString.replaceAt(i-4, gameString[i]);
//         gameString = gameString.replaceAt(i, "0");
//         i -= 5;
//     };
//   };
// }

Game.prototype.downMove = function(gameString, env = "") {
  for ( var i = 11; i > -1; i--) {
    var neighbor = gameString[i+4];
    var current = gameString[i];
    if (neighbor === "0" && current != "0") {
      gameString = gameString.replaceAt(i+4, gameString[i]);
      gameString = gameString.replaceAt(i, "0");
      i += 5;
    };
  };
  for ( var i = 11; i > -1; i--) {
    var neighbor = gameString[i+4];
    var current = gameString[i];
    if (current != "0" && current === neighbor) {
      if (env !="check"){this.score += current * 2};
      gameString = gameString.replaceAt(i+4, String(current * 2) );
      gameString = gameString.replaceAt(i, "0");
    };
  };
  for ( var i = 11; i > -1; i--) {
    var neighbor = gameString[i+4];
    var current = gameString[i];
    if (neighbor === "0" && current != "0") {
      gameString = gameString.replaceAt(i+4, gameString[i]);
      gameString = gameString.replaceAt(i, "0");
      i += 5;
    };
  };
  return gameString;
};

Game.prototype.leftMove = function(gameString, env = "") {
  for ( var i = 1; i < 16; i++) {
    if (i % 4 != 0 ) {
      var neighbor = gameString[i-1];
      var current = gameString[i];
      if (neighbor === "0" && current != "0") {
        gameString = gameString.replaceAt(i-1, gameString[i]);
        gameString = gameString.replaceAt(i, "0");
        i -= 2;
      };
    };
  };
  for ( var i = 1; i < 16; i++) {
    if (i % 4 != 0 ) {
      var neighbor = gameString[i-1];
      var current = gameString[i];
      if (current != "0" && current === neighbor) {
        if (env !="check"){this.score += current * 2};
        gameString = gameString.replaceAt(i-1, String(current * 2) );
        gameString = gameString.replaceAt(i, "0");
      };
    };
  };
  for ( var i = 1; i < 16; i++) {
    if (i % 4 != 0 ) {
      var neighbor = gameString[i-1];
      var current = gameString[i];
      if (neighbor === "0" && current != "0") {
        gameString = gameString.replaceAt(i-1, gameString[i]);
        gameString = gameString.replaceAt(i, "0");
        i -= 2;
      };
    };
  };
  return gameString;
};

Game.prototype.rightMove = function(gameString, env = "") {
  for ( var i = 15; i > -1; i--) {
    if (i % 4 != 3 ) {
      var neighbor = gameString[i+1];
      var current = gameString[i];
      if (neighbor === "0" && current != "0") {
        gameString = gameString.replaceAt(i+1, gameString[i]);
        gameString = gameString.replaceAt(i, "0");
        i += 2;
      };
    };
  };
  for ( var i = 15; i > -1; i--) {
    if (i % 4 != 3 ) {
      var neighbor = gameString[i+1];
      var current = gameString[i];
      if (current != "0" && current === neighbor) {
        if (env !="check"){this.score += current * 2};
        gameString = gameString.replaceAt(i+1, String(current * 2) );
        gameString = gameString.replaceAt(i, "0");
      };
    };
  };
  for ( var i = 15; i > -1; i--) {
    if (i % 4 != 3 ) {
      var neighbor = gameString[i+1];
      var current = gameString[i];
      if (neighbor === "0" && current != "0") {
        gameString = gameString.replaceAt(i+1, gameString[i]);
        gameString = gameString.replaceAt(i, "0");
        i += 2;
      };
    };
  };

  return gameString;
}

Game.prototype.addNumber = function(gameString) {
    if (gameString.includes("0")) {
    var indexWorks = true;
    while (indexWorks) {
      var index = Math.floor(Math.random() * 16);
      if ( gameString[index] === "0" ){
        gameString = gameString.replaceAt(index, "2");
        indexWorks = false;
      };
    };
  }
  return gameString;
}
