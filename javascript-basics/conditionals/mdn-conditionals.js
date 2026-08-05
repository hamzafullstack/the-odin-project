// The MDN article on conditionals is a great introduction to various ways to write conditional code..
// for reference visit : https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals
// یہ لنک یونہی نہیں دیا۔ اگر کبھی کچھ سمجھ نہ آئے، تو یہاں آ کر اپنا علم تازہ کر لینا۔
// وقت بچانے کے لیے یہاں صرف موضوعات اور اُن کا نمونہ کوڈ لکھا ہے۔ 
//اگر کسی موضوع کو گہرائی سے سمجھنا ہو، تو اوپر موجود لنک پر جا کر مزید معلومات حاصل کر لینا۔

// Making decisions in your code — conditionals
// Conditional statements allow us to represent such decision making in JavaScript,

// if...else statements
let condition = true;
if (condition) {
  /* code to run if condition is true */
} else {
  /* run some other code instead */
}
// read the descriptions on mdn-docs.
let shoppingDone = false;
let childAllowance;
if (shoppingDone === true) {
    childAllowance = 10;
} else {
    childAllowance = 5;
}
// complete ChildAllowance : https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/allowance-updater.html

// else if
// using else if. Each extra choice requires an additional block to put in between if () { } and else { }

// else if  webpages example is in mdn-example.js file...

// A note on comparison operators
// === and !== — test if one value is identical to, or not identical to, another.
// {/* < and > — test if one value is less than or greater than another. */}
// {/* <= and >= — test if one value is less than or equal to, or greater than or equal to, another.  */}

let cheese = 'cheddar';
if (cheese) {
  console.log("Yes! cheese is available for making cheese on toast.");
} else {
  console.log('No cheese on toast for you today.');
}

// back to our previous example the child going to shopping with their parents.
if (shoppingDone) {
  childAllowance = 11;
} else {
  childAllowance = 4;
// We don't need to explicitly specify 'shoppingDone === true'
}

// Nesting if...else
// It is perfectly OK to put one if...else statement inside another one — to nest them

// ===> Read the example code on MDN-docs.

// Logical operators: AND, OR and NOT
// If you want to test multiple conditions without writing nested if...else statements, logical operators can help you.

// && — AND; allows you to chain together two or more expressions so that all of them have to individually evaluate to true for the whole expression to return true.

// || — OR; allows you to chain together two or more expressions so that one or more of them have to individually evaluate to true for the whole expression to return true.

//===> Read the Example code on the MDN docs.
// another quick example 
let iceCreamVanOutside;
let houseStatus;
if (iceCreamVanOutside || houseStatus === 'On Fire') {
  console.log("You should leave the house quickly");
} else {
  console.log("Probably should just stay in then.");
}

// not operator !
if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
  console.log("Just should stay in then.");
} else {
  console.log('You should leave the house quickly.');
}
// In this snippet, if the OR statement returns true, the NOT operator will negate it so that the overall expression returns false.

// switch statements
// ===> study the example code on mdn-docs.

// Ternary operator 
// condition ? run this code : run this code instead
// read more on mdn docs 


// There is more to learn on mdn docs, but i am tired finish this today.. most of the basics and advance are already covered...... !!!!!!.
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals
