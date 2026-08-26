// filter Range
// function banana hai aur isme se range k item niaklne hai jaise ke 1 se 4 tak konse item 1 se 4 tak ate hain woh nikalne hai
// aur woh original array ko cherna nahi hai new array me hi jo hai nikalne hai filtered items ka apna hi array ho


function filterRange(array, a, b) {
    return array.filter(item => (item >= a && item <= b));
}

let arr = [1,2,3,5,4,8,10,9];
console.log(filterRange(arr, 1, 8));

