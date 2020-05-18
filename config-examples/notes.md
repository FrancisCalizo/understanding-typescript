-w to start TS Compiler in watch mode

-tsc --init to create tsconfig file. After with config file, ability to:
-tsc will compile all
-tsc -w will watch all

-Ability to include, exclude files with tsconfig file
-'target' to change what the ts files compile down to

-outDir in config is where the JS files will be output on compile
-rootDir is the root directly of all the TS files to be compiled

-sourceMap for ability to use TS in chrome debugger

-noEmitonError - tsConfig configuration to enable or disable if the JS files should be created even if there are errors shown from the TS compilers

-strict: true in tsConfig will enable all strict-typing options below it.
-noImplicitAny will not allow an implicit any type on any expressions and declarations.
-strictNullChecks regarding how to access and work with values that might POSSIBLY hold a null value. It protects you from referencing nulls or undefined values in code.

-! is the non-null assertion operator. It asserts that its operand is non-null and non-undefined in contexts where type checker is unable to conclude that fact. x! produces a value of x with null and undefined excluded.

-noUnusedLocals to report errors on unused local variables (will be denoted with a yellow underline instead of a red to denote a warning. Still will be shown as an error in the console though because TS doesn't know any other way).
-noUnusedParameters - same as above but with parameters

-noImplicitRetturns - reports if a function returns something sometimes and nothing other times. Aka when not all code paths return a value (think of if statements)
