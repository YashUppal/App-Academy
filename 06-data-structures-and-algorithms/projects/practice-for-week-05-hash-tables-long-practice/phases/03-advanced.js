function kth(string,k) {
    let map = {};

    for(let i = 0; i < string.length; i++){
        map[string[i]] = map[string[i]] || 0;
        map[string[i]] += 1;
    }

    let sorted = Object.entries(map).sort((a,b) => b[1] - a[1]);

    return sorted[k-1][0];

}

// console.log(kth('aaabbc', 1));     //  => 'a'
// console.log(kth('aaabbc', 2));     //  => 'b'
// console.log(kth('aaabbc', 3));     //  => 'c'

function newAlphabet(str, alphabet){
    let map = {};

    for(let i = 0; i < alphabet.length; i++){
        map[alphabet[i]] = i;
    }

    for(let i = 0; i < str.length-1; i++){
        let currentChar = str[i];
        let nextChar = str[i+1];

        if(!(map[currentChar] <= map[nextChar])) {
            return false;
        }
    }

    return true;
}

// console.log(newAlphabet('dino', 'abcdefghijklmnopqrstuvwxyz'));           // => true
// console.log(newAlphabet('leetcode', 'abcdefghijklmnopqrstuvwxyz'));       // => false
// console.log(newAlphabet('leetcod', 'labefghijkmnpqrstucvowxdyz'));        // => true

function longestPalindrome(str) {
    let count = {};

    for(let i = 0; i < str.length; i++){
        count[str[i]] = count[str[i]] || 0;
        count[str[i]] = count[str[i]] + 1;
    }

    let countVals = Object.values(count);

    let evenValsCount = countVals.reduce((acc,curr) => {
        if(curr % 2 === 0) {
            acc = acc + curr;
        }
        return acc;
    },0);

    if(countVals.includes(1)) {
        return evenValsCount+1;
    }

    return evenValsCount;
}

// console.log(longestPalindrome("abccccdd"));     //  => 7 because the palindrome "dccaccd"
//                                       // can be built.

function longestSubstr(str) {
    let charSet = new Set();

    for(let i = 0; i < str.length; i++){
        if(charSet.has(str[i])) {
            return Array.from(charSet).join("");
        } else {
            charSet.add(str[i]);
        }
    }

    return charSet;

}

// console.log(longestSubstr("abcabcbb"));      // => 3, where the longest substring is "abc"
// console.log(longestSubstr("bbbbb"));         // => 1, where the longest substring is "b"

function maxSubarr(arr) {
    let max;
    let min;
    let set = new Set();

    let subarr = [];

    for(let i = 0; i < arr.length; i++){
        if(Math.abs(arr[i] - arr[i+1]) <= 1) {
            min = arr[i];
            max = arr[i+1];

            if(min > max) {
                let swap = max;
                max = min;
                min = swap;
            }
            set.add(max);
            set.add(min);
        }

        if(set.has(arr[i])) {
            subarr.push(arr[i]);
        }

    }

    return subarr.length;

}

// console.log(maxSubarr([1,3,2,2,5,2,3,7]));  // => 5 because the longest subarray is [3,2,2,2,3]
// console.log(maxSubarr([1,1,1,1,3]));// => 4 because the longest subarray is [1,1,1,1]

function coinChange(coins, amount) {

    if(amount === 0) {
        return 0;
    }

    let sorted = coins.sort((a,b) => b - a);
    let amountCopy = amount;
    let count = 0;

    for(let i = 0; i < sorted.length; i++){
        if(sorted[i] <= amountCopy) {
            amountCopy = amountCopy - sorted[i];
            count++;
        }
    }



    if(count === 0) {
        return -1;
    }

    if(amountCopy === 0) {
        return count;
    }

    if(count > 0) {
        return count + coinChange(sorted, amountCopy);
    }


}

// const coins = [1, 5, 10, 25];
// const coins2 = [5];

// console.log(coinChange(coins, 11));      // => 2, 10 + 1 = 11
// console.log(coinChange(coins2, 3));      // => -1
// console.log(coinChange(coins2, 0));      // => 0

function climbingSteps(n) {
    if(n === 0) {
        return 0;
    }

    if(n === 1) {
        return 1;
    }

    if(n === 2) {
        return 2;
    }

    if(n === 3) {
        return 4;
    }

    return climbingSteps(n-1) + climbingSteps(n-2);
}

console.log(climbingSteps(4));  // 6
