/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here

const helper = (num, arr) => {
  // (1, [0,2]) => [[1,0,2],[0,1,2],[0,2,1]]

  // arr = JSON.parse(JSON.stringify(arr));


  let mapped = [];

  for(let i = 0; i < arr.length; i++){
    let subArr= arr[i];

    for(let j = 0; j <= subArr.length; j++){
      let newArr = [...subArr.slice(0,j), num, ...subArr.slice(j,subArr.length)];
      mapped.push(newArr);
    }
  }

  return mapped;
}

const permutations = (arr) => {

  if(arr.length === 1) {
    return [arr];
  }

  let first = arr[0];
  let rest = arr.slice(1);

  let result = permutations(rest);

  return helper(first,result);

}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
