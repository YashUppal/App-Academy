const Screen = require("./screen");
const Cursor = require("./cursor");

class Bejeweled {

  constructor() {

    this.playerTurn = "O";

    this.grid =  [
      ["🥝", "🍓", "🥥", "🍇",],
      ["🥥", "🍎", "🍊", "🍇" ],
      ["🍊", "🥝", "🥝", "🥥" ],
      ["🥝", "🍎", "🍊", "🍇" ],
    ];

    this.cursor = new Cursor(4, 4);

    Screen.initialize(4, 4);
    Screen.setGridlines(false);
    Screen.addCommand("up","move cursor up",this.cursor.up.bind(this.cursor));
    Screen.addCommand("down","move cursor down",this.cursor.down.bind(this.cursor));
    Screen.addCommand("left","move cursor left",this.cursor.left.bind(this.cursor));
    Screen.addCommand("right","move cursor right",this.cursor.right.bind(this.cursor));
    Screen.addCommand("space","select a jewel",this.cursor.select.bind(this.cursor));
    Screen.addCommand("x","swap a jewel",Bejeweled.makeMove.bind(this,this.cursor));

    this.cursor.setBackgroundColor();
    Screen.render();
    Bejeweled.fillGrid(this.grid);
  }

  static fillGrid(grid) {
    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid.length; j++){
        Screen.setGrid(i,j,`${grid[i][j]}`)
      }
    }
    Screen.render();
  }

  static makeMove(cursor) {

    cursor.swap.apply(cursor);
    Bejeweled.checkForMatches(Screen.grid);
    Bejeweled.piecesFall(Screen.grid);
    Bejeweled.fillEmptyGaps(Screen.grid);
    cursor.setBackgroundColor.apply(cursor);
    Screen.render();
  }


  static checkForMatches(grid) {
    Screen.render();
    var waitTill = new Date(new Date().getTime() + 1 * 1000);
    while(waitTill > new Date()){}
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

    matches.forEach((obj) => {
      Screen.setBackgroundColor(obj.row,obj.col,"red");
    })
    Screen.render();

    var waitTill = new Date(new Date().getTime() + 1 * 1000);
    while(waitTill > new Date()){}

    matches.forEach((obj) => {
      Screen.setGrid(obj.row, obj.col, " ");
      Screen.setBackgroundColor(obj.row,obj.col,"black");
    })

    Screen.render();

    return matches;
  }

  static piecesFall(grid) {

    for(let i = 0; i < grid.length; i++){
      let col = [];
      for(let j = 0; j < grid[i].length; j++){

        let jewel = grid[j][i];
        col.push(jewel);
      }

      col = col.filter((ele) => {
        if(ele != " ") {
          return ele;
        }
      })
      while(col.length < 4) {
        col.unshift(" ");
      }

      for(let j = 0; j < grid[i].length; j++){
        grid[j][i] = col[j];
      }
    }



    // return grid;
    Screen.render();
  }

  static fillEmptyGaps(grid) {
    const randomFruits = ["🥝", "🍓", "🥥", "🍇","🍊","🍎"];

    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++) {
        if(Screen.grid[i][j] == " ") {
          let randomFruit = randomFruits[Math.floor(Math.random() * randomFruits.length)];
          Screen.setGrid(i,j,randomFruit);
        }
      }
    }
    Screen.render();

    let matches = Bejeweled.checkForMatches(Screen.grid);
    if(matches.length) {
      Screen.render();
      Bejeweled.checkForMatches(Screen.grid);
    } else {
      return
    }
  }
}

module.exports = Bejeweled;
