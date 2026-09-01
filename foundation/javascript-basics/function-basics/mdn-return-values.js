// function return values.
// mdn link : https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Return_values

// Function return values

// What are return values?
//  the values that a function returns when it completes.

const myText = 'The Weather is warm today';
const newString = myText.replace('warm', 'cold');
console.log(newString);
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made

// Generally, a return value is used where the function is an intermediate step in a calculation of some kind..

// How to return a value
// To return a value from a custom function, you need to use the return keyword..

function random(numbers) {
    const result = Math.floor(Math.random() * numbers);
    return result;
}
// you can also do this 
function randomNumber(number) {
    return Math.floor(Math.random() * number);
    // this eversion is quicker to write, its short and more compact.
}



// Think about the idea of creating a function library. As you go further into your programming career, you'll start doing the same kinds of things over and over again. It is a good idea to create your own library of utility functions to do these sorts of things. You can copy them over to new code, or even just apply them to HTML pages wherever you need them.


// for detail read visit MDN-docs