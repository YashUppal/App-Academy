// Your code here

class Person {

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  static introducePeople(people) {
    if(!(people instanceof Array)) {
      throw new Error("introducePeople only takes an array as an argument.");
    }

    const onlyPerson = people.every(ele => ele instanceof Person);

    if(!onlyPerson) {
      throw new Error(`All items in array must be Person class instances.`);
    }

    people.forEach((person) => {
      person.introduce();
    })
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
