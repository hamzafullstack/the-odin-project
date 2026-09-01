// https://www.youtube.com/watch?v=7W4pQQ20nJg

// its very easy to create an array in javascript
const array = ['A', 'B', 'C', 'D']; // Array.
// an Array allows you to represent a list of items 

const empty = []; // an empty array

// remember: Arrays start at index 0 in javascript.


// indexes helps you to access individual items in the arrays

let newArray = [1,2,3,4,5,6,7,8];
console.log(newArray[2]); // index and get the element.
// if you try to get an element which isn't exists in array it will return undefined.

// to get the length of array 
console.log(newArray.length); // 8
// to add an element at the end of array 
newArray.push(9); // push method add 9 at the end of array
// you can add any datatype in array using push method.

// you can also push an array inside an array. 
newArray.push(["N", "O", "P", "E"]); // added array
// an array inside array called nested array. 
const nestedArray = [
    ['strings', 'yes Strings'],
    [1,2,3,4],
]; // dealing with nested arrays in js is very common.

// change array elements

nestedArray[0] = 1;
console.log(nestedArray); // log.


// love javascript.