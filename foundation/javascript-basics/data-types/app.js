// a variable can at one moment be a string and then store a number:
// datatypes
let message = 'hello'; // hello is string
message = 12345; // the data changed message now stores a integar as datatype.
//  “dynamically typed”, javascript is a dynamic programming language.

// number. 
let num = 12; // integer
// there are also 1.2334 floating points which also considered numbers.
// Infinity, -Infinity and NaN.
console.log( 1 / 0 ); // Infinity
console.log(Infinity); // also infinity.
console.log( "not a number" / 2 ); // NaN, such division is erroneous
// So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).

// BigInt
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

// string 
// A string in JavaScript must be surrounded by quotes.
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}
let name1 = "John";

// embed a variable
console.log( `Hello, ${name1}!` ); // Hello, John!

// embed an expression
console.log( `the result is ${1 + 2}` ); // the result is 3
console.log( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing).
// There is no character type.

// Boolean (logical type)
// This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// The “null” value
// The special null value does not belong to any of the types described above..
let age1 = null;
// It’s just a special value which represents “nothing”, “empty” or “value unknown”

// The “undefined” value
let age2;
console.log(age2); // shows "undefined"
let age3 = 100;
// change the value to undefined
age3 = undefined; // you can assign undefined to a variable.

// Objects and Symbols
// The object type is special.

// The typeof operator
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3).


// task / exercise on javascript.info
let name = "Ilya";

console.log( `hello ${1}` ); // hello 1
console.log( `hello ${"name"}` ); // hello name
console.log( `hello ${name}` ); // hello Ilya
