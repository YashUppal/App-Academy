const chai = require('chai');
const expect = chai.expect;
const Person = require('../problems/person');

describe("Person Class",function() {

    let name = 'John';
    let age = 25;
    let p1 = new Person(name,age);
    let p2 = new Person("Jane",24);
    let greeting = `${name} says hello`;

    context("constructor",function() {
        it("sets right property on instance",function() {
            expect(p1).to.have.property('name');
            expect(p1).to.have.property('age');
            expect(p1.name).to.eql('John');
            expect(p1.age).to.eql(25);

        })
    })

    context("sayHello()",function() {
        it("returns a greeting with name", function() {
            expect(p1.sayHello()).to.be.eql(greeting);
        })
    })

    context("visit",function() {
        it("should return a string that tells instance visited another instance",function() {
            let string = "John visited Jane";
            expect(p1.visit(p2)).to.eql(string);
        })
    })

    context("switchVisit",function() {
        it("should call visit() of passed in instance",function() {
            let string = "Jane visited John";
            expect(p1.switchVisit(p2)).to.eql(string);
        })
    })

    context("update - valid object",function() {
        it("should update properties",function() {
            p1.update(p2);
            expect(p1.name).to.eql("Jane");
            expect(p1.age).to.eql(24);
        })

        it("should throw error if incoming object doesnt have name and age propertie",function() {
            let noPropObj = {};
            expect(()=>{p1.update(noPropObj)}).to.throw(TypeError);
        })
    })

    context("update - invalid object",function() {
        it("should throw TypeError if object is invalid",function() {
            expect(()=>{p1.update(3)}).to.throw(TypeError);
        })
    })

    context("tryUpdate - true",function() {
        it('should return true if update was successful',function() {

            let p1 = new Person(name,age);
            let p2 = new Person("Jane",24);

            expect(p1.tryUpdate(p2)).to.be.eql(true);
            expect(p1.name).to.be.eql("Jane");
            expect(p1.age).to.be.eql(24);

        })

        it('should return false if update failed',function() {

            let badObj = 3;

            expect(p1.tryUpdate(badObj)).to.be.eql(false);

        })
    })

    context("greetAll static method",function() {
        it("should return an array of greetings",function() {
            let p1 = new Person("John",25);
            let p2 = new Person("Jack",25);
            let p3 = new Person("Jane",25);
            let p4 = new Person("Joe",25);
            let greetingsArr = [
                "John says hello",
                "Jack says hello",
                "Jane says hello",
                "Joe says hello",
            ]
            expect(Person.greetAll([p1,p2,p3,p4])).to.be.eql(greetingsArr);
        })
    })

})
