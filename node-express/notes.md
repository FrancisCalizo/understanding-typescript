## node.js

Node cannot execute any TS code.

In tsConfig file, change the target to es2018 and add a property of moduleResolution to "node".

Will need to npm install @types/node and @types/express to get the types of each one

With TypeScript, it is better to use the import/export syntax instead othe Require syntax in node.
