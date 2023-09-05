// Time Complexity - O(n)
// Space Complexity - O(n)
const logBetween = (lowNum, highNum) => {
    let range = [];

    if(lowNum < highNum) {
        for(let i = lowNum; i <= highNum; i++){
            range.push(i);
        }
    }
    return range;
}

// Time Complexity - O(n)
// Space Complexity - O(n)
const logBetweenStepper = (min, max, step) => {
    let range = [];

    if(min < max) {
        for(let i = min; i <= max; i = i + step) {
            range.push(i);
        }
    }

    return range;
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function printReverse(min, max) {
    let arr = [];

    if(max > min) {
        for(let i = max-1; i > min; i--) {
            arr.push(i);
        }
    }

    return arr;
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function fizzBuzz(max) {
    let fizzBuzzArr = [];

    for(let i = 0; i < max; i++){
        if((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
            fizzBuzzArr.push(i);
        }
    }

    console.log(fizzBuzzArr);
}

// Time Complexity - O(n)
// Time Complexity - O(n)
function isPrime(number) {
    for(let i = 2; i < number; i++){
        if(number % i === 0) {
            return false;
        }
    }
    return true;
}


// Time Complexity - O(n)
// Space Complexity - O(n)
function maxValue(array) {
    if(!array.length) return null;

    return array.reduce((accum,current) => {
        if(current > accum) {
            return current
        } else {
            return accum;
        }
    },array[0])
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function myIndexOf(array, target) {
    let index = -1;

    for(let i = 0; i < array.length; i++){
        if(array[i] === target) {
            index = i;
        }
    }

    return index;
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function factorArray(array, number) {
    let factors = [];

    for(let i = 0; i < array.length; i++) {
        if(number % array[i] === 0) {
            factors.push(array[i]);
        }
    }

    return factors;
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function oddRange(end) {
    let oddNums = [];

    for(let i = 1; i <= end; i++){
        if(i % 2 !== 0) oddNums.push(i);
    }
    return oddNums;
}

// Time Complexity - O(n) + O(n) + O(n)
// Space Complexity - O(n)
function reverseHyphenString(string) {
    return string.split("-").reverse().join("-");
}

// Time Complexity - O(n2)
// Space Complexity - O(n)
function intersect(arr1, arr2) {
    return arr1.filter(ele => arr2.includes(ele));
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function mirrorArray(array) {
    let reversed = array.reverse();
    return array.concat(reversed);
}

// Time Complexity - O(n) + O(n) + O(n) + O(n)
// Space Complexity = O(n)
function abbreviate(sentence) {
    return sentence.split(" ").map((word) => {
        if(word.length > 4) {
            return _abbreviater(word);
        }
        return word;
    }).join(" ");

}

function _abbreviater(word) {
    const VOWELS = "aeiou";
    let abbreviated = "";

    for(let i = 0; i < word.length; i++){
        if(!VOWELS.includes(word[i])) {
            abbreviated += word[i];
        }
    }
    return abbreviated;
}


// Time Complexity - O(n)
// Space Complexity - O(n)
function adults(people) {
    return people.reduce((accumulator,current) => {
        if(current.age >= 18) {
            accumulator.push(current.name);
        }
        return accumulator;
    },[])
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function countScores(people) {
        return people.reduce((accumulator, current) => {
        accumulator[current.name] = accumulator[current.name] || 0;
        accumulator[current.name] += current.score;
        return accumulator;
    },{})
}

// Time Complexity = O(n2)
// Space Complexity - O(n)
function firstNPrimes(n) {
    let primes = [];
    let number = 2;

    while(primes.length < n) {
        if(isPrime(number)) {
            primes.push(number);
        }
        number = number + 1;
    }
    return primes;
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function peakFinder(array) {
    let peaks = [];

    if(array[0] > array[1]) peaks.push(0)
    if(array[array.length-1] > array[array.length-2]) peaks.push(array.length-1)

    for(let i = 1; i < array.length-1; i++){
        const CURRENT = array[i];
        const PREV = array[i-1];
        const NEXT = array[i+1];

        if(CURRENT > PREV && CURRENT > NEXT) {
            peaks.push(i);
        }
    }

    return peaks;
}

// Time Complexity - O(n2)
// Space Complexity - O(n)
function divisibleByThreePairSum(array) {
    let pairs = [];

    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            let sum = array[i] + array[j];
            if(sum % 3 === 0) {
                pairs.push([i,j]);
            }
        }
    }
    return pairs;
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function zipArray(arr1, arr2) {
    let zipped = [];
    for(let i = 0; i < arr1.length; i++){
        zipped.push([arr1[i],arr2[i]]);
    }
    return zipped;
}

// Time Complexity - O(n2)
// Space Complexity - O(n)
function twoDimensionalTotal(array) {
    return array.reduce((accumulator,current) => {
        accumulator += current.reduce((a,c) => {
            a = a + c;
            return a
        })
        return accumulator;
    },0)
}

// Time Complexity - O(n) + O(n)
// Space Complexity - O(n)
function countInnerElement(arr) {
    let flatArray = arr.reduce((accum,curr) => {
        return accum.concat(curr);
    },[])

    return flatArray.reduce((accum,curr) => {
        accum[curr] = accum[curr] || 0;
        accum[curr] += 1;
        return accum
    },{})
}

// Time Complexity - O(n2)
// Space Complexity - O(n)
function twoDiff(array) {
    let pairs = [];

    for(let i = 0; i < array.length; i++) {
        for(let j = i; j < array.length; j++){
            if(Math.abs(array[j] - array[i]) === 2) {
                pairs.push([i,j]);
            }
        }
    }
    return pairs;
}

// Time Complexity - O(n2);
// Space Complexity - O(n)
function arrayDiff(arr1, arr2) {
    let diff = [];

    for(let i = 0; i < arr1.length; i++){
        if(!(arr2.includes(arr1[i]))) {
            diff.push(arr1[i])
        }
    }

    console.log(diff);
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function valueCounter(obj, val) {
    return Object.values(obj).filter(value => value === val).length;
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function elementCount(array) {
    return array.reduce((accumulator,current) => {
        accumulator[current] = accumulator[current] || 0;
        accumulator[current] += 1;
        return accumulator;
    },{})
}


// Time Complexity - O(n2)
// Space Complexity - O(n)
function nextTwoPrimes(num) {
    let nextTwo = [];
    let start = num+1;
    while(nextTwo.length < 2) {
        if(isPrime(start)){
            nextTwo.push(start);
        }
        start++;
    }
    console.log(nextTwo);
    return nextTwo;
}

// Time Complexity - O(n2)
// Space Complexity - O(n)
function pairProduct(arr, num) {
    let pairIndices = [];
    let i = 0;
    let j = 0;
    while(i < arr.length) {
        j = i;
        while(j < arr.length) {
            if(arr[i] * arr[j] === num) {
                pairIndices.push([i,j]);
            }
            j++;
        }
        i++;
    }
    return pairIndices;
}

// Time Complexity - O(n)
// Space Complexity - O(1)
function twoDimensionalSize(array) {
    return array.reduce((accum,curr) => {
        accum = accum + curr.length;
        return accum;
    },0)
}

// Time Complexity - O(n) + O(n)
// Space Complexity - O(1)
function longWordCount(string) {
    return string.split(" ").reduce((accumulator,current) => {
        if(current.length > 7) {
            accumulator = accumulator + 1;
        }
        return accumulator;
    },0)
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function factorial(n) {
    let fact = 1;

    for(let i = n; i > 0; i--){
        fact = fact * i;
    }

    return fact;
}

// Time Complexity - O(n)
// Space Complexity - O(1)
function lcm(num1, num2) {
    let i = 1;
    while(true) {
        if(i % num1 === 0 && i % num2 === 0) {
            return i;
        }
        i++;
    }
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function hipsterfyWord(word) {
    const VOWELS = "aeiouAEIOU";
    let lastVowelIndex;

    for(let i = word.length; i >= 0; i--){
        if(VOWELS.includes(word[i])) {
            lastVowelIndex = i;
            break;
        }
    }

    return word.slice(0,lastVowelIndex) + word.slice(lastVowelIndex+1);
}

// Time Complexity - O(n) + O(n) + O(n)
// Space Complexity - O(n)
function hipsterfy(sentence) {
    return sentence.split(" ").map(word => hipsterfyWord(word)).join(" ");
}

// Time Complexity - O(n2);
// Space Complexity - O(n)
function objectToString(count) {
    let string = "";

    Object.keys(count).forEach((key) => {
        for(let i = 0; i < count[key]; i++){
            string += key;
        }
    })

    return string;
}

// Time Complexity - O(n) + O(n)
// Space Complexity - O(1)
function shortestWord(sentence) {
    return sentence.split(" ").reduce((accumulator,current) => {
        if(current.length < accumulator.length) {
            accumulator = current;
        }
        return accumulator;
    })
}

// Time Complexity - O(n)
// Space Complexity - O(1)
function greatestCommonFactor(num1 ,num2) {
    let smaller = num1 < num2 ? num1 : num2;

    for(smaller; smaller > 0; smaller--) {
        if(num1 % smaller === 0 && num2 % smaller === 0) {
            return smaller;
        }
    }
}

// Time Complexity - O(n) + O(1) + O(1) = O(n)
// Space Complexity - O(1)
function isPassing(assessments) {
    return ((assessments.reduce((accum,curr) => {
        accum = accum + curr.score;
        return accum;
    },0)/assessments.length) >= 70)
}

// Time Complexity - O(n)
// Space Complexity -  O(n)
function valueConcat(array, obj) {
    return array.map((word) => {
        if(word in obj) {
            return word + obj[word];
        };
        return word;
    })
}

// Time Complexity - O(n)
// Space Complexity - O(1)
function threeInARow(arr) {
    for(let i = 0; i < arr.length-2; i++){
        if(arr[i] === arr[i+1] && arr[i + 1] === arr[i+2]) {
            return true;
        }
    }
    return false;
}


// Time Complexity - O(n)
// Space Complexity - O(n)
function variableNameify(words) {
    let mixedCase = "";

    mixedCase += words[0].toLowerCase();

    for(let i = 1; i < words.length; i++){
        mixedCase = mixedCase + words[i].charAt(0).toUpperCase() + words[i].slice(1,words[i].length).toLowerCase();
    }

    return mixedCase;
}

// Time Complexity - O(n)
// Space Complexity - O(1)
function threeIncreasing(arr) {
    for(let i = 0; i < arr.length-2; i++){
        if((arr[i+1] === arr[i]+1) && (arr[i+2] === arr[i]+2)) {
            return true;
        }
    }
    return false;
}

// Time Complexity - O(n) + O(n) + O(n)
// Space Complexity - O(n)
function reverse2D(array) {
    return array.reduce((acc,curr) => acc = [...acc, ...curr]).reverse().join("");
}


// Time Complexity - O(n)
// Space Complexity - O(n)
function reverb(word) {
    const VOWELS = "aeiou";
    let lastVowelIndex;

    for(let i = word.length; i >= 0; i--){
        if(VOWELS.includes(word[i])) {
            lastVowelIndex = i;
            return word + word.slice(lastVowelIndex);
        }
    }
    return word;
}

// Time Complexity - O(n) + O(n) + O(n)
// Space Complexity - O(1)
function countRepeats(string) {
    let map = {};

    for(let i = 0; i < string.length; i++){
        map[string[i]] = map[string[i]] || 0;
        map[string[i]] = map[string[i]] + 1;
    }

    return Object.values(map).reduce((acc,curr) => {
        if(curr > 1) {
            acc = acc + 1;
        }
        return acc;
    },0)
}

// Time Complexity - O(n2)
// Space Complexity - O(n)
function pairsToString(array) {
    let string = "";

    for(let i = 0; i < array.length; i++){
        let count = array[i][1];
        let char = array[i][0];

        for(let j = 0; j < count; j++){
            string += char;
        }
    }

    return string;
}

// Time Complexity - O(n)
// Space Complexity - O(1)
function countAdjacentSums(arr, n) {
    let count = 0;
    for(let i = 0; i < arr.length-1; i++){
        if((arr[i] + arr[i+1]) === n) {
            count++;
        }
    }
    console.log(count);
}

// Time Complexity - O(n)
// Space Complexity - O(1)
function signFlipCount(nums) {
    let flipCount = 0;

    for(let i = 0; i < nums.length-1; i++){
       if((nums[i] < 0 && nums[i+1] > 0) || (nums[i] > 0 && nums[i+1] < 0)) {
        flipCount++;
       }
    }

    console.log(flipCount);
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function powerSequence(base, length) {
    let sequence = [base];

    while(sequence.length < length) {
        sequence.push(sequence[sequence.length-1] * base);
    }

    return sequence;
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function collapseString(str) {
    let collapsed = "";

    for(let i = 0; i < str.length; i++){
        if(collapsed[collapsed.length-1] === str[i]) {
            continue;
        } else {
            collapsed += str[i];
        }
    }

    return collapsed;
}

// Time Complexity - O(n) + O(n) + O(n)
// Space Complexity - O(n)
function oddWordsOut(sentence) {
    return sentence.split(" ").filter(word => word.length % 2 === 0).join(" ");
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function mindPsAndQs(str) {
    let biggestStreak = 0;
    let currentStreak = 0;
    const PQ = "PQ";

    for(let i = 0; i < str.length; i++){
        if(PQ.includes(str[i])) {
            currentStreak++;
        } else {
            if(currentStreak > biggestStreak) {
                biggestStreak = currentStreak;
            }
            currentStreak = 0;
        }
    }

    if(currentStreak > biggestStreak) {
        biggestStreak = currentStreak;
    }

    return biggestStreak;
}

// Time Complexity - O(1) + O(n)
// Space Complexity - O(n)
function commonFactors(num1 ,num2) {

    let bigger = (num1 > num2) ? num1 : num2;
    let factors = [];

    for(let i = 1; i < bigger; i++){
        if(num1 % i === 0 && num2 % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

// Time Complexity - O(1) + O(n2)
// Space Complexity - O(n)
function commonPrimeFactors(num1 ,num2) {
    let primeFactors = [];
    let bigger = (num1 > num2) ? num1 : num2;

    for(let i = 2; i < bigger; i++) {
        if((num1 % i === 0 && num2 % i === 0) && isPrime(i)) {
            primeFactors.push(i);
        }
    }

    return primeFactors;
}

// Time Complexity - O(1) + O(n) + O(n)
// Space Complexity - O(n)
function splitHalfArray(array) {
    let middleIndex = Math.floor(0 + (array.length - 0)/2);

    if(array.length % 2 === 0) {
        return [array.slice(0,middleIndex), array.slice(middleIndex,array.length)];
    } else {
        return [array.slice(0,middleIndex), array.slice(middleIndex+1,array.length)];

    }
}

// Time Complexity - O(n)
// Space Complexity - O(1)
function threeUniqueVowels(string) {
    const VOWELS = ['a','e','i','o','u'];
    let uniqueVowels = "";

    for(let i = 0; i < string.length; i++){
        if(!uniqueVowels.includes(string[i]) && VOWELS.includes(string[i])) {
            uniqueVowels = uniqueVowels + string[i];
        }
    }
    return uniqueVowels.length > 2;
}

// Time Complexity - O(n)
// Space Complexity - O(n)
function vowelShift(sentence) {
    const VOWELS = ['a','e','i','o','u'];

    let shifted = "";

    for(let i = 0; i < sentence.length; i++){
        if(VOWELS.includes(sentence[i])) {
            let nextVowelIndex = (VOWELS.indexOf(sentence[i]) + 1) % VOWELS.length;
            shifted += VOWELS[nextVowelIndex];
        } else {
            shifted += sentence[i];
        }

    }
    return shifted;
}

// Time Complexity - O(n)
// Space Complexity - O(1)
function hasSymmetry(array) {
    for(let i = 0; i < array.length; i++){
        if(array[i] !== array[array.length-1-i]) {
            return false;
        }
    }
    return true;
}

// Time Complexity - O(n2)
// Space Complexity - O(n)
function evenSumArray(array) {
    let evenSums = [];
    for(let i = 0; i < array.length; i++){
        let currentNum = array[i];
        let evenSum = 0;

        for(let j = 0; j <= currentNum; j++){
            if(j % 2 === 0) {
                evenSum += j
            }
        }
        evenSums.push(evenSum);
    }
    return evenSums;
}

// Time Complexity - O(n)
// Space Complexity - O(1)
function numsToWords(numString) {
    const numToWordMap = {
        '1': 'One',
        '2': 'Two',
        '3': 'Three',
        '4': 'Four',
        '5': 'Five',
        '6': 'Six',
        '7': 'Seven',
        '8': 'Eight',
        '9': 'Nine',
        '0': 'Zero',
    }

    let numToWordString = "";

    for(let i = 0; i < numString.length; i++){
        numToWordString += numToWordMap[numString[i]];
    }

    return numToWordString;
}

// Time Complexity - O(n) + O(1)
// Space Complexity - O(1)
function moreDotLessDash(str) {
    let dotCount = 0;
    let dashCount = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] === "-") dashCount++;
        if(str[i] === ".") dotCount++;
    }

    return dotCount > dashCount;
}
