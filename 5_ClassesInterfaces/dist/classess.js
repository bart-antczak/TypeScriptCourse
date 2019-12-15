"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployee() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, name, reports) {
        super(id, name);
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }
    set mostRecentReport(value) {
        this.addReport(value);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ITDepartment('d1', 'IT', []);
        return this.instance;
    }
    addEmployee(employee) {
        if (employee === 'Max') {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const it = ITDepartment.getInstance();
const employee1 = Department.createEmployee('Bart');
console.log(employee1, Department.fiscalYear);
it.addEmployee('Bart');
it.addEmployee('Agnes');
it.mostRecentReport = 'Test';
console.log(it.mostRecentReport);
it.describe();
it.printEmployee();
//# sourceMappingURL=classess.js.map