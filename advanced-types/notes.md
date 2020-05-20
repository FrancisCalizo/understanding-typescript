## Intersection Types

An intersection type combines multiple types into one. It allows you to add together existing types to get a single type that has all the features you need.

In the case of a union type, it will take the types that they have in common. For an object type, it will take the combination of the object properties.

## Type Guards

A type guard is any expression that performs a runtime check that guarantees the type in some scope. This ensures that the variable is the type you're expecting at the moment your code is executed.

Three examples of type guards are:

1. typeof - check the type of a variable
2. of - check if something is a property of an object
3. instanceof - check if some object is based on a certain class

## Discriminated Unions

A pattern when using union types that makes implmenting type guards easier (when using object types and union types).

1. Create a common property between interfaces
2. Use a switch statement to check that property is being used

We have one common property in every object that makes up our union that describes that object. Avoids the danger of mistyping.

## Type Casting

Process of the developer manually assigning the type of a value where TypeScript is unable to to so. Can also be an override.
A good example is when using DOM elements

Syntax #1 uses "<>" with the type
Syntax #2 uses 'as' with the type

"!" is used as letting TS know that a value will NOT be null.

## Index Types

Feature that allows us to create objects which are more flexible regarding the properties they might hold.
Useful for reusing an Interface that describes some objects that can have any number if key/value pairs, but you may not know what the exact keys are for each. (when you dont know the property names or property count)

## Function Overloading

Function overloading is the ability to create multiple methods with the same name and a different number of parameters or types and return types.

## Optional Chaining

Used when you are uncertain if a certain property is defined (avoids reference error "could not find proprty of null")

# Nullish Coalescing

A logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
