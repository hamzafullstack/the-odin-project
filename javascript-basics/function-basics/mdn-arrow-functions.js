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

// Expression body
const add = (a, b) => a + b; // Implicitly returns a + b

// Block body
const add2 = (a, b) => {
  console.log(a, b);
  return a + b; // Must explicitly return a value
};

// No return value
const add3 = (b) => {
  a += b;
  // No return statement, so returns undefined
};

// wrap the object literal in parentheses:
const func = () => ({ foo: 1 });

// Cannot be used as methods
// Arrow function expressions should only be used for non-method functions.

// No binding of arguments
// Arrow functions do not have their own arguments object. Thus, in this example, arguments is a reference to the arguments of the enclosing scope:

function foo(n) {
  const f = () => arguments[0] + n; // foo is implicit arg binding.
  return f();
}
foo(3);

// In most cases, using rest parameters is a good alternative to using an arguments object.

function foo1(n) {
  const f1 = (...args) => args[0] + n;
  return f1(10);
}
foo1(1); //11..

// Cannot be used as constructors
// arrow function can't be used as constructors.

// Cannot be used as generators
// The yield keyword cannot be used in an arrow function's body

// Line break before arrow
// An arrow function cannot contain a line break between its parameters and its arrow.
// you can use ( ) for line break 

// Precedence of arrow
// Although the arrow in an arrow function is not an operator, arrow functions have special parsing rules that interact differently.
// => has a lower precedence than most operators.

// where you use arrow function?
// the greatest benefit of using arrow functions is with methods like setTimeout() and EventTarget.prototype.addEventListener() that usually require some kind of closure, call(), apply(), or bind() to ensure that the function is executed in the proper scope.


// for better understanding visit mdn-docs its heaven for web developers.. you will feel like you are at home ❤️❤️❤️