// javascript Object basics...
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics

// Object Basics 
// an object is a collection of related data and or functionality. 
// consist of several variables and functions (which are called properties and methods when they are inside objects).

// Object..
const personOne = {}; // an empty object.
// console.log(personOne); // {} returns empty curly braces.

const person = {
    name: ['Hamza', 'Kashif'],
    age: 26,
    bio: function() {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function() {
        console.log(`Hi i'm ${this.name[0]}.`);
    },
};

// lets give it a try and test the script.
person.name; // no log.
person.name[0]; // no log.
person.age; // no log
person.bio(); // Hamza Kashif is 26 years old.
person.introduceSelf();
// hy i am hamza.

// the value of an object member can be pretty much anything. number, string, special sign etc.


// when the object's members are functions there's a simpler syntax instead of normal one bio: function 
//  we go like this bio() {..func block..}.

const developer = {
    name: ['Ameer Hamza'],
    age: 26,
    // simpler syntax for function inside object.
    bio() {
        console.log(`${this.name[0]}  is ${this.age} years old.`);
    },
    introduceSelf() {
        console.log(`Hello! I am ${this.name[0]}`);
    },
};
// calling our methods
developer.bio();
developer.introduceSelf();
// from now on, we will use this shorter syntax - MDN-docs.

// an object like this is referred as an object literal.
// its very common to create an object literal when you want to transfer series of structured, related data items in some manner,