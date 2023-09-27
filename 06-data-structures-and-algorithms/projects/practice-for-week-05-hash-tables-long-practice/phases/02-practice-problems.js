function anagrams(str1, str2) {
  let str1Set = new Set(str1.split(""));
  let str2Set = new Set(str2.split(""));

  return (str1Set.size === str2Set.size) && ([...str1Set].every(char => str2Set.has(char)));
}


function commonElements(arr1, arr2) {
  let arr1Set = new Set(arr1);
  let arr2Set = new Set(arr2);
  let common = [];

  for(let num of arr1Set) {
    if(arr2Set.has(num))
      common.push(num);
  }

  return common;
}


function duplicate(arr) {
  let arrSet = new Set();

  for(let i = 0; i < arr.length; i++){
    if(arrSet.has(arr[i])) {
      return arr[i];
    } else {
      arrSet.add(arr[i]);
    }
  }
}


function twoSum(nums, target) {
  let numsSet = new Set(nums);
  let targetCopy = target;

  for(let i = 0; i < nums.length; i++) {
    let subtracted = targetCopy - nums[i];
    numsSet.delete(nums[i]);
    if(numsSet.has(subtracted)) {
      return true;
    } else {
      numsSet.add(nums[i]);
      subtracted = targetCopy;
    }
  }
  return false;
}


function wordPattern(pattern, strings) {
  let map = {};

  let patternSet = Array.from(new Set(pattern.split(""))).join("");
  let stringsSet = Array.from(new Set(strings));

  if(patternSet.length !== stringsSet.length) {
    return false;
  }

  for(let i = 0; i < pattern.length; i++){
    let mapping = map[stringsSet[i]];
    if(mapping && mapping !== pattern[i]) {
      return false;
    }
  }
  return true;
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
