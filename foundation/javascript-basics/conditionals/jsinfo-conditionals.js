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
// The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.
// let result = condition ? value1 : value2;
let accessAllowed = (age > 18) ? true : false;
// remember no need to wrap it into (parentheses) but recommanded.

// Multiple ‘?’
// You can use a sequence of ? operator 

// Non-traditional use of ‘?’
// Sometimes the question mark ? is used as a replacement for if:

let company = 'netscape'; //browser.
(company == 'netscape') ?
console.log('right') : console.log('wrong');
// its not recommanded to use such confusing code style always write a readable syntax so normal block if else wins.

// Finished.. exercise in new file insha ALLAH.
// You can learn more about the topic on https://javascript.info/ifelse

// NOTE: ⚠️ warning 
// This is just my own practice code, so it's written this way. JavaScript.info uses the `alert()` function, but I have Node.js installed, so I run my code directly in the terminal instead. That's why I'm not using browser-specific functions.

// I'm a bit lazy—I don't feel like opening the browser, running the code, opening DevTools, and all that. I like to keep things clean and simple, so don't get confused.

