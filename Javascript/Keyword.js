document.writeln(" welcome js");

// Declaration and Initialization
var x = 10;
console.log(x); // Output: 10

// Redeclaration
var x = 20;
console.log(x); // Output: 20

// Reinitialization
x = 30;
console.log(x); // Output: 30

// Declaration and Initialization
let y = 10;
console.log(y); // Output: 10

// Redeclaration (in the same scope)
// let y = 20; // This will throw an error: "SyntaxError: Identifier 'y' has already been declared"

// Reinitialization
y = 20;
console.log(y); // Output: 20

// Declaration and Initialization
const z = 10;
console.log(z); // Output: 10

// Redeclaration (in the same scope)
// const z = 20; // This will throw an error: "SyntaxError: Identifier 'z' has already been declared"

// Reinitialization
// z = 20; // This will throw an error: "TypeError: Assignment to constant variable."

