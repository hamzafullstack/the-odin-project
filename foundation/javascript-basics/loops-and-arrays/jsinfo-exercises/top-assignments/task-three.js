// filter range in place 
function filterRangeInPlace(array, a, b) {

    for(let i = 0; i < array.length; i++){
        // if less or greater than range ;  splice(delete) ? will this work?
        if(array[i] < a || array[i] > b){
            array.splice(i, 1); // Removes the item if it is outside the range
        i--; // i tried without decrement, it was not working properly,
        //  after some google searchs i found this answer.
        //You need i-- because you are looping through the array, array at the same time mutating it (modifying it) 
        // i--; reverse the count which
        }
    }
}

// writing an array to test the code.
let arr = [1,2,5,4,8,9,7];
filterRangeInPlace(arr, 1, 4); // testing function
console.log(arr); // hope it work... Edit yes it did work hahahahaha