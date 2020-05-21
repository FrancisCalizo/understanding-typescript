## Decorators

A Decorator is a declaration that can be attached to a class, method, accessor, property, or parameter.
Decorators are a clean syntax for wrapping a piece of code with a function.
It uses the form `@expression`, where `expression` must evaluate to a function that will be called at runtime.

Decorators are used for metaprogramming. Metaprogramming is a technique in which computer programs have the ability to treat other programs as their data. It means that a program can be designed to read, generate, analyze or transform other programs and even modify itself while running.

## Class Decorators

A class decorator is just a function that you're applying to this class.

For class decorators, we need **one** argument,

This argument is the target of the decorator, which is the class.

**Decorators are executed when your class is DEFINED, not when it is instantiated. You don't need to instantiate it at all for the the decorator to be applied.**

## Decorator Factories

A Decorator Factory is a function that returns the expression that will be called by the decorator at runtime.

The advantage of a decorator factory is that you can now pass in values which will be used by the decorator return.
