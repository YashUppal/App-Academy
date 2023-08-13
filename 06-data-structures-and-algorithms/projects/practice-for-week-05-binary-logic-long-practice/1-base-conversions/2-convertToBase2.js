// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = element => {
  if(typeof(element) == 'number') {
    let bin = "";
    while(element > 1) {
      let remainder = element % 2;
      element = Math.floor(element / 2);
      bin = bin + remainder;

      if(element === 1) {
        bin = bin + element;
      }
    }
    return "0b" + bin.split("").reverse().join("");
  } else {
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

    let bin = "";
    for(let i = 2; i < element.length; i++){
      bin += HEX_MAP[element[i]];
    }
    return "0b" + bin.slice(bin.indexOf("1"),bin.length);

  }
};

/******************************************************************************/

console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log('––––––');

console.log(convertToBase2('0xf')); // 0b1111
console.log(convertToBase2('0xfa')); // 0b11111010
console.log(convertToBase2('0x1234')); // 0b1001000110100
console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
console.log(convertToBase2('0xbf12')); // 0b1011111100010010
