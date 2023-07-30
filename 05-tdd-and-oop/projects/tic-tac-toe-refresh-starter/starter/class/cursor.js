const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

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

  }

  down() {

    this.resetBackgroundColor.call(this);

    if(this.row < this.numRows-1) {
      this.row += 1;
    }

    this.setBackgroundColor.call(this);

  }

  left() {

    this.resetBackgroundColor.call(this);

    if(this.col > 0) {
      this.col -= 1;
    }

    this.setBackgroundColor.call(this);

  }

  right() {

    this.resetBackgroundColor.call(this);

    if(this.col < this.numCols-1) {
      this.col += 1;
    }

    this.setBackgroundColor.call(this);
  }



}


module.exports = Cursor;
