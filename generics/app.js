"use strict";
// Arrays are generics
const names = []; // string[]
// const names = ['Francis', 'Max'];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3000);
});
promise.then((data) => {
    // data.split(' ');
});
// Generic Functions
// Using generics here instead of "object" type allows TS to use type inference to get the "name" property
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Francis' }, { age: 24 });
mergedObj.name;
function identity(arg) {
    // length property can now be called
    console.log(arg.length);
    return arg;
}
// Constraints to check if object key exists (extends keyof)
function getProperty(obj, key) {
    return obj[key];
}
function countAndDescribe(element) {
    let descriptionTest = 'Got no value.';
    if (element.length === 1) {
        descriptionTest = `Got 1 element.`;
    }
    else if (element.length > 1) {
        descriptionTest = `Got ${element.length} elements.`;
    }
    return [element, descriptionTest];
}
console.log(countAndDescribe(['Reed', 'yeet']));
console.log(countAndDescribe('Overload'));
// keyof Constraint will query the key
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ name: 'francis' }, 'name'));
// Generic Classes
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Manu');
console.log(textStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
// Readonly Utility
const namez = ['Max', 'Ana'];
// namez.push('Manu');
