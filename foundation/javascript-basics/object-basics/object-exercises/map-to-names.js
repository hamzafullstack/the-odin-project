// map to names 
// https://javascript.info/array-methods#map-to-names

// solution 
const users = [
  { name: "Ali", age: 20 },
  { name: "Ahmed", age: 25 },
  { name: "Hamza", age: 22 }
];
let names = users.map(user => user.name);
console.log(names); // [ 'Ali', 'Ahmed', 'Hamza' ]