// The odin Project curriculum exercise solutions...
// function basics 

// 🤺 For now, just write each function and test the output with console.log.

//Task~1. Write a function called add7 that takes one number and returns that number + 7.
function add7(addSeven) {
    return addSeven + 7;
}
console.log(add7(10)); // add7(10) should return 17

//Task~2. Write a function called multiply that takes 2 numbers and returns their product.
function multiply(numOne, numTwo) {
    return numOne * numTwo;
}
console.log(multiply(3, 2)); // multiply(3, 2) should return 6

//Task~3. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
// capitalize("abcd") should return "Abcd"
// capitalize("ABCD") should return "Abcd"
// capitalize("aBcD") should return "Abcd"
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize('ABcD'));
console.log(capitalize('aBcD'));
console.log(capitalize('abcd'));
console.log(capitalize('ABCD'));
console.log(capitalize('sHoAiB'));

//Task~4. Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"
function lastLetter(str) {
    return str.at(-1);
}
console.log(lastLetter('Abcd')); // d
console.log(lastLetter('Hamza')); // a