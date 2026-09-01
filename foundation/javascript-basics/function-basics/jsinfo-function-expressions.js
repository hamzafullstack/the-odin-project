// Function expressions
// reference link : https://javascript.info/function-expressions

// function expressions 
// In JavaScript, a function is not a “magical language structure”, but a special kind of value.

function hi () {
    console.log('Hello');
    // this syntax called Function Declaration:
}

// There is another syntax for creating a function that is called a Function Expression.

let sayHi = function() {
    console.log('hello');
    // function expressions.
};

// Function is a value
// Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the sayHi variable.

function sayMyName() {
    console.log('Ameer Hamza');
}
console.log(sayMyName); // shows func code.
// In JavaScript, a function is a value, so we can deal with it as a value. The code above shows its string representation, which is the source code.

// We can copy a function to another variable:
function helloWorld () {
    console.log('Hello World');
} // created

let heyWorld = helloWorld; // copy
// run the copy it works 
heyWorld();
// this still works too.
helloWorld();

// We could also have used a Function Expression to declare.

let country = function() {
    console.log('ISLAMIC REPUBLIC OF PAKISTAN');
    // created
};
let countryName = country;
// Everything would work the same...

// Why is there a semicolon at the end?
// . The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.,

// call back function 

// call back practice on nodejs without confirm() function.
function ask(age, yes, no) {
    if (age >= 18) yes();
    else no();
}

function showOk() {
    console.log('جاؤ اور مزے کرو۔');
}

function showRejection() {
    console.log('لَتینا، تمہارے لیے نہیں۔ بڑا ہو جا، پھر آنا۔');
}

ask(18, showOk, showRejection);


// Function Expression vs Function Declaration
// Function Declaration: a function, declared as a separate statement, in the main code flow:

// function declaration
function addTwo(a, b) {
    return a + b;
}

// he function is created on the right side of the “assignment expression” =:
let addingTwo = function(c, d) {
    return c + d;
};

// A Function Expression is created when the execution reaches it and is usable only from that moment.

// A Function Declaration can be called earlier than it is defined.


// Function Expressions are created when the execution reaches them. That would happen only in the line (*). Too late.

// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.

// read more about function declaration vs function expressions on javascript.info 
// https://javascript.info/function-expressions#function-expression-vs-function-declaration