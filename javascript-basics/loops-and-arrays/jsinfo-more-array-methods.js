// https://javascript.info/array-methods
// Array Methods in javascript.. 

// Array methods
// Arrays provide a lot of methods. To make things easier, in this chapter, they are split into groups.

// ========Add/remove items==========
// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.

// splice 
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

// short diary.. ❤️😊
// آج کی تاریخ ۲۳ اگست ۲۰۲۶ کو دوست کی شادی کے ولیمے کی دعوت ہے، تقریباً ۱۱ بجے۔ باقی کا سبق ولیمے سے واپس آ کر پڑھیں گے۔
