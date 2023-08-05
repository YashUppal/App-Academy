class Person {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `${this.name} says hello`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this)
  }

  update(otherPerson) {
    if(otherPerson instanceof Person) {

      if(!otherPerson.name || !otherPerson.age) {
        throw new TypeError("properties not found")
      }
      this.name = otherPerson.name;
      this.age = otherPerson.age;
    } else {
      throw new TypeError("object type invalid");
    }
  }

  tryUpdate(obj) {

    try {
      this.update(obj);
      return true;
    } catch(err) {
      if(err instanceof TypeError) {
        return false;
      }
    }
  }

  static greetAll(arr) {
    let greetingsArr = [];

    arr.forEach((person) => {
      greetingsArr.push(person.sayHello());
    })
    return greetingsArr;
  }

}

module.exports = Person;
