// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops
// MDN loop code,, learn more on the given source link..

// Looping Code 
// Programming languages are very useful for rapidly completing repetitive tasks, from multiple basic calculations to just about any other situation where you've got a lot of similar items of work to complete. Here we'll look at the loop structures available in JavaScript that handle such needs.

// Why are loops useful?
// Loops are all about doing the same thing over and over again. Often, the code will be slightly different each time round the loop, or the same code will run but with different variables.

// looping code example 
for (let i = 0; i < 3; i++) {
    console.log('hello world');
}

// With and without a loop
for (let a = 0; a < 5; a++) {
    console.log('hello A!');
    //  we are using a loop to run 5 iterations of this code,
}
// if we weren't using loop we do have to repeat (Hello A!) code every time. loops are very useful.. this would get very boring and difficult to maintain without loops.

// Looping through a collection
// Most of the time when you use a loop, you will have a collection of items and want to do something with every item.

// looping with arrays;
const bigCats = ['Lion', 'Caracal', 'Tiger', 'jaguar', 'Serval', 'Leopard', 'Your Girl Friend'];
for (const cats of bigCats) {
    console.log(cats);
}
// In this example, for (const cats of bigCats) says:
// bigCats get first items in the collection.
// assign it to the variable cats and run the code between the curly braces {}.
// get the next item, and repeat untill you reached the end of the collection.

// map() and filter()
function toUpper(str) {
    return str.toUpperCase();
    // will upercase its given args in map().
}
// Array.
const myProjects = ['Odin Recipes', 'Frosty Bliss Landing page', 'Rock Paper Scissors'];
// assigning to use map()method on array
const upperProjects = myProjects.map(toUpper);
// printing
console.log(upperProjects);
// [ 'ODIN RECIPES', 'FROSTY BLISS LANDING PAGE', 'ROCK PAPER SCISSORS' ] ~~ output.

// filter()
// You can use filter() to test each item in a collection, and create a new collection containing only items

// function again
function pBird(bird){
    return bird.startsWith('P');
}
const birds = ["Parrot","Penguin","Peacock","Pigeon","Pelican","Eagle","Sparrow","Falcon","Owl","Robin"];
const filtered = birds.filter(pBird);
console.log(filtered);
// this looks a lot like map() except the function we pass in returns a boolean..
// Note :  map() and filter() are often used with function expressions.

// array 
const coolSites = ['Github', 'Discord', 'Reddit', 'MDN-Docs', 'StackoverFlow', 'Javascript.info', 'Google',];
// with arrow function ~~ function expressions
const filtering = coolSites.filter((sites) => sites.startsWith('G'));
console.log(filtering);
// [ 'Github', 'Google' ]


// The standard for loop
// --------------------------------
// for (initializer; condition; final-expression) {
//    code to run
// }
// --------------------------------
// how for loop works?
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops#the_standard_for_loop


// Looping through collections with a for loop
// You can use a for loop to iterate through a collection, instead of a for...of loop.

// with for of 
const socialApps = ['Facebook', 'Whatsapp', 'Discord', 'Twitter', 'Instagram', 'Telegram'];

for (const apps of socialApps) {
    console.log(apps)
}

// without Of..~ We could rewrite that code like this: 
const ourCities = ['Karachi', 'Lahore', 'Hydrabad', 'Islamabad', 'Skardu', 'Quetta', 'Peshawar', 'Multan'];

for (let cities = 0; cities < ourCities.length; cities++) {
    console.log(ourCities[cities]);
}

// best to use for...of if you can.

// Sometimes you still need to use a for loop to iterate through an array. 

const theWords = ['Love', 'Peace', 'Respect'];

let myFavoriteWords = 'My Favourite words are ';

for (const word of theWords) {
    myFavoriteWords += `${word}, `;
}
console.log(myFavoriteWords);

// without for...of  and cleaner remove last ,

// Array 
const colleagues = ['Ibrahm', 'Abdul Wahab', 'Khoula', 'haris'];
//string.
let myColleagues = 'They are my colleagues ';
//loop
for (let colleague = 0; colleague < colleagues.length; colleague++) {
    if (colleague === colleagues.length - 1) {
        // we are at the end of the Array. 
        myColleagues += `and ${colleagues [colleague]}.`;
    }else{
        myColleagues += `${colleagues[colleague]},`;
    }
}
console.log(myColleagues);

// you can read  about the the loop description on mdn-docs link is given above.


// Exiting loops with break 

//  a break statement will immediately exit the loop and make the browser move on to any code that follows it.

