const Employee = require('./employee');

let jwick = new Employee("John Wick","Dog Lover");

setTimeout(jwick.sayName.bind(jwick),2000);

setTimeout(jwick.sayOccupation.bind(jwick),3000);
