
const TTT = require('./ttt');

class ComputerPlayer {

  static getValidMoves(grid) {
    let validMoves = [];

    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid.length; j++){
        let move = grid[i][j];
        if(move === ' ') {
          validMoves.push({row:i,col:j});
        }
      }
    }
    return validMoves;
  }

  static randomMove(grid) {
    let validMoves = ComputerPlayer.getValidMoves(grid);
    return validMoves[Math.floor((Math.random() * validMoves.length))];
  }

  static getWinningMoves(grid, symbol) {
    let opponentsSmartMoves = ComputerPlayer.getSmartMove(grid,"O");
    return opponentsSmartMoves;
  }


  static getSmartMove(grid, symbol) {

    let validMoves = ComputerPlayer.getValidMoves(grid);
    let move;
    for(let i = 0; i < validMoves.length; i++){
      // attempt the move
      move = validMoves[i];

      grid[move.row][move.col] = symbol;

      let win = TTT.TTT.checkWin(grid);

      grid[move.row][move.col] = " ";

      if(win === symbol) {
        return move;
      }
    }

    let corners = [
      {row:0, col:0},
      {row:0, col:2},
      {row:2, col:0},
      {row:2, col:2},
    ]


    for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++){
        if(grid[i][j] === " ") {
          grid[i][j] = "O";
          let oppsWin = TTT.TTT.checkWin(grid);
          grid[i][j] = " ";

          if(oppsWin) {
            move = {row:i, col:j};
          }
        }
      }
    }

    return move;
    // return ComputerPlayer.getWinningMoves(grid);

  }

}

module.exports = ComputerPlayer;
