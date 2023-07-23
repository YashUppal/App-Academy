module.exports = class Employee {

    constructor(name, salary, title, manager=null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;

        if(this.manager) {
            this.addToManagersList();
        }
    }

    addToManagersList() {
        this.manager.addEmployee(this);
    }

    calculateBonus(multiplier) {
        return this.salary * multiplier;
    }

}
