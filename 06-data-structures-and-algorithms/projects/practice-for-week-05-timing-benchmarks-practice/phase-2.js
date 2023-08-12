const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let arr = [];
  let start = increment;
  for(let i = 0; i < 10; i++){
    arr.push(addNums(start));
    start = start + increment;
  }

  return arr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  let arr = []
  let start = increment;

  for(let i = 0; i < 10; i++) {
    arr.push(addManyNums(start));

    start = start + increment;
  }

  return arr;
}

module.exports = [addNums10, addManyNums10];
