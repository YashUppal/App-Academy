const Employee = require('./employee.js');

module.exports = class Manager extends Employee {
    constructor(name, salary, title, manager, employees=[]) {
        super(name, salary, title, manager);
        this.employees = employees;
    }

    addEmployee(employee) {
        if(employee instanceof Employee) {
            this.employees.push(employee);
        }
    }

    _totalSubSalary() {
        let sum = 0;

        this.employees.forEach((employee) => {
            if(employee instanceof Manager) {
                sum += employee.salary + employee._totalSubSalary();
            } else {
                sum += employee.salary;
            }
        })
        return sum;
    }

    calculateBonus(multiplier) {
        return (this.salary + this._totalSubSalary()) * multiplier;
    }
}
