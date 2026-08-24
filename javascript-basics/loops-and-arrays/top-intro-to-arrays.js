// https://www.theodinproject.com/lessons/foundations-loops-and-arrays#arrays

// The odin project Intro to Arrays
// arrays are data structures in javascript.
// Strings and numbers may be our building blocks, but as your scripts get more complex, you’re going to need a way to deal with large quantities of them. this is where other data types comes in use, Arrays are very useful and being used widely in any kind of development like Game, web, software, etc.


// learn more on following links and then come back here again. 
// https://www.youtube.com/watch?v=7W4pQQ20nJg
// https://javascript.info/array
// https://javascript.info/array-methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Some examples of array magic
// , arrays also have a set of functions for manipulating that data in very powerful ways. Once you get more experience with these functions, you will start to see ways to use them all over the place!

// raw coding.
function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        // step1 if the element is an even num
        if(array[i] % 2 == 0) {
            // step2 multiply this number by three.
            const tripleEvenNumbers = array[i] * 3;

            //step3 add the new number to the total.
            sum += tripleEvenNumbers;
        }
    }
    return sum;
}
// every single piece solves a crucial problem with our code. we can do the same thing with some array methods.
// ==== Exercise ====

// the map method 
// map is one such function. it excepts a callback as an argument.

// lets see a regular function addOne..
function addOne(num){
    return num + 1
}
const arr = [1,2,3,4,5,6];
const mappedArr = arr.map(addOne);
console.log(mappedArr);// [ 2, 3, 4, 5, 6, 7 ]
// map returns a new array and does not change the original array.

// better way to use map ()
const newArr = [1,2,3,4,5];
const mappArr = newArr.map((num) => num + 1);
console.log(mappArr); // [ 2, 3, 4, 5, 6 ]


// filter method
// filter is somewhat similar to map. It still iterates over the array and applies the callback function on every item. However, instead of transforming the values in the array, it returns a new array where each item is only included if the callback function returns true for it.

// practical way 
function isOdd(num) {
    return num % 2 !== 0;
}
const mynums = [1,2,3,4,5,6,7,8];
// original array is not affected
const oddNums = mynums.filter(isOdd);
console.log(oddNums); //[ 1, 3, 5, 7 ]

// shorter with arrow function 
const numArr = [1,2,3,4,5,6,7,8,9,10];
const oddArr = numArr.filter((num) => num % 2 !== 0);
console.log(oddArr); // [ 1, 3, 5, 7, 9 ]


// reduce method 
// reduce is very useful method in javascript. 

const items = [1,2,3,4,5];
const productOfAllNums = items.reduce((total, currentItem) => {
    return total * currentItem;
}, 1);
console.log(productOfAllNums); // 120

// ==== Exercise ====
// Let’s do some quick practice before your assignment! Rewrite the sumOfTripledEvens(array) function using these three methods. Once you are finished and you’ve tested that your function works correctly, check out the solution below.

// ==== Solution ====

function sum_of_tripled_evens(array) {
    return array.filter((fil) => fil % 2 === 0).map((ma) => ma * 3).reduce((total, items) => {
        return total + items;
    });
}
console.log(sum_of_tripled_evens([1,2,3,4,5,6,7])); // 36
