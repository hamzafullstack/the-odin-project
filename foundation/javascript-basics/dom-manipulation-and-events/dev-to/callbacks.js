// Understanding callbacks in javascript.
// https://dev.to/i3uckwheat/understanding-callbacks-2o9e

// understanding the callbacks 
// callbacks seem to be sticking point for people new to programming. put simply, callbacks are functions that are passed into another function as an argument..

// anatomy of a function 
// javascript has many ways of defining a function, but they all follow a similar pattern and have the same pieces, they just look a bit different.

// normal functions (named functions)
// normal functions probably the first way you learned about creating function, also known function declaration.
function funkyfunction(music, isWhiteBoy) {
    if(isWhiteBoy) {
        console.log('Play: ' + music);
    }
}
// this is actually called function declaration.
// calling the function 
funkyfunction('that lol music', true);

// Anonymous functions
// these are very similar to normal functions, with just few differences. anonymous functions are not named and have few different syntaxes.

const lol = function() {
    return 'lol string';
}
console.log(lol());
// Anonymous functions are mostly used by passing them into other functions as a callback.

// an amonymous function is just a function that doesn't have a name, this doesn't mean that it cannot be called.

// Arrow functions 
// these are just shorter way to write a function,

// What Callbacks Look Like
// You most likely have seen or even used callbacks and not realized it. they are used frequently in javascript. understanding javascript is impossible without understanding callbacks.

const notes = ['do', 'your', 'gf', 'sucks', 'your', 'fingers'];
notes.forEach((note) => console.log(note));
// this is the forEach array method. this method simply takes a callback function as its argument. don't forget that foreach is a function itself (method.).

// there are also other way to do the same thing 
const array = ['Dog', 'Cat', 'You'];
array.forEach(function(arr) {
    console.log(arr);
});

const laptop = ['Thinkpad', 'is', 'best'];
// this one is tricky.
laptop.forEach(console.log);

// how callbacks work 
// To state it once more: callbacks are just functions passed into other functions as arguments(as a parameter).

// iterator functions 
// this is what forEach() might look like under the hood.
function myForEach(array, callback) {
    for(let index = 0; index < array.length; index++) {
        callback(array[index]); // this is when the callback function gets called, or executed.
    }
}
//array 
const myArr = [1,2,3,4,5,6];
// calling the function.
myForEach(myArr, (item) => {
    console.log(item + 2);
});
// where did item come from???
// this came from the function myForEach calling the Callback with an argument.

// another good example of how callbacks work might be the .map method.

function myMap(array, callback) {
    const myNewArray = [];
    
    for (let index = 0; index < array.length; index++) {
        const callbackResult = callback(array[index]);
        myNewArray.push(callbackResult);
    }
    return myNewArray;
}
// This could be called like this.
const addedArray = myMap([1,2,3,4], (arrNum) => {
    return arrNum + 2;
});