// Arrays are generics
const names: Array<String> = []; // string[]
// const names = ['Francis', 'Max'];

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});

promise.then((data) => {
  // data.split(' ');
});

// Generic Functions
// Using generics here instead of "object" type allows TS to use type inference to get the "name" property
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Francis' }, { age: 24 });
mergedObj.name;

// Creating Generic Functions

// Constraints to ensure Type Properties Exist (extends)
// Causes an error because 'length' method can only be for string type
// function identity<T>(arg: T): T {
//   console.log(arg.length);
//   return arg;
// }

interface Length {
  length: number;
}

function identity<T extends Length>(arg: T): T {
  // length property can now be called
  console.log(arg.length);
  return arg;
}

// Constraints to check if object key exists (extends keyof)
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Another Generic Function
interface Length {
  length: number;
}

function countAndDescribe<T extends Length>(element: T): [T, string] {
  let descriptionTest = 'Got no value.';
  if (element.length === 1) {
    descriptionTest = `Got 1 element.`;
  } else if (element.length > 1) {
    descriptionTest = `Got ${element.length} elements.`;
  }
  return [element, descriptionTest];
}

console.log(countAndDescribe(['Reed', 'yeet']));
console.log(countAndDescribe('Overload'));

// keyof Constraint will query the key
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert({ name: 'francis' }, 'name'));

// Generic Classes
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Manu');
console.log(textStorage.getItems());

// Partial Utility
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date) {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal;
}

// Readonly Utility
const namez: Readonly<string[]> = ['Max', 'Ana'];
// namez.push('Manu');
