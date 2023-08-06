const Screen = require("./screen");
const Cursor = require("./cursor");

class Bejeweled {

  constructor() {

    this.playerTurn = "O";

    // Initialize this
    this.grid = [
      [" ", " ", " ", " ",],
      [" ", " ", " ", " ",],
      [" ", " ", " ", " ",],
      [" ", " ", " ", " ",]
    ];

    this.cursor = new Cursor(4, 4);

    Screen.initialize(4, 4);
    Screen.setGridlines(false);

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  static checkForMatches(grid) {

    // check for horizontal win
    let matches = [];
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < 2; j++){
        if(grid[i].slice(j, j+3).every(ele => ele == grid[i][i])) {
          matches.push({row: i, col: j})
          matches.push({row: i, col: j+1})
          matches.push({row: i, col: j+2})
        }
      }
    }

    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < 2; j++){
        let jewel = grid[j][i];

        if(jewel == grid[j+1][i] && jewel == grid[j+2][i]) {
          matches.push({row: j, col: i})
          matches.push({row: j+1, col: i})
          matches.push({row: j+2, col: i})
        }
      }
    }

    return matches;
  }

  static piecesFall(grid) {

    for(let i = 0; i < grid.length; i++){
      let col = [];
      for(let j = 0; j < grid[i].length; j++){

        let jewel = grid[j][i];
        col.push(jewel);
      }
      if(col.includes(" ")) {
        col = col.filter(ele => ele != " ");
        col.unshift(" ");
      }

      for(let j = 0; j < grid[i].length; j++){
        grid[j][i] = col[j];
      }
    }

    // return grid;

  }


}

module.exports = Bejeweled;
