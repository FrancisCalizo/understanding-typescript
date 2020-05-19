"use strict";
class Department {
    // Shorthand Initialization so we don't have to initialize above (name)
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
        // this.name = n;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    static createEmployee(name) {
        return { name };
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log(`IT Department - ID: ${this.id}`);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.reports = reports;
        this.lastReport = reports[0];
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        return new AccountingDepartment('a1', ['Acounting']);
    }
    describe() {
        console.log(`Accounting Department - ID: ${this.id}`);
    }
    get _lastReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found');
    }
    set _lastReport(value) {
        if (!value) {
            throw new Error('Please pass in a valid value');
        }
        this.addReport(value);
    }
    addEmployee(name) {
        if (name !== 'Max') {
            this.employees.push(name);
        }
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    getReports() {
        console.log(this.reports);
    }
}
// Using Static Method
const employee1 = Department.createEmployee('Jonathan');
console.log(employee1.name);
const it = new ITDepartment('D1', ['Max']);
it.addEmployee('Bob');
it.addEmployee('Terrance');
// This wont work because accounting.employees is marked as private
// accounting.employees[0] = 'tbag'
it.printEmployeeInformation();
it.describe();
console.log(it);
// const accounting = new AccountingDepartment('A1', []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance(); // this is the same because of the singleton pattern
// Setter for Last Report
accounting._lastReport = 'Yayeet';
accounting.addReport('Something went wrong...');
// Getter for Last Report
console.log(accounting._lastReport);
accounting.getReports();
accounting.addEmployee('Max');
accounting.addEmployee('Richard');
console.log(accounting, accounting2);
accounting.describe();
// const accountingCopy = { name: 'Pat', describe: accounting.describe };
// accountingCopy.describe();
