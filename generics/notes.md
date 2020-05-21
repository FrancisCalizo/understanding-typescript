Good Article for Generics - https://medium.com/@rossbulat/typescript-generics-explained-15c6493b510f

## Generics

Generics allow you to create components that can work over a variety of types rather than a single one.
Generics give us the ability to pass in a range of types into functions, interfaces, and classes and adds an extra layer of abstraction and reusability in our code.

Generics give us flexibility combined with type safety.

Generics are better for when you want to lock in a certain type and use throughout the same type throughout the function. Union if you want to be able to use any of the listed types any of the times throughout the function.

### Best time to use generics

1. When your function, interface, or class will work with a variety of data types
2. When your function, interface, or class uses that data type in several places

Generics are often seen in React Componenents.

## Generic Constraints

By using the `extends` keyword, we can limit the amount of types we accept with each type variable.

## extends keyof

Used to check if a property exists on a given object

## Generic Utility Types

Gives us certain utility functionality for generic types (for extra flexibility and type-safety)
ex. partials and readonly
