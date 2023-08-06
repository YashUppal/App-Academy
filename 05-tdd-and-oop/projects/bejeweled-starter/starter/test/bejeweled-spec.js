const { expect } = require('chai');

const Bejeweled = require("../class/bejeweled.js");

describe ('Bejeweled', function () {

  // Add tests for setting up a basic board

  it("sets up a basic board",function() {
    // let board = new Bejeweled();
    // expect(board.grid.length()).to.be.eql(4);

  })

  // Add tests for a valid swap that matches 3

  it("checks for valid swap that matches 3",function() {
    // let grid = [
    // ["🥝", "🍓", "🥥", "🍇", "🍊", "🍇", "🥝", "🍇" ],
    // ["🥝", "🥝", "🥝", "🥥", "🍓", "🥥", "🍓", "🍇" ],
    // ["🍓", "🥥", "🍓", "🥑", "🥑", "🍎", "🍎", "🥝" ],
    // ];

    let grid = [
      ["🥝", "🍓", "🥥", "🍇",],
      ["🍊", "🍇", "🍊", "🍇" ],
      ["🍊", "🥝", "🥝", "🍇" ],
      ["🥝", "🍇", "🍊", "🍇" ],
    ];

    let matchIndices = [{row:3, col:3}, {row:2, col:3}, {row:1, col:3},];

    expect(Bejeweled.checkForMatches(grid)).to.be.eql(matchIndices);

    let gridHorizontalMatch = [
      ["🥝", "🍓", "🥥", "🍇",],
      ["🍊", "🍇", "🍇", "🍇" ],
      ["🍊", "🥝", "🍊", "🥝" ],
      ["🥝", "🍇", "🍊", "🍇" ],
    ];

    let matchIndicesHorizontal = [{row:1, col:1}, {row:1, col:2}, {row:1, col:3}];

    expect(Bejeweled.checkForMatches(gridHorizontalMatch)).to.be.eql(matchIndicesHorizontal);

  })

  // Add tests for swaps that set up combos

  it("tests for swaps that set up combos",function() {

    let grid = [
      ["🥝", "🍓", "🥥", "🥥",],
      ["🍊", "🍇", "🍊", "🍇" ],
      ["🍊", "🥝", "🥝", "🍇" ],
      ["🍇", "🍇", "🍇", "🥝" ],
    ];

    let comboMatches = [
      {row:3, col:0}, {row:3, col:1}, {row:3, col:2},
      {row:3, col:1}, {row:3, col:2}, {row:3, col:3},
    ];

    expect(Bejeweled.checkForMatches(grid)).to.be.eql(comboMatches);

  })

  // Add tests to check if there are no possible valid moves
  it("tests if there are no more matches",function() {
    let grid = [
      ["🥝", "🍓", "🥥", "🥥",],
      ["🍊", "🍇", "🥥", "🍊" ],
      ["🍊", "🥝", "🥝", "🍇" ],
      ["🥥", "🍊", "🍇", "🥥" ],
    ];

    expect(Bejeweled.checkForMatches(grid)).to.be.eql([]);

  })

});
