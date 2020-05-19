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
