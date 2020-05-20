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

// Discriminated Unions
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}
interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log(`Moving speed at ${speed}`);
}

let horse1: Horse = {
  type: 'horse',
  runningSpeed: 30,
};

moveAnimal(horse1);

// Type Casting
// const userInput = <HTMLInputElement>document.getElementById('message-output')!;
const userInput = document.getElementById(
  'message-output'
)! as HTMLInputElement;

userInput.value = 'Hi There.';

// Index Property Types
interface ErrorContainer {
  // { email: 'Not a valid email', userName: 'Username is incorrect' }
  id: string;
  [prop: string]: string; // This says whatever object is constructured needs keys that are string and values that are strings
}

const errorBag: ErrorContainer = {
  // email: 1 // NOT OKAY
  id: 'email',
  email: 'Not a valid Email',
  userName: 'Username is incorrect',
};

// Function Overloading
function addIt(a: string, b: string): string;
function addIt(a: string, b: number): string;
function addIt(a: number, b: string): string;
function addIt(a: number, b: number): number;
function addIt(a: Combinable, b: Combinable) {
  // This is a type guard
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addIt('Francis', 'Calizo');
result.split('');

// Optional Chaining
const fetchedUserData = {
  id: 'U1',
  name: 'Max',
  job: { title: 'CEO', description: 'My own compnay' },
};

// console.log(fetchedUserData.job && fetchedUserData.job.description);

console.log(fetchedUserData.job?.title);

// Nullish Coalescing
const userOutput = '';

// Using this will just look for falsey instead of just null or undefined
// const stored = userOutput || 'Default';

const stored = userOutput ?? 'Default';
console.log(stored);
