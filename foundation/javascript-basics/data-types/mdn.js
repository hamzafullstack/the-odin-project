// learn more about javascript on mdn-docs 
// source link for future reference
// link: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings

// Handling text — strings in JavaScript
// Declaring strings
const string = "The revolution will not be televised.";
console.log(string);
// bad string examples.
// const badString1 = This is a test;
// const badString2 = 'This is a test;
// const badString3 = This is a test';

// In JavaScript, you can choose single quotes ('), double quotes ("), or backticks (`) to wrap your strings in. All of the following will work:
const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;
console.log(single);
console.log(double);
console.log(backtick);

// Embedding JavaScript
const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"
// You can use the same technique to join together two variables:
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined); // "Hello, how are you?"


// note for future hamza: you can find all the resources on mdn-docs..

// more on MDN-docs about the strings.. 
// source link : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
