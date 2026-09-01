// javascript comparisons from javascript.info
// for references visit : https://javascript.info/comparison

// comparisons 
// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equals: a == b, 
// assigment: a = b,
// Not equals: a != b.
// Strict equality: a === b

// Boolean is the result
// All comparison operators return a boolean value:
console.log(2 > 1); // true - 2 greaterthan 1
console.log(2 == 1); // false - 2 isnot equal to 1
console.log(2 != 1); // true - 2 isnot 1

// A Comparison 
let result = 5 > 4; // assign the result of comparison
console.log(result); // true 5 is greaterthan 4.

// String comparison.
console.log('Z' > 'A'); // true
console.log('Bee' > 'Be'); // true

// Comparison of different types
console.log('2' > 1); // True : string '2' becomes a number 2
console.log('01' == 1); // true: string 01 becomes a number 1

// for boolean values 1 becomes true and 0 becomes false.
console.log(true == 1); // true
console.log(false == 0); // true because false equals 0.

// Strict equality 
// A strict equality operator === checks the equality without type conversion.
console.log( 0 === false); // false because the types aren't same.
// There is also a “strict non-equality” operator !== analogous to !=.

// Comparison with null and undefined
console.log(null === undefined); // false because different types.

// For maths and other comparisons < > <= >=
console.log(null >= 0); // true

// An incomparable undefined
// The value undefined shouldn’t be compared to other values:

// Avoid problems
// Treat any comparison with undefined/null except the strict equality === with exceptional care. 
// Don’t use comparisons >= > < <= with a variable which may be null/undefined, unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.

// exercise solution. 
// 5 > 4 : true
// "apple" > "pineapple" : false
// "2" > "12" : true
// undefined == null : true
// undefined === null : false
// null == "\n0\n" : false
// null === +"\n0\n" : false


// Message for future hamza..
//اگر اس موضوع میں کبھی مشکل پیش آئے یا دوبارہ سمجھنے کی ضرورت ہو، تو مزید سیکھنے کے لیے اوپر دیا گیا لنک ضرور دیکھ لینا۔