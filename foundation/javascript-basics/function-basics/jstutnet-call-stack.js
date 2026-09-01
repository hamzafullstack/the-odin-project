// learn more about the following topic on js tutorial net
// https://www.javascripttutorial.net/javascript-call-stack/

// Introduction to JavaScript Call Stack
// A call stack is a way for the JavaScript engine to keep track of its place in code that calls multiple functions. It has information on what function is being run and what functions are invoked from within that function.

// JavaScript call stack example
function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);

// Stack Overflow
// The call stack has a fixed size, depending on the implementation of the host environment, either the web browser or Node.js.
// If the number of execution contexts exceeds the size of the stack, a stack overflow error will occur.

// Asynchronous JavaScript
// JavaScript is a single-threaded programming language. This means that the JavaScript engine has only one call stack. Therefore, it only can do one thing at a time.

// When executing a script, the JavaScript engine executes code from top to bottom, line by line. In other words, it is synchronous.

// Summary
// JavaScript engine uses a call stack to manage execution contexts.
// The call stack uses the stack data structure that works based on the LIFO (last-in-first-out) principle.
