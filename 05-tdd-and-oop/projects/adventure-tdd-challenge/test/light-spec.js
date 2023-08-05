const chai = require('chai');
const expect = chai.expect;
const {Light} = require('../class/light');
const {Item} = require('../class/item');

describe("Light ",function(){
    it("is an instance of item",function() {
        let light = new Light("light","Illuminates the room");
        expect(light).to.be.instanceof(Item);
    })
})
