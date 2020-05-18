## Spread Operator

// This will have person just point to the address of obj, not create a new obj
const obj = {name: 'francis'}
const person = obj;

// Use the Spread Operator to create a new object
const obj = {name: 'francis'}
const person = {...obj}

// Also use spread operator to move properties of an array into another array
const arr1 = [1,2,3]
const arr2 = [...arr1, 4,5,6]
