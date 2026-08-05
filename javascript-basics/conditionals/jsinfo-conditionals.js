// for future reference and want to know more visit https://javascript.info/ifelse

// Conditional branching: if, '?'
// we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.

// the if statement 
let year = 2015;
if (year == 2015) {
    console.log('the statement worked.');
    // wrapping code in block { } allow us to use multiple statements. and its recommanded to wrap code in { }
}

// Boolean conversion
// The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.
// if (0) { // 0 is falsy
//   ...
// }

// We can also pass a pre-evaluated boolean value to if, like this:
// ⤵️⤵️⤵️
// let cond = (year == 2015); // equality evaluates to true or false

// if (cond) {
//   ...
// }

// The “else” clause
let user = 'Hamza';
if (user == 'Hamza') {
    console.log('Yes! he is hamza');
}else{
    console.log('Nope! he is not.'); // any value except 'Hamza'
}

// Several conditions: “else if”
// Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

let userAge = 26;
if (userAge < 26) {
    console.log('Too young');
} else if (userAge > 26) {
    console.log('Too old');
}else{
    console.log('yup.. exactly 😊');
}

// Conditional operator ‘?’

