// Tasks solutions
// exercise details are available on the javascript.info 
// https://javascript.info/logical-operators

// Task 1 
console.log( null || 2 || undefined ); // 2
// Task 2
console.log( console.log(1) || 2 || console.log(3) ); // 1 and 2
// Task 3
console.log( 1 && null && 2 ); // null because first false value
// Task 4
console.log( console.log(1) && console.log(2) ); // 1 & undefined
// Task 5
console.log( null || 2 && 3 || 4 ); // 3
// Task 6
const age = 14;
if (age >= 14 && age <= 90) {
    console.log('You can try on a latina');
} else {
    console.log("تھوڑا اور بڑا ہو جا۔"); // 😂😂
}
//Task 7
let userAge = 14;
if (! (userAge >=14 && userAge <= 90)) {
    console.log('Entry denied');
} else {
    console.log('Pass');
}
// Task 8
if (-1 || 0) console.log( 'first' ); // ✔️
if (-1 && 0) console.log( 'second' ); // ❌
if (null || -1 && 1) console.log( 'third' ); // ✔️
// Task 9 
