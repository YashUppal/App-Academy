const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [['X',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('up','move cursor up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('down','move cursor down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('left','move cursor left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('right','move cursor right', this.cursor.right.bind(this.cursor));
    Screen.addCommand('m','make your move',TTT.move.bind(this))
    this.cursor.setBackgroundColor();

    Screen.render();
  }

  static move() {
    Screen.setGrid(this.cursor.row, this.cursor.col, this.playerTurn);
    TTT.togglePlayerTurn.call(this);
    let winner = TTT.checkWin(Screen.grid);

    if(winner)
      TTT.endGame(winner);
  }

  static togglePlayerTurn() {
    this.playerTurn = this.playerTurn === "X" ? "O" : "X";
  }

  static checkWin(grid) {

    if(TTT._checkEmptyGrid(grid)) {
      return false;
    }

    const horizontalWin = TTT._checkHorizontalWin(grid);

    if(horizontalWin) {
      return horizontalWin;
    }

    const verticalWin = TTT._checkVerticalWin(grid);

    if(verticalWin) {
      return verticalWin;
    }

    const diagonalWin = TTT._checkDiagonalWin(grid);

    if(diagonalWin) {
      return diagonalWin;
    }

    const allFilledOut = TTT._allFilledOut(grid);

    if(allFilledOut && !(horizontalWin || verticalWin || diagonalWin)) {
      return "T";
    } else if (!allFilledOut && !(horizontalWin || verticalWin || diagonalWin)) {
      return false;
    }
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

  static _checkEmptyGrid(grid) {
    for(let i = 0; i < grid.length; i++) {
      if(!(grid[i].every((sym) => sym === " "))) {
        return false;
      }
    }
    return true;
  }

  static _checkHorizontalWin(grid) {
    for(let i = 0; i < grid.length; i++){
      if(grid[i].every((sym) => sym === "X")) {
        return "X";
      }

      if(grid[i].every((sym) => sym === "O")) {
        return "O";
      }
    }
    return false;
  }

  static _checkVerticalWin(grid) {
    for(let i = 0; i < grid.length; i++) {
      let col = [];

      for(let j = 0; j < grid.length; j++){
        col.push(grid[j][i]);
      }

      if(col.every(sym => sym === "X")) {
        return "X";
      }

      if(col.every(sym => sym === "O")) {
        return "O";
      }
    }
    return false;
  }

  static _checkDiagonalWin(grid) {
    let diag_1 = [];
    let diag_2 = [];

    for(let i = 0; i < grid.length; i++){
      diag_1.push(grid[i][i]);
      diag_2.push(grid[i][grid[i].length - 1 - i]);
    }

    if(diag_1.every(sym => sym === "X") ||
      diag_2.every(sym => sym === "X")){
      return "X";
    }

    if(diag_1.every(sym => sym === "O") ||
    diag_2.every(sym => sym === "O")){
    return "O";
    }

    return false;
  }

  static _allFilledOut(grid) {
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid.length; j++){
        if(grid[i][j] === " ") {
          return false;
        }
      }
    }
    return true;
  }

}

module.exports = TTT;
