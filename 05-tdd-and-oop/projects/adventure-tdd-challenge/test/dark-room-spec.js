const chai = require('chai');
const expect = chai.expect;
const DarkRoom = require('../class/dark-room');
const {Room} = require("../class/room");
const {Player} = require("../class/player");
const {Light} = require('../class/light');
const {Item} = require('../class/item');

describe("DarkRoom",function() {
    context("inherited from room",function(){
        it("should be an instance of room",function(){
            let droom = new DarkRoom("The Dark Room","You cannot see anything");
            expect(droom).to.be.an.instanceof(Room);
        })
    })

    context("functionality",function(){
        it("should show darkness description if no light",function() {
            let droom = new DarkRoom("The Dark Room","You cannot see anything");
            let player = new Player("test",droom);
            player.items = [];
            expect(droom.description).to.include('You cannot see anything');
        })
        it("should show something else if player has light",function() {
            let droom = new DarkRoom("The Dark Room","You cannot see anything");
            let player = new Player("test",droom);
            let light = new Light("light","Illuminates the room");
            player.items.push(light);
            player.dropItem("light");
            expect(droom.description).to.include('You lit up the room!!');
        })
    })
})
