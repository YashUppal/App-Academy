function myMap(inputArray, callback) {
  let mapped = [];
  inputArray.forEach((ele) => {
    let newEle = callback(ele);
    mapped.push(newEle);
  })
  return mapped;
}

module.exports = myMap;
