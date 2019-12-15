class Department {
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];
    static fiscalYear = 2020;

    constructor(private readonly id: string, public name: string) {
        // this.id = id;
        // this.name = n;
    }

    static createEmployee(name: string) {
        return {name: name}
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`)
    }

    addEmployee(employee: string) {
        // this.id = 'd2';
        this.employees.push(employee)
    }

    printEmployee() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    private lastReport: string;
    private static instance: ITDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.')
    }

    set mostRecentReport(value: string) {
        this.addReport(value)
    }

    private constructor (id: string, name: string, private reports: string[]) { // SINGLETON
        super(id, name);
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ITDepartment('d1', 'IT', []);
        return this.instance;
    }

    addEmployee(employee: string) {
        if (employee === 'Max') {
            return
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports)
    }
}

const it = ITDepartment.getInstance();

const employee1 = Department.createEmployee('Bart');
console.log(employee1, Department.fiscalYear);

it.addEmployee('Bart');
it.addEmployee('Agnes');

it.mostRecentReport = 'Test';
console.log(it.mostRecentReport);

// accounting.employees[2] = 'Anna';

it.describe();

it.printEmployee();

// const accountingCopy = { name: 'Test', describe: accounting.describe };

// accountingCopy.describe(); // Undefined if no name beyond 