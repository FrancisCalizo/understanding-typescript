## TypeScript

- A JavaScript superset
- A language building up on JS
- Adds new Features + Advantages to JavaScript
- BROWSER CAN'T EXECUTE IT
- TypeScript is compiled to JavaScript
- Features are compiled to JS 'workarounds', possible errors are thrown
- Identify erros during compile time (development) instead of runtime errors in JS
- More Types in TS than in JS

## Advantages in TS

- TypeScript add types to make our code more explicit.
- Nex-gen JS features (compiled down for older browsers)
- Non-JS features like interfaces or Generics
- Rich Configuration Options
- Modern tooling that helps even in non-TS projects

## Core Types

number - all numbers, no differentiation between integers or floats
string - all text values
boolean - true/false
object - Any JS object, THERE ARE MORE SPECIFIC TYPES (TYPE OF OBJECT) IN TS
--- Object types are written almost like objects
--- can define with most generic way with :object
--- or you can be most specific with adding key type pairs in between {}
Arrays - Any JS arrays , type can be flexible or strict (regarding the element types)
--- can define type by string[] or number[] or by Array<string>
Tuples - Fixed length and fixed type array
--- define by [] and putting types inside like [number, string]
--- still have the ability to .push() to an array
--- can assign to an array by using indexes as well
Enums - Automaticacly enumerated global constant identifiers
--- define like enum role {READ_ONLY, AUTHOR}
--- typically use uppercase letters
--- typically assigns first property with 0 and increments up but you can define your own custom values if you want
Any - any kind of value, no type assignment
--- USE SPARINGLY, TAKES AWAY ALL ADVANTAGES OF TYPESCRIPT
Unions - adds flexibility of types
--- define with the "|" symbol like number | string
--- another example for array would be (number | string)[]
--- Sometimes will need some runtime checks depending on your logic, sometimes you won't
Literals - a type whose expected value is a string with textual contents equal to that of the string or number literal type
--- By using literal types, you can allow an exact value which a tring or number must have and are clear with the exact value a variable should hold
--- define with : 'option-1' | 'option-2'
Type Alias - create a new name for a type. They are similar to interfaces but can name primitives, unions, tuples, and any other types
--- define by writing 'type' and then the name of the type
--- type Combinable = number | string
--- typically defined at the top of the page
--- you can provide an lias to an object type as well like type User = {name: string, age: number}
Unknown - type-safe counterpart to any. Anything is assignable to unknown, but unknown isn't assignable to anything but itseld and any without a type assetion
--- good example can be found here https://stackoverflow.com/a/51439876
Never - represents the type of values that never occur
--- typically return type of a function that never returns like when you throw an error in a function or an infinite loop

## Functions

Can assign types to the parameters
Can also assign return types to the function
--- TypeScript will use type inference to find out what it will return, but you may explicitly set it as well
void - type where the function returns nothing although the function completes successfully
Functions are NOT ALLOWED to have a return type of undefined
'Function' can be used as a type, but not the best way since it's generic and not specific
Can define a function type by using (a:number, b:number) => number
--- useful when defining callback types

## Type Assignment & Type Inference

Type Inference - TS will try to understand and set types of variables when there is no explicit information available in the form of type annotations.
Bad practice to do type assignment if type inference is already used
