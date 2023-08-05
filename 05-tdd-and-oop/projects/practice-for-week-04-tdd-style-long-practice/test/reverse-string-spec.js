const chai = require('chai');
const expect = chai.expect;
const reverseString =require('../problems/reverse-string');

describe("reverse",function() {
    it("should reverse a string", function() {
        let string = "fun";
        let reversed = reverseString(string);
        expect(reversed).to.be.equal("nuf");
    });

    it("should throw an error on bad input",function() {
        let input = 33;
        expect(()=>{reverseString(input)}).to.throw(TypeError);
    })


})
