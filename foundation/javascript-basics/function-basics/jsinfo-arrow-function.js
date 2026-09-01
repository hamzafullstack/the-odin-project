// arrow function in javascript.
// https://javascript.info/arrow-functions-basics

// Arrow functions, the basics
// There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.
// its called ``Arrow function``

// let func = (arg1, arg2, ..., argN) => expression;

// in easy or other words, its shortner version of function expression 

// arrow => function 
let sum = (a, b) => a + b; // this is => func shorer form.
console.log(sum(2, 3)); // 5

// If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.
let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }
console.log(double(4));

// If there are no arguments, parentheses are empty, but they must be present:
let hello = () => console.log('hello world');
hello();

// Arrow functions can be used in the same way as Function Expressions.
let age = 18;
let welcome = (age < 18) ?
() => console.log('hello') :
() => console.log('greetings');

welcome();

// Multiline arrow functions
let sum = (e, f) => {
    let result = e + f;
    return result;
};
console.log(sum(1, 5));

// Summary
// Arrow functions are handy for simple actions, especially for one-liners. 
