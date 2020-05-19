--In TS, you can add a parameter 'this' into a method inside of a class to be a hint to what a this is refering to. You can then assign a type to it.

-`private` keyword will make a property/method accessible from only inside the class
-'protected' keyword will make a property/method accssible from only inside the class AND subclasses inheriting from the class

-Shorthand initialization inside constructor method so we don't have to define both it above and in the constructor method

-readonly available for extra type safety for properties in a class

Getters and Setter are ways of intercepting accesses to a member of an object. This gives you a way of having finer-grained control over how a member is accessed on each object.
-Getter is a keyword inside a class used on a method. A property where you execute a method when you retrieve a value.
--- Has to return something
--- When calling a getter, you don't have to call it with parenthesis, you call without.

-Setter needs an argument
--- When calling a setter, you don't call with parenthesis and argument, you just set the value

-Abstract Classes are used for inheritance. **You cannot create an instance of an abstract class**.
--- An abstract class contains one or more abstract methods or property declarations
--- **The class which extends the abstract class must define all the abstract methods** -- This forces an implementation to use the specific abstract method or property
--- basically is a 'required' keyword

Singleton Pattern - In OOP, it is a pattern restricts instantiations of a class to one object (one instance).
-first, declare the constructor as private
-create a static method to check if one instance exsits
-create a private static property of the type of whatever the class is

## Interfaces

-Describes the structure of an object; what an object should look like (a custom type)
-You can **SOMETIMES** interchange interfaces and custom types..but:
--- Interfaces can only be used to describe the structure of an object
--- Interfaces are used more frequently when describing object types than custom types
--- You can implement an interface with a class (You can implement multiple interfaces (only can inherit one class))
Ability for Readonly keyword
Interfaces can extend each other

Interfaces can describe the structure of a function
When describing a function inside an interface, you don't use the => syntax like when describing using normal types, you use a semi-colon

Optional Properties and Parameters on both interfaces and classes
