const chai = require('chai');
const expect = chai.expect;
const {Triangle,Scalene,Isosceles} = require('../problems/triangle');

describe("Triangle",function() {
    context("Triangle Class",function() {
        it("initialises instances properly", function() {
            let triangle = new Triangle(1,1,1);
            expect(triangle).to.have.property("side1");
            expect(triangle).to.have.property("side2");
            expect(triangle).to.have.property("side3");

            expect(triangle.side1).to.be.equal(1);
            expect(triangle.side2).to.be.equal(1);
            expect(triangle.side3).to.be.equal(1);
        })

        it("getPerimeter() returns perimeter",function() {
            let t = new Triangle(1,1,1);
            expect(t.getPerimeter()).to.be.eql(3);
        })

        it("hasValidSideLengths() returns if triangle is valid",function() {
            let invalidT = new Triangle(1,1,3);
            expect(invalidT.hasValidSideLengths()).to.be.eql(false);
        })

        it("validates the triangle",function() {
            let t = new Triangle(1,1,1);
            expect(t).to.not.have.property("isValid");
            t.validate();
            expect(t).to.have.property("isValid");
            expect(t.isValid).to.be.eql(true);
        })

        it("returns all valid instances of triangles",function() {
            let t1 = new Triangle(1,1,1);
            let t2 = new Triangle(1,2,3);
            let t3 = new Triangle(2,2,1);
            let t4 = new Triangle(1,1,100);

            expect(Triangle.getValidTriangles(t1,t2,t3,t4)).to.eql([t1,t3]);
        })
    })

    context("Scalene Class",function() {
        it("should inherit from Triangle class",function() {
            let t1 = new Scalene(2,4,5);
            expect(t1).to.be.an.instanceof(Triangle);
        })

        it("should be initialised with three side lengths",function() {
            let s = new Scalene(2,4,5);
            expect(s).to.have.property("side1");
            expect(s).to.have.property("side2");
            expect(s).to.have.property("side3");
            expect(s.side1).to.be.eql(2);
            expect(s.side2).to.be.eql(4);
            expect(s.side3).to.be.eql(5);
        })

        it("should have isValid property",function() {
            let s = new Scalene(2,4,5);
            expect(s).to.have.property("isValidTriangle");
            expect(s.isValidTriangle).to.eql(true);
        })

        it("should tell if its a valid scalene triangle",function() {
            let s = new Scalene(2,4,5);
            let invalid = new Scalene(2,4,2);
            expect(s.isScalene()).to.be.eql(true);
            expect(invalid.isScalene()).to.be.eql(false);
        })

        it("should validate",function() {
            let s = new Scalene(2,4,5);
            expect(s).to.not.have.property("isValidScalene");
            s.validate();
            expect(s).to.have.property("isValidScalene");
            expect(s.isValidScalene).to.be.true;
        })
    })

    context("Isosceles Class",function() {
        it("should validate",function() {
            let i = new Isosceles(2,2,3);

            expect(i).to.not.have.property("isValidIsosceles");
            i.validate();
            expect(i).to.have.property("isValidIsosceles");
            expect(i.isValidIsosceles).to.be.eql(true);
        })
    })
})
