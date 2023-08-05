const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const myMap = require('../problems/my-map');

describe("myMap",function() {
    let arr1 = [1, 2, 3, 4];
    let arr2 = ['a','b','c','d'];

    let cb1 = num => num * 2;
    let cb2 = char => char.toUpperCase();

    it("should not mutate the original array",function() {

        expect(myMap(arr1,cb1)).to.eql([2,4,6,8]);
        expect(arr1).to.eql([1,2,3,4]);

        expect(myMap(arr2,cb2)).to.eql(['A','B','C','D']);
        expect(arr2).to.eql(['a','b','c','d']);

    })

    it("should not use built in Array#Map method",function() {
       const mapSpy = chai.spy.on(Array.prototype,'map');
       myMap(arr1,cb1);
       expect(mapSpy).to.have.not.been.called();
    })

    it("should call the callback on each element and return new array",function() {

        function cb() {
            return undefined;
        }

        const callbackSpy = chai.spy();

        chai.spy.on(global,"myMap",() => {
            expect(callbackSpy).to.have.been.called();
        })
        expect(myMap(arr1,cb1)).to.eql([2, 4, 6, 8]);
        expect(myMap(arr2,cb2)).to.eql(['A','B','C','D']);
    })


})
