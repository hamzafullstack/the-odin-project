// https://javascript.info/array#methods-pop-push-shift-unshift

// =====++Methods pop/push, shift/unshift++===== 

// push appends an element to the end.
// shift get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.

// push adds an element to the end.
// pop takes an element from the end.

// declaration of an Array.
const animals = ['Dog', 'Goat', 'Cat', 'Lion'];

// pop  method.
console.log(animals.pop()); // removes last element. print
//animals.pop() also modifies the array by removing it.

// push  method
animals.push('Tiger'); // append the element to the end of the array.

// Methods that work with the beginning of the array:
// shift Method 
animals.shift(); // extracts the first element of the arr.

// unshift method 
animals.unshift('Wolf'); // add the element to the beginning of the array.

// Methods push and unshift can add multiple elements at once:

// =====++Internals++=====
// An array is a special kind of object. The square brackets used to access a property arr[0] actually come from the object syntax.

let fruits = ['Banana'];
let arr = fruits; // copy the reference.
console.log(arr === fruits); // true
arr.push('Pear'); // modify the array by reference.
//if you print the fruits its going to have two items now.

//  The engine tries to store its elements in the contiguous memory area

// arrays are objects at their base. We can add any properties to them

// the engine will see that we’re working with the array as with a regular object. Array-specific optimizations are not suited for such cases and will be turned off, their benefits disappear.

// Please think of arrays as special structures to work with the ordered data. They provide special methods for that. Arrays are carefully tuned inside JavaScript engines to work with contiguous ordered data, please use them this way.


// ========+++Performance+++======== ⚡⚡⚡⚡
// Methods push/pop run fast, while shift/unshift are slow.

// The shift operation must do 3 things:
// Remove the element with the index 0.
// Move all elements to the left, renumber them from the index 1 to 0, from 2 to 1 and so on.
// Update the length property.

// The more elements in the array, the more time to move them, more in-memory operations.

// And what’s with push/pop? They do not need to move anything. To extract an element from the end, the pop method cleans the index and shortens length.

// The pop method does not need to move anything, because other elements keep their indexes. That’s why it’s blazingly fast.

// ==========++Loops++==========
// One of the oldest ways to cycle array items is the for loop over indexes:

// Array declared
let names = ['Kashif', 'Hamza', 'Zahid', 'Murad'];
// for loop - standard
for (let i = 0; i < names.length; i++) {
    console.log(names[i]); // prints all names.
}

// But for arrays there is another form of loop, for..of:

// declared an array 
let cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Skardu', 'Peshawar'];
// array's special for...of Loop.
for (let city of cities) {
    console.log(city); // 
}
// The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.

// technically Arrays are objects its also possible to use for..in. but that's a bad idea to use for..in with arrays

// here are so-called “array-like” objects in the browser and in other environments, that look like arrays. 
// The for..in loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it’s still very fast.

// Generally, we shouldn’t use for..in for arrays.


// A word about “length”
// The length property automatically updates when we modify the array.


// new Array()
// There is one more syntax to create an array:
let newArray = new Array('item1', 'item2');
// It’s rarely used, because square brackets [] are shorter. Also, there’s a tricky feature with it.

// Multidimensional arrays
// Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]; // matrix arrays
console.log(matrix[0][1]); // 2, the second value of the first inner array

// toString
// Arrays have their own implementation of toString method that returns a comma-separated list of elements.

let stringer = [1,2,3,4];
console.log(String(stringer) === '1,2,3,4'); //true.
// Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion,

// Don’t compare arrays with ==
// Arrays in JavaScript, unlike some other programming languages, shouldn’t be compared with operator ==.

// The strict comparison === is even simpler, as it doesn’t convert types.
// So, if we compare arrays with ==, they are never the same, unless we compare two variables that reference exactly the same array.

console.log([] == []); // false
console.log([0] == [0]); // false

// Comparison with primitives may give seemingly strange results as well:

console.log(0 == []); // true
console.log('0' == []); // false
// we compare a primitive with an array object. So the array [] gets converted to primitive for the purpose of comparison and becomes an empty string 



// ---------------------
// That’s simple: don’t use the == operator. Instead, compare them item-by-item in a loop or using iteration methods
//-------------------------