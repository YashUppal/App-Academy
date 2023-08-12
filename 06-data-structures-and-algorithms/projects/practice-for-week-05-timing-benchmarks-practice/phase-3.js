const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  let arr = [];
  let start = increment;
  for(let i = 0; i < 10; i++){

    console.time("addNums");
    let result = addNums(start);
    console.timeEnd("addNums");

    arr.push(result);
    start = start + increment;
  }

  return arr;
}


function addManyNums10Timing(increment) {
  let arr = []
  let start = increment;

  for(let i = 0; i < 10; i++) {

    console.time("addManyNums");
    let result = addManyNums(start);
    console.timeEnd("addManyNums");

    arr.push(result);

    start = start + increment;
  }

  return arr;
}


n = 1000000
console.log(`addNums(${n}): `);

let startAddNums10Timing = Date.now();
addNums10Timing(1000000);
let endAddNums10Timing = Date.now();

console.log(`addNums10Timing benchmark: ${endAddNums10Timing - startAddNums10Timing}`);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);

let startAddManyNums10Timing = Date.now();
addManyNums10Timing(5000);
let endAddManyNums10Timing = Date.now();

console.log(`addmanyNums10Timings benchmark: ${endAddManyNums10Timing - startAddManyNums10Timing}`);
