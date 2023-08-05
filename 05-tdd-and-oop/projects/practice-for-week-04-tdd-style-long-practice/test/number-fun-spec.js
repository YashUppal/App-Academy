const chai = require('chai');
const expect = chai.expect;
const { returnsThree, reciprocal } = require('../problems/number-fun');

describe("returnsThree",() => {
    it("should return 3",() => {
        expect(returnsThree()).to.equal(3);
    })
})

describe("reciprocal",() => {

    context("valid arguments", () => {
        it("should return reciprocal of a number",() => {
            expect(reciprocal(1)).to.equal(1);
            expect(reciprocal(2)).to.equal(0.5);
            expect(reciprocal(100)).to.equal(0.01);
        })
    })

    context("invalid arguments",() => {
        it("should should throw a TypeError for values > 1000000",()=>{
            expect(()=>{reciprocal(1000001)}).to.throw(TypeError);
        })

        it("should throw TypeError for values less than 1",() => {
            expect(()=>{reciprocal(-100)}).to.throw(TypeError);
        })
    })

})
