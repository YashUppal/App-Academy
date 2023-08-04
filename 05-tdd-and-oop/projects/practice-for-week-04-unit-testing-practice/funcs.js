function isFive(num) {
  return num === 5;
}

function isOdd(number) {
  if(typeof(number) !== "number")
    throw new Error("Input should be of type number");
  return number % 2 !== 0
}

function myRange(min, max, step = 1) {
  let range = [];
  for(let i = min; i <= max; i += step) {
    range.push(i);
  }
  return range;
}


module.exports = { isFive, isOdd, myRange };
