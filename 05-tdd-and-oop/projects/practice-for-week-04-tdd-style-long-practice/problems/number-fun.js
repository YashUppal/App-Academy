function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if(n >= 1 && n <= 1000000)
    return 1/n;

  throw new TypeError("Enter a number between 1 and 1000000");
}

module.exports = {
  returnsThree,
  reciprocal
};
