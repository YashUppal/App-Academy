const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.selectedRow = null;
    this.selectedCol = null;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up() {
    this.resetBackgroundColor.call(this);
    if(this.row > 0) {
      this.row -= 1;
    }
    this.setBackgroundColor.call(this);
    Screen.render();
  }

  down() {
    this.resetBackgroundColor.call(this);
    if(this.row < this.numRows-1) {
      this.row += 1;
    }
    this.setBackgroundColor.call(this);
    Screen.render();
  }

  left() {
    this.resetBackgroundColor.call(this);
    if(this.col > 0) {
      this.col -= 1;
    }
    this.setBackgroundColor.call(this);
    Screen.render();
  }

  right() {
    this.resetBackgroundColor.call(this);
    if(this.col < this.numCols-1) {
      this.col += 1;
    }
    this.setBackgroundColor.call(this);
    Screen.render();
  }

  select() {
    this.resetBackgroundColor.call(this);
    this.selectedRow = this.row;
    this.selectedCol = this.col;
    this.cursorColor = 'white';
    this.setBackgroundColor.call(this);
    Screen.render();
  }

  swap() {
      let jewelAtSelected = Screen.grid[this.selectedRow][this.selectedCol];
      let jewelAtCurrent = Screen.grid[this.row][this.col];

      Screen.setGrid(this.selectedRow,this.selectedCol,jewelAtCurrent);
      Screen.setGrid(this.row,this.col,jewelAtSelected);

      this.cursorColor = 'yellow';
      this.setBackgroundColor.call(this);
      this.selectedRow = null;
      this.selectedCol = null;
      Screen.render();
    }

}


module.exports = Cursor;
