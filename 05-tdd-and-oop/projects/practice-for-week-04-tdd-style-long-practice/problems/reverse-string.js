module.exports = function reverseString(string) {

  if(typeof(string) != 'string') {
    throw new TypeError("only strings allowed");
  }

  let reversed = "";
  for(let i = 0; i < string.length; i++){
    reversed = string[i] + reversed;
  }
  return reversed;
};
