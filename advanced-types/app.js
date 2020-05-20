"use strict";
var _a;
var e1 = {
    name: 'Francis',
    privileges: ['create-server'],
    startDate: new Date(),
};
function add(a, b) {
    // This is a type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving...');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving a truck...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('Loading cargo...' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
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
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving speed at " + speed);
}
var horse1 = {
    type: 'horse',
    runningSpeed: 30,
};
moveAnimal(horse1);
// Type Casting
// const userInput = <HTMLInputElement>document.getElementById('message-output')!;
var userInput = document.getElementById('message-output');
userInput.value = 'Hi There.';
var errorBag = {
    // email: 1 // NOT OKAY
    id: 'email',
    email: 'Not a valid Email',
    userName: 'Username is incorrect',
};
function addIt(a, b) {
    // This is a type guard
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
var result = addIt('Francis', 'Calizo');
result.split('');
// Optional Chaining
var fetchedUserData = {
    id: 'U1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own compnay' },
};
// console.log(fetchedUserData.job && fetchedUserData.job.description);
console.log((_a = fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
// Nullish Coalescing
var userOutput = '';
// Using this will just look for falsey instead of just null or undefined
// const stored = userOutput || 'Default';
var stored = (userOutput !== null && userOutput !== void 0 ? userOutput : 'Default');
console.log(stored);
