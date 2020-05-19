class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  // Shorthand Initialization so we don't have to initialize above (name)
  constructor(private readonly id: string, private name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.reports = reports;
    this.lastReport = reports[0];
  }

  get _lastReport() {
    if (this.lastReport) {
      return this.lastReport;
    }

    throw new Error('No report found');
  }

  set _lastReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value');
    }
    this.addReport(value);
  }

  addEmployee(name: string) {
    if (name !== 'Max') {
      this.employees.push(name);
    }
  }

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
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

// Setter for Last Report
accounting._lastReport = 'Yayeet';

accounting.addReport('Something went wrong...');

// Getter for Last Report
console.log(accounting._lastReport);

accounting.getReports();

accounting.addEmployee('Max');
accounting.addEmployee('Richard');

console.log(accounting);

// const accountingCopy = { name: 'Pat', describe: accounting.describe };

// accountingCopy.describe();
