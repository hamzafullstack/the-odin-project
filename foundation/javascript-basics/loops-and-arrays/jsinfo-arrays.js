// https://javascript.info/array
// Arrays in javascript. 

// Arrays are ordered collection
// arrays are special data structures to store data in ordered collections.

// ========++Declaration++========
// two syntax to create an empty array 
let arr = new Array(); // creates empty array
let arr1 = []; // empty.
// most of the time you use the 2nd syntax to create. 

// array with elements 
let fruits = ['Apple', 'Mango', 'Banana']; // array.
// Array elements are numbered, starting with zero.

// get an element by its number in square brackets
let names = ['Shoaib', 'Humaira', 'Kashif'];
console.log(names[0]); // Shoaib.
console.log(names[1]); // Humaira.
console.log(names[2]); // kashif.

// we can replace element 
names[2] = 'Zahid'; // ['Shoaib', 'Humaira', 'Zahid']

// or add a new one to the array 
names[3] = 'Hamza'; // added hamza

// Total count of the elements in the array is its length.
console.log(names.length); // 4

// We can also console.log to show the whole Array.
console.log(names); // show all

// An array can store elements of any type.
let mixValue = ['Parrot', {name: 'Ali'}, true, function() {console.log('Hello'); } ]; // multiple datatypes in array
//get the object at index 1 and then shows its name
console.log(mixValue[1].name); // Ali.
// get the function at index 3 and run it.
mixValue[3](); // hello.

// ========++Trailing comma++========
// An array, just like an object, may end with a comma:
let words = [
    'Hello',
    'Come',
    'Go',
    'Fast',
];
// Trailing comma style makes it easier to insert remove.


// Get last elements with “at”
// in javascript negative indexing wont work words[-1] ❌
// the result will be undefined, because the index in square brackets is treated literally.

// we can explicitly calculate last index with length -1
console.log(words[words.length-1]); // Fast

// there is a shorter syntax: words.at(-1);
console.log(words.at(-1)); // Fast

