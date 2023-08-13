// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {

  const HEX_MAP = {
    '0':'0000',
    '1':'0001',
    '2':'0010',
    '3':'0011',
    '4':'0100',
    '5':'0101',
    '6':'0110',
    '7':'0111',
    '8':'1000',
    '9':'1001',
    'a':'1010',
    'b':'1011',
    'c':'1100',
    'd':'1101',
    'e':'1110',
    'f':'1111',
  }
  let binaries = str.slice(2,str.length);
  let toBin = "";
  if(str[1] === 'x') {
    for(let i = 0; i < binaries.length; i++){
      toBin += HEX_MAP[binaries[i]];
    }
    binaries = toBin;
  }


  binaries = binaries.split("").reverse().join("");
  let sum = 0;

  for(let i = 0; i < binaries.length; i++){
    sum = sum + Number(binaries[i] * Math.pow(2,i));
  }
  return sum;

};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
