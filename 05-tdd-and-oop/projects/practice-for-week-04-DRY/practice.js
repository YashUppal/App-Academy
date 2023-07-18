const findBiggerValue = (...nums) => {
  let biggerNum = nums[0];

  nums.forEach((num) => {
    if(num > biggerNum) {
      biggerNum = num;
    }
  })

  return biggerNum;

}

function multiplyBiggerNumByTwo(num1, num2) {

  return findBiggerValue(num1, num2) * 2;

}

function divideBiggerNumByThree(num1, num2) {

  return findBiggerValue(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {

  return `I ate ${findBiggerValue(sum1, sum2)} tacos.`;

}

function adoptSmallerDog(weight1, weight2) {

  let smallerValue = weight1;
  if(findBiggerValue(weight1, weight2) === weight1) {
    smallerValue = weight2;
  }

  return `I adopted a dog that weighs ${smallerValue} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};
