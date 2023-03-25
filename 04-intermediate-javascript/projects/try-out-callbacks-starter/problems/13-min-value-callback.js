/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValueCallback = function(arr,cb) {

    let smallestVal = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallestVal) {
            smallestVal = arr[i];
        }
    }

    if(cb === undefined) {
        return smallestVal;
    } else {
        return cb(smallestVal);
    }

};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
