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
    describe() {
        console.log(`Department ${this.id}: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
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
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.reports = reports;
    }
    addReport(report) {
        this.reports.push(report);
    }
    getReports() {
        console.log(this.reports);
    }
}
const it = new ITDepartment('D1', ['Max']);
it.addEmployee('Bob');
it.addEmployee('Terrance');
// This wont work because accounting.employees is marked as private
// accounting.employees[0] = 'tbag'
it.printEmployeeInformation();
it.describe();
console.log(it);
const accounting = new AccountingDepartment('A1', []);
accounting.addReport('Something went wrong...');
accounting.getReports();
console.log(accounting);
// const accountingCopy = { name: 'Pat', describe: accounting.describe };
// accountingCopy.describe();
