// more about functions specially => arrow func
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#arrow_functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

// Arrow function expressions
// An arrow function expression is a compact alternative to a traditional function expression, with some limits

const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]


// Arrow functions can be async by prefixing the expression with the async keyword.

// Traditional anonymous function...
(function (a){
    return a + 80;
});

// 1. Remove the word "function" and place arrow between the argument and opening body brace

(a) => {
    return a + 1000;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses.


// Traditional anonymous function
(function (a, b) {
  return a + b + 100;
});

// Arrow Function.
(a, b) => a + b + 123;

const a = 4;
const b = 5;

// traditional anonymous function (no parameterss).
(function () {
    return a + b + 333;
});

// Arrow => function --- no parameters.
() => a + b + 321;

// The braces can only be omitted if the function directly returns an expression

// Traditional anonymous function
(function (a, b) {
  const chuck = 42;
  return a + b + chuck;
});

// Arrow function..
(a, b) => {
    const chuck = 24;
    return a + b +  chuck;
};

// Arrow functions are not inherently associated with a name.. | You assign a variable to arrow => function.

// Traditional Function
function bob(a) {
  return a + 100;
}

// arrow function 
const latina = (a) => a + 9; // latina is variable.

// Function body
// Arrow functions can have either an expression body or the usual block body.
