// Filter unique array members

function unique(array){
    return new Set(array);
}
let myArray = ['Ameer', 'Hamza', 'Hamza', 'kashif', 'Shoaib', 'Shoaib', 'Murad'];
let filtered = unique(myArray);
console.log(filtered); // Set(5) { 'Ameer', 'Hamza', 'kashif', 'Shoaib', 'Murad' }
// this has a problem its turning something strange which doesn't look array its objects ig..

// i checked the solution at javascript.info it was biggest mistake i checked and then realized why not my way of code then i found out my code is fixing the duplicate problem but it's not returning the array its returning an object which is i noticed after check the solution..... sh!t 

// jsinfo solution..
function uniqueArrays(arr) {
    let result = [];
    for(let str of arr) {
        if(!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

let arrayElements = ['Ameer', 'Hamza', 'Hamza', 'kashif', 'Shoaib', 'Shoaib', 'Murad'];
console.log(uniqueArrays(arrayElements));


// helpful resources
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// https://dev.to/clairecodes/how-to-create-an-array-of-unique-values-in-javascript-using-sets-5dg6

// A Set is a JavaScript collection that stores unique values only.
// new Set(array) Creates a new Set from an iterable, such as an array.
// Array.from(new Set(array)) This is a common pattern for removing duplicates from an array: