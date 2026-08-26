// Sort in decreasing order

let array = [1,4,3,5,2,8,9,-10,11];
const compareFn = (a, b) => (a > b ? -1 : 0);
console.log(array.sort(compareFn));

// check solution at {javascript.info} which is clean and shorter.
// =======--javascript.info Solution--=======
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );


// To memorize this, remember that (a, b) => a - b sorts numbers in ascending order. (MDN-docs)
// console.log(array.sort((a, b) => a - b)); // [-10, 1, 2,  3, 4, 5, 8, 9, 11]

// Then V8 and JavaScriptCore sorts it descendingly, as [9, 5, 4, 3, 1, 1], while SpiderMonkey returns it as-is: [3, 1, 4, 1, 5, 9]. (MDN-Docs).