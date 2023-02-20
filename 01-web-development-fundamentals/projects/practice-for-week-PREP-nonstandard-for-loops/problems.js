function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    oddIndicesArray = [];
    for(let i = 1; i < arr.length; i+=2){
        oddIndicesArray.push(arr[i]);
    }
    return oddIndicesArray;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    oddReverseArray = [];
    for(let i = arr.length-1; i >= 0; i--){
        if(i % 2 === 0){
            // Do nothing
        } else {
            oddReverseArray.push(arr[i]);
        }
    }
    return oddReverseArray;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here

    function powerOfTwo(n){
        if(n < 1 ) {
            // console.log(false);
            return false;
        }

        let divided = n / 2;

        if(n === 1){
            return true;
            // console.log(true);
        }else {
            return powerOfTwo(divided);
        }
    }

    let powersIndices = [];

    for(let i = 0; i < arr.length; i++){
        if(powerOfTwo(i)) {
            powersIndices.push(arr[i]);
        }
    }

    return powersIndices;

}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here

    function powerOfN(num,n){
        let divided = num / n;

        if(num < 1) {
            return false;
        }

        if(num === 1){
            return true;
        } else {
            return powerOfN(divided, n);
        }
    }

    let powers = [];

    for(let i = 0 ; i < arr.length; i++){
        if(powerOfN(i,n)) {
            powers.push(arr[i]);
        }
    }

    return powers;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here

    let half = [];

    for(let i = 0 ; i < arr.length/2; i++){
        half.push(arr[i]);
    }

    return half;

}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here

    let half = [];

    for(let i = Math.ceil(arr.length / 2); i < arr.length ; i++){
        half.push(arr[i]);
    }

    return half;

}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
