// Class Decorator
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Person {
  name = 'Francis';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();
console.log(pers);

// Class Decortor with Decorator Factory
function LoggerTwo(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@LoggerTwo('LOGGING - PERSONTWO')
class PersonTwo {
  name = 'Francis';

  constructor() {
    console.log('Creating person object...');
  }
}

const persTwo = new PersonTwo();
console.log(persTwo);
