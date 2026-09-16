// Create Keyed Object From Array..
// https://javascript.info/array-methods#create-keyed-object-from-array

const users = [
    {id: 'ameer', name: 'Ameer Hamza', age: 26},
    {id: 'zahid', name: 'Zahid Hussain', age: 15},
    {id: 'kashif', name: 'Muhammed Kashif', age: 11},
];

function groupById(getUser) {
    let grouping = getUser.reduce((accumulator, currentUser) => {
        accumulator[currentUser.id] = currentUser;
        return accumulator;
    }, {});
    return grouping;
}

const grouped = groupById(users);
console.log(grouped);

/* 
The output:
{
  ameer: { id: 'ameer', name: 'Ameer Hamza', age: 26 },
  zahid: { id: 'zahid', name: 'Zahid Hussain', age: 15 },
  kashif: { id: 'kashif', name: 'Muhammed Kashif', age: 11 }
}
*/

/*  
additional helpful sources to understand this exercise challenging parts 

https://wesbos.com/javascript/09-gettin-loopy/52-looping-and-iterating-reduce
https://forum.freecodecamp.org/t/example-in-use-the-reduce-method-to-analyze-data/461959
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
https://stackoverflow.com/questions/38255235/an-explanation-for-this-context-of-the-reduce-method-and-object-assign
https://www.freecodecamp.org/news/how-to-use-javascript-array-reduce-method/

*/


// ALT + SHIFT + A === 'Long Comment' /*  */