/* 
get average age exercise solution.
https://javascript.info/array-methods#get-average-age
*/

// OBJECTS
const ameer = {name: 'Ameer Hamza', age: 26};
const kashif = {name: 'Muhammed Kashif', age: 11};
const zahid = {name: 'Zahid', age: 15};

// store objects in array 
const users = [ameer, kashif, zahid];

// declaring a function get average age
function getAverageAge(getUser) {
    let totalAge = getUser.reduce(
        (accumulator, currentValue) => accumulator + currentValue.age, 0);
    return totalAge / getUser.length;
}
console.log(getAverageAge(users));


/* 
        =====PseudoCode=====
START
        CREATE YOUR OBJECT TO STORE USERS WITH THERE AGE
        CREATE AN ARRAY AND STORE OBJECTS IN LIST
        WRITE A FUNCTION GET AVERAGE AGE WITH A PARAMETER
        CREATE A VARIABLE TO PERFORM OPERATION WITH REDUCE() METHOD TO SUM THE AGE OF ALL USERS
        RETURN REDUCE METHOD'S ACCUMULATOR ÷ AND THE VARIABLE CONTAINS REDUCE METHOD.
END
*/