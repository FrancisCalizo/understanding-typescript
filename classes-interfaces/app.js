"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
let user1;
user1 = {
    name: 'Francis',
    age: 28,
    greet(phrase) {
        console.log(`${phrase} ${this.name}.`);
    },
};
user1.greet('Hi, I am');
// Implementing Interfaces
class People {
    constructor(n, named = 'Robert') {
        this.named = named;
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi!');
        }
    }
}
let user2;
user2 = new People();
console.log(user2);
