// https://javascript.info/array-methods
// Array Methods in javascript.. 

// Array methods
// Arrays provide a lot of methods. To make things easier, in this chapter, they are split into groups.

// ========Add/remove items==========
// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.

// ======== splice ==========
// how to delete an element from the array ? 
// The arrays are objects, so we can try to use delete:
let arr = ['i', 'can', 'go'];
delete arr[1]; // remove the 'can' from array
console.log(arr[1]); // undefined
// delete obj.key removes value by the key. its all it does. its fine for obj not for arrays not recommanded to use.

// there are some special methods for arrays should be used

// the arr.splice  method is a swiss army knife for arrays
// it can do everything insert,remove, replace elements

// the syntax is:
// arr.splice(start[, deleteCount, elem1, ..., elemN])

let newArr = ['I', 'Love', 'Javascript'];
// deleting
newArr.splice(1, 1); // index 1 remove 1 element
console.log(newArr); // [i javascript] ~ love removed.
// Easy, right? Starting from the index 1 it removed 1 element.

// short diary.. ❤️😊
// آج کی تاریخ ۲۳ اگست ۲۰۲۶ کو دوست کی شادی کے ولیمے کی دعوت ہے، تقریباً ۱۱ بجے۔ باقی کا سبق ولیمے سے واپس آ کر پڑھیں گے۔

// ------ I am Back -----------

// we remove 3 elements and replace them with the other two
let newArr1 = ['I', 'Am', 'Coding', 'Right', 'Now'];
// remove 3 first elements and replace them with another
newArr1.splice(0, 3, "let's", "Dance");
console.log(newArr1); // [ "let's", 'Dance', 'Right', 'Now' ]

// The splice method is also able to insert without del.
let jsArray = ['I', 'Study', 'Javascript'];
// from index 2 delete 0 insert complex and Language
jsArray.splice(2, 0, 'Complex', 'Language');
console.log(jsArray); // added without deleting any item

// Negative indexes allowed
// js allows negative indexing.

let numArray = [1,2,3,4,5];
//from index -1 (one step from the end.)
// delete 0 elements, then insert 6 and 7.
numArray.splice(-1, 0, 6, 7); // position & 0 = del none
console.log(numArray); //

// ======== slice method ===========
// The method slice is much simpler than the similar-looking splice.

//   arr.slice([start], [end])
// It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, 

let test = ['t', 'e', 's', 't'];
console.log(test.slice(1, 3)); // copy from 1 to 3.
console.log(test.slice(-2)); // s,t copy from -2 till end
// call it without arguments: test.slice() creates a copy of array. That’s often used to obtain a copy for further transformations that should not affect the original array.

// ========== Concat Method ==========
// The method concat creates a new array that includes values from other arrays and additional items.

// arr.concat(arg1, arg2...)

// it accepts any number of arguments either arr or value.

let arrConcate = [1,2];
console.log(arrConcate.concat([3,4])); // 1234.
arrConcate.concat([5,6], [7,8]);
arrConcate.concat([9,10], 11, 12);
console.log(arrConcate); //
// Normally, it only copies elements from arrays. Other objects,
// if an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead

// ======== iterate: forEach ==========
// the foreach method allows to run a function for every element of the array.

// for each call console.log().
// ['Karachi', 'Lahore', 'Islamabad'].forEach(alert);

["karachi", 'Lahore', 'Skardu'].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});

// The result of the function (if it returns any) is thrown away and ignored

// ======== Searching in Array ==========
// let's  discover methods that search in an array.

// indexOf/lastIndexOf and includes
// indexof() and includes() have similar syntax 
// indexof(item, from); ~return index where it found otherwise -1
// includes(item, from); ~ true if found.

// usually these methods are used with only one arg the item to search. by default the search is from beginning.

let search = [1,2,3, false];
console.log(search.indexOf(0)); // 1
console.log(search.indexOf(false)); // 3
console.log(search.indexOf(null)); // -1
// indexof() uses === strict equality for comparison.

// if we want to check if item exists in the array and don't need the index then include() method is preferred
let fruits = ['Apple', 'Mango', 'Grape', 'Apple'];
// lastindexof() is the same but looks for from right to left.
console.log(fruits.indexOf('Apple')); // first apple
console.log(fruits.lastIndexOf('Apple')); // last apple

// The includes() Method handles NaN correctly.
const nan = [NaN]; // NaN in Array
console.log(nan.indexOf(NaN)); // -1 wrong, should be 0
console.log(nan.includes(NaN)); // true,
// includes recently added to js thats why uses more up to date comparison algorthms internally.

// -----find and findIndex/findLastIndex-------

//find() method is useful when you have array of objects.

// If it returns true, the search is stopped, the item is returned. If nothing is found, undefined is returned.

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let user = users.find(item => item.id == 1);
console.log(user.name); // john.
// in real life, arrays of objects are a common thing, so the find method is very useful.

// findindex() returns the index where element was found instead of element itself. -1 is returned if nothing found

// findlastindex() is like findindex() but searches from right to left similar to lastindexof().

let usersExtra = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"},
  {id: 4, name: "John"}
];
// find the index of the first john.
console.log(usersExtra.findIndex(user => user.name == 'John')); // 0
// find the index of the last john.
console.log(usersExtra.findLastIndex(user => user.name == 'John')); // 3

// ===== filter () ========

// similar to find() but filter returns an array of all matching elements

let friends = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

// returns array of the first two friends
let someFriends = friends.filter(item => item.id < 3);
console.log(someFriends.length); // 2

// === Transform an Array =====
// methods that transform and reorder an array.
// map method is one of the most useful and often used.

let lengths = ['Bilbo', "Nazgul", 'Gandalf'].map(item => item.length);
console.log(lengths);

// ==== sort() =====
// sorts the array in place, changing its element order.
let sortnum = [1,2,5,3,4];
// method reorders the content
sortnum.sort();
console.log(sortnum); // [ 1, 2, 3, 4, 5 ]
// The items are sorted as strings by default.

// === reverse() ====
// reverse method  reverse the order of the elements.

let myNums = [1,2,3,4,5,6];
myNums.reverse();
console.log(myNums); // 6,5,4,3,2,1
// It also returns the array after the reversal.

// ==== split and join ======
// very useful in real world day to day programming
let userNames = 'Hamza, Kashif, Shoaib';
let fix = userNames.split(', '); // splits comma
for (let name of fix) {
    console.log(`A message to ${name}.`);
}

// join() does the reverse to split it creates a string items joined by glue between them.
// 
// let myStr = userNames.join(';'); // hamza;kashif;shoaib

// ==== reduce/reduce/right
// reduce and reduceright they are used to calculate a single value based on the array.

let numtwo = [1,2,3,4,5];
let result = numtwo.reduce((sum, current) => sum + current, 0);
console.log(result); // 15.

// The method arr.reduceRight does the same but goes from right to left.

// ====== array.isarray =======
// Arrays do not form a separate language type. They are based on objects
// that: Array.isArray(value). It returns true if the value is an array, and false otherwise.

console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

// ===Most methods support “thisArg”===

// Almost all array methods that call functions – like find, filter, map, with a notable exception of sort, accept an optional additional parameter thisArg.
