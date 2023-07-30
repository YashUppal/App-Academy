function bindToAnArg(func, arg) {
  return func.bind(this,arg);
}

function add(num1, num2) {
  return num1 + num2;
}

function iSpy(thing) {
  return "I spy a " + thing;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
