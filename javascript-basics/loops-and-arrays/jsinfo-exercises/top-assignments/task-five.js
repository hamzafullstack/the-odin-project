// Copy and sort array 

// array
let stack = ['HTML', 'Javascript', 'CSS', 'Postgreql', 'React', 'Nodejs'];
// sorting array without mutating the main array
let result = stack.toSorted(); // toSorted() short arrays without mutation.

console.log(result); // [ 'CSS', 'HTML', 'Javascript', 'Nodejs', 'Postgreql', 'React' ]
console.log(stack); // [ 'HTML', 'Javascript', 'CSS', 'Postgreql', 'React', 'Nodejs' ]


// lets do the same thing by declaring a function, i don't get it what exercise demands xd i choose both options

// ==== Second Solution with Function =======
function copySorted(array){
    return array.toSorted();
}
// ARRAY 
const arrayStack = ['javascript', 'CSS', 'HTML', 'Nodejs'];
let sorting = copySorted(arrayStack);

console.log(sorting); // [ 'CSS', 'HTML', 'Nodejs', 'javascript' ]
console.log(arrayStack); // [ 'javascript', 'CSS', 'HTML', 'Nodejs' ]


// ====  Not part of exercise, Just learned while reading (MDN-docs) for exercise solution ===
let nums = [1,2,3,4,5,8,9,1,19,10];
let sorted = nums.toSorted((a, b) => a - b);
console.log(sorted);


// ==== Javascript.info solution ====
// aahn i feel bad to use toSorted()
function copySorted(arr) {
  return arr.slice().sort();
}

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);