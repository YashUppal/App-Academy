const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ']]

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    Screen.addCommand('left','move left',this.cursor.left.bind(this.cursor));
    Screen.addCommand('right','move right',this.cursor.right.bind(this.cursor));
    Screen.addCommand('up','move up',this.cursor.up.bind(this.cursor));
    Screen.addCommand('down','move down',this.cursor.down.bind(this.cursor));
    Screen.addCommand('space','make move',ConnectFour.makeMove.bind(this));

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static makeMove() {
    if(Screen.grid[this.cursor.row][this.cursor.col] == " ") {
      Screen.setGrid(this.cursor.row,this.cursor.col,this.playerTurn);
      ConnectFour.togglePlayerTurn.apply(this);
    }

    let winner = ConnectFour.checkWin(Screen.grid)
    if(winner) {
      ConnectFour.endGame(winner);
    }
  }

  static togglePlayerTurn() {
    this.playerTurn = this.playerTurn === "X" ? "O" : "X";
  }

  static checkWin(grid) {

    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    const winner = ConnectFour._horizontalWin(grid) || ConnectFour._verticalWin(grid) || ConnectFour._diagonalWin(grid) || ConnectFour._diagonalUpwardWin(grid);

    if(winner) {
      return winner;
    }

    if(!winner & ConnectFour._boardFull(grid)) {
      return "T";
    }

    if(ConnectFour._emptyGrid(grid)) {
      return false;
    }
  }

  static _emptyGrid(grid) {
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < i.length; j++){
        if(grid[i][j] != " "){
          return false;
        }
      }
    }
    return true;
  }

  static _horizontalWin(grid) {
    for(let i = 0; i < grid.length; i++){
      if(grid[i].join("").includes("XXXX")) {
        return "X";
      }

      if(grid[i].join("").includes("OOOO")) {
        return "O";
      }
    }
  }

  static _verticalWin(grid) {
    for(let i = 0; i < grid[0].length; i++){
      let column = [];
      for(let j = 0; j < grid.length; j++){
        column.push(grid[j][i]);
      }
      column = column.join("");
      if(column.includes("XXXX")) {
        return "X";
      }

      if(column.includes("OOOO")) {
        return "O";
      }
    }
  }

  static _diagonalWin(grid) {

    for(let i = 0; i < grid.length; i++){

      let leftDiag = [];
      let rightDiag = [];

      for(let j = 0; j < grid[i].length; j++){

        let x = j;
        let y = j + i;

        if(x < grid.length && y < grid[i].length) {
          rightDiag.push(grid[x][y]);
        }

        if(y < grid.length && x < grid[i].length) {
          leftDiag.push(grid[y][x]);
        }
      }

      leftDiag = leftDiag.join("");
      rightDiag = rightDiag.join("");

      if(leftDiag.includes("XXXX") || rightDiag.includes("XXXX"))
        return "X";
      if(leftDiag.includes("OOOO") || rightDiag.includes("OOOO"))
        return "O";
    }

    return false;
  }

  static _diagonalUpwardWin(grid) {
    let gridCopy = grid.slice();

    let mirroredGrid = gridCopy.map((row) => {
      return row.slice().reverse();
    })

    return ConnectFour._diagonalWin(mirroredGrid);
  }

  // static _recognizeTie(grid) {
  //   if(ConnectFour._boardFull(grid) )
  // }

  static _boardFull(grid) {
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++){
        if(grid[i][j] === " ") {
          return false;
        }
      }
    }
    return true;
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

}

module.exports = ConnectFour;
