// for references go to https://javascript.info/logical-operators
// Logical operators
// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing).

// || (OR) :-> The “OR” operator is represented with two vertical line symbols:

result = a || b;
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true
console.log(false || false); // false.

if (1 || 0) { // works just like if( true || false )
  console.log( 'truthy!' );
}

let hour = 9;
if (hour < 10 || hour > 18) {
  console.log( 'The office is closed.' );
}

let workingHour = 12;
let isWeekend = true;

if (workingHour < 10 || workingHour > 18 || isWeekend) {
  console.log( 'The office is closed.' ); // it is the weekend
}

// OR "||" finds the first truthy value 
// result = value1 || value2 || value3;
console.log( 1 || 0 ); // 1 (1 is truthy)

console.log( null || 1 ); // 1 (1 is the first truthy value)
console.log( null || 0 || 1 ); // 1 (the first truthy value)

console.log( undefined || null || 0 ); // 0 (all falsy, returns the last value)

// Getting the first truthy value from a list of variables or expressions.

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder

// Short-circuit evaluation.
true || console.log("not printed");
false || console.log("printed");


// && (AND) :-> The AND operator is represented with two ampersands &&:
// result = a && b;

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false
// An example with if:
let officeHour = 12;
let minute = 30;

if (officeHour == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}
// Just as with OR, any value is allowed as an operand of AND: 
if (1 && 0) { // evaluated as true && false
  console.log( "won't work, because the result is falsy" );
}

// NOTE: AND “&&” finds the first falsy value
// if the first operand is truthy,
// AND returns the second operand:
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log( null && 5 ); // null
console.log( 0 && "no matter what" ); // 0

// Precedence of AND && is higher than OR ||


// Don’t replace if with || or &&
// Sometimes, people use the AND && operator as a “shorter way to write if”.
let x = 1;
(x > 0) && console.log( 'Greater than zero!' ); // its not recommanded to do so.
// avoid using && operator for if statement.

// NOT ! (NOT) operator.


