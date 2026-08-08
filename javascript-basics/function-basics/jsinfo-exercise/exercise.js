// Exercise solutions..
// i am f#ck!nG tired for coding around 6 hrs

// TASK 1
// Is "else" required?
// SOLUTION: not really.. 

// TASK 2
// Rewrite the function using '?' or '||'
// Qmark ? operator solution.
function checkAge(age) {
    let result = age > 18 ? true : false;
    console.log(result)
}
checkAge(19); // true ,, false if value is below 18
checkAge(17); // false
// OR || Operator solution.
function orCheckAge(age1) {
    return (age1 > 18) || false;
    console.log(age1);
}
console.log(orCheckAge(17)); // False, Latina not for you.
console.log(orCheckAge(19)); // true.
