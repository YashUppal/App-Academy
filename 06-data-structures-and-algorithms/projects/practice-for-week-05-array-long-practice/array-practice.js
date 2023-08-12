const findMinimum = arr => {

  let min = arr[0];

  for(let i = 0; i < arr.length; i++){
    // O(n)
    if(arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
};

const runningSum = arr => {
  let runner = 0;
  // O(n)
  return arr.map((ele) => {
    return runner = runner + ele;
  })
};

const evenNumOfChars = arr => {
  // O(n)
  return arr.reduce((acc,curr) => {
    return acc = curr.length % 2 === 0 ? acc += 1 : acc ;
  },0)
};

const smallerThanCurr = arr => {
  let smallerNums = [];
  // O(n^2)
  for(let i = 0; i < arr.length; i++){
    let count = 0;
    for(let j = 0; j < arr.length; j++){
      if(arr[j] < arr[i]) {
        count++;
      }
    }
    smallerNums.push(count);
  }
  return smallerNums;

};

const twoSum = (arr, target) => {
  // O(n^2)

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      if(arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
};

const secondLargest = arr => {
  return arr.sort((a,b) => a - b)[arr.length-2];
};

const shuffle = (arr) => {

  let shuffled = [];
  // O(n)
  while(shuffled.length < arr.length) {

    let randomIdx = Math.floor(Math.random() * arr.length);
    if(!(shuffled.includes(arr[randomIdx]))) {
      shuffled.push(arr[randomIdx]);
    }
  }
  return shuffled;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
