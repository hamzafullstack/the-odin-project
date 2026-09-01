// function on MDN-Docs.
// learn on https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions

// Built-in browser functions
const myText = "I am a string";
const newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() str function is a built-in function.
// join function turn array items into a single string..
const myNums = Math.random();
// random() is built-in function.

// Functions versus methods
// Functions that are part of objects are called methods;


// Invoking functions
function myFunction() {
    console.log('I Love MDN-DOCS');
}
myFunction(); // I Love MDN-DOCS.
// calls the function once..


// Function arguments and parameters
// Parameters are the variables listed in a function definition,
// while arguments are the values passed to the function to represent the parameters when the function is called.

function random(number) {
  return Math.floor(Math.random() * number);
}

// Default parameters
// you can specify default values by adding = after the name.

function hello(name = 'Shoaib') {
    console.log(`Hello ${name}!`);
}
hello('Kashif'); // Hello Kashif!
hello(); // Hello Shoaib! (its default).

// Anonymous functions and arrow functions
// But you can also create a function that doesn't have a name:
(function () {
    console.log('Hey!');
}); // inside parenthesis ({}).
// This is called an anonymous function, because it has no name.. passad as arg in a function xd read more on mdn.
// NOTE: this form of creating a function is also known as function expression. 


// Anonymous function example
// function logKey (event) {
//     console.log(`You pressed "${event.key}".`);
// }
// textBox.addEventListener("keydown", logKey);
// remember:  addEventListener() function of the text box. This function expects at least two arguments:

// You can pass an anonymous function to addEventListener()

// Arrow functions =>:
// textBox.addEventListener("keydown", (event) => {
//   console.log(`You pressed "${event.key}".`);
// });

// If the function only takes one argument, you can omit the parentheses around it:

textBox.addEventListener("keydown", event => {
  console.log(`You pressed "${event.key}".`);
});

// return
//  if your function contains only a single line that's a return statement, you can omit the braces and the return keyword.


// Function scope and conflicts
// When you create a function, the variables and other things defined inside the function are inside their own separate scope..

// MDN docs is a goldmine for webdevelopment. always visit whenever you're stuck... I ❤️ MDN-Docs.