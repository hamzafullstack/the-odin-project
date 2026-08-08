// learn more about the functions on : https://javascript.info/function-basics
// Functions
// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition..

// Function Declaration
function showMessage () {
    console.log('Hello World!!!!!');
}

// structure..
function name(parameter1, parameter2, ... parameterN) {
 // body
}
// Our new function can be called by its name: showMessage().
showMessage(); // calling function..

// Local variables
// A variable declared inside a function is only visible inside that function.

function newMessage() {
    let message = 'Hello, I am Hamza!'; // local variable.
    console.log(message);
}
newMessage(); // Hello I am Hamza!
// console.log(message); Error! var is local,

// Outer variables
// A function can access an outer variable as well,

let userName = 'Shoaib'; // outer variable.

function userMessage() {
    let userMessageOne  = 'Hello' + userName;
    // The function has full access to the outer variable.
    userName = 'Hamza'; // Change the outer variable.
    // It can modify it as well.

    console.log(userMessageOne);
}
userMessage(); // calling function...

// Global variables
// Variables declared outside of any function, such as the outer userName in the code above, are called global..
//  minimize the use of global variables.

// Parameters
// We can pass arbitrary data to functions using parameters.
function chat(from, text) {
    // if you give var here like from = or text = .. func will use them.
    console.log(from + ': ' + text);
}
chat('hamza', 'AssalamuAlaikum');
chat('Hamza', 'How are You');
// When a value is passed as a function parameter, it’s also called an argument..

// A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).

// Default values
// If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

function omit(user, msg = 'no message given') {
    console.log(from + ": " + msg );
}
omit('Ali'); // Ali: No message given.

// Returning a value
// A function can return a value back into the calling code as the result.

function sum (a, b) {
    return a + b; // sum of a b.
}
let result = sum(1, 2); // sum of 1 ND 2
console.log(result); // 3

// there maybe many occurrences of return.
function checkAge(age) {
    if (age >= 18) {
        return true;
    }else {
        return false;
    }
}
// more on jsinfo.

// A function with an empty return or without it returns undefined

function doNothing() {
    // empty.
}
console.log(doNothing() === undefined); // true...
// same stands for return.
function doNothingToo() {
    return;
}
console.log(doNothingToo() === undefined); // true.

// Never add a newline between return and the value.
// if you want new line in return use () parenthesis.

// Naming a function
// name a function accurately..
// With prefixes in place, a glance at a function name gives an understanding what kind of work it does and what kind of value it returns.
// getAge() CreateForm, checkpermission, Calc, create etc

// One function – one action
// A function should do exactly what is suggested by its name, no more.
// Two independent actions usually deserve two functions.

// Ultrashort function names
// Functions that are used very often sometimes have ultrashort names. example: jQuery.

// you can learn more about functions on javascript.info. i love this site for javascript..
// link : https://javascript.info/function-basics