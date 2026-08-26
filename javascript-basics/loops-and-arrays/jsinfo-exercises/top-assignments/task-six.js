// Shuffle an array

function shuffle(array){
    return array.sort(() => Math.random() - 0.5);
}
const arr = [1,2,3,4,5];
let shuffled = shuffle(arr);
console.log(shuffled);

// https://javascript.info/array-methods#shuffle-an-array
// ==== Notes: ====
// i'll come back fisher yates  exercise after learning the objects, for now my solution is also fulfiling the exercise demand but not in the best way... but technically i does something...

