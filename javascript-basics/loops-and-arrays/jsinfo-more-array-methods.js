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

