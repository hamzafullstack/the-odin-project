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

// TASK 2.1
// OR || Operator solution.
function orCheckAge(age1) {
    return (age1 > 18) || false;
    console.log(age1);
}
console.log(orCheckAge(17)); // False, Latina not for you.
console.log(orCheckAge(19)); // true.

// کل رات لیپ ٹاپ چارجنگ پر لگایا تھا، لیکن چارج ہی نہیں ہوا۔ چارجنگ لائٹ بھی آن تھی، پھر بھی بیٹری چارج نہیں ہوئی۔

// TASK 3 
// Function min(a, b)
function mini(a, b) {
    return Math.min(a, b);
}
console.log(mini(7, 10)); // 7
console.log(mini(7, -10)); // -10
// without built-in function (min).
function minimum(a, b) {
    if (a < b) {
        return a;
    }else{
        return b;
    }
}
console.log(minimum(2, 3)); // 2
console.log(minimum(2, -7)); // -7.

// TASK 4
// Function pow(x,n) 2 ** 3.. 2power by 3.
// Manual solution.
function power(x, n) {
    return x ** n;
}
console.log(power(3, 3)); // 27
console.log(power(3, 7)); // 2187

// built-in function pow - solution
function getPower(x, n) {
    return Math.pow(x, n);
}
console.log(getPower(2, 3)); // 8


// finish... You can read the discription and check solutions on : https://javascript.info/function-basics
// NOTE: I solve these problems according Nodejs (SYS runtime ENV), on website solution tab may have a different solution..
// but both solutions are solving the same problem... GOOD LUCK keeping LEARNING. NO ZERODAY..... 