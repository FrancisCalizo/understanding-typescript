// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1, n2) => {
  return n1 + n2;
};

interface Person {
  name: string;
  age: number;

  greet: (phrase: string) => void;
}

let user1: Person;

user1 = {
  name: 'Francis',
  age: 28,
  greet(phrase) {
    console.log(`${phrase} ${this.name}.`);
  },
};

user1.greet('Hi, I am');

interface Greetable extends Named {
  readonly name?: string;

  greet(phrase: string): void;
}

// Implementing Interfaces
class People implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string, public named = 'Robert') {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

let user2: Greetable;
user2 = new People();
console.log(user2);

interface Named {
  readonly named: string;
  outputName?: string;
}
