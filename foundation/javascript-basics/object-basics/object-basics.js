// https://www.theodinproject.com/lessons/foundations-object-basics

// The Odin Project - Object basics

// this is the last lesson of foundation course, 
// in this lesson i'll learn objects - a collection of key-value pairs - as well as some more powerful and commonly used array methods.

// Object and arrays are really powerful and widely used in javascript.

// Objects
// objects are a very important part of the javascript language, and while for the most of part you can accomplish simple and even intermediate tasks without worrying about them. almost every real project is going to feature objects.


// differences between objects and primitives
// earlier in the curriculum you have learned about primitive data types,
// the main difference between the two is that primitive can contain only a single thing (string, number etc). objects data types are used to store a collection of data and more complex entities.

let data = 42;
// data will store a copy of what data contains 
let datacopy = data;
datacopy = 43; // changing wont affect the data's data
console.log(data); // 42.
console.log(datacopy); // 43.

// on the other hand when you define an object variable it will contain a reference to the object provided to it.
const obj = {data: 42};
//obj copy
const objcopy = obj;
// making changes to copy with apply to original aswell.
objcopy.data = 44;
console.log(obj);
console.log(objcopy);

// this behavior isnt new to you, in your last project you made changes to the cells in the etch a sketch grid by using references.

// reassigning object data type variables
// when we mutate an object that referenced by multiple variables, the changes will be visible through all those variables..
// reassigning one of those variables to new object will not also reassign the other variable.

let animal = {species: 'rabbit'};
let rabbit = animal;
// reassigning animal variable with completely new object
animal = {species: 'cat'};
console.log(animal); // cat
console.log(rabbit); // rabbit

// usefull links
// https://javascript.info/object
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics
// https://www.youtube.com/watch?v=HB1ZC7czKRs
// https://www.youtube.com/watch?v=QNmRfyNg1lw

