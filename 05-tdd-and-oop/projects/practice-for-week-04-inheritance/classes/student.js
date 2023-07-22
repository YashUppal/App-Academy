const Person = require('./person');

// Your code here

class Student extends Person {
  constructor(firstName, lastName, major, GPA) {
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(student1, student2) {
    if(student1.GPA === student2.GPA) {
      return `Both students have the same GPA`
    }

    let biggerGPA;

    if(student1.GPA > student2.GPA) {
      biggerGPA = student1;
    } else {
      biggerGPA = student2;
    }

    return `${biggerGPA.firstName} ${biggerGPA.lastName} has the higher GPA.`

  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
