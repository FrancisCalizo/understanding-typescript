// Could also use an interface
type Admin = {
  name: string;
  privileges: string[];
};

// Could also use an interface
type Employee = {
  name: string;
  startDate: Date;
};

// Intersection Type
// interface ElevatedEmployee extends Employee, Admin {}
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Francis',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = (x: number) => number | boolean;

// Intersection here
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  // This is a type guard
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  // This is a type guard
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date: ' + emp.startDate);
  }
}

printEmployeeInformation({ name: 'Ricky', privileges: ['None'] });
printEmployeeInformation({ name: 'Ricky', startDate: new Date() });

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // One Way to To this
  // if ('loadCargo' in vehicle) {
  //   vehicle.loadCargo(1000);
  // }

  // Another way to Type Guard with instanceof
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
