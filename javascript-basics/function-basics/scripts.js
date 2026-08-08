// Function basics from The odin project foundation..
// https://www.theodinproject.com/lessons/foundations-function-basics

// Imagine taking one of your scripts and bundling it into a little package that you could use over and over again without having to rewrite or change the code. That’s the power of functions, and they’re used constantly in JavaScript.

// Functions
// Let’s discuss parameters and arguments in the context of the following example function:

function favoriteAnimal(animal) {
    return animal + " Is My Favorite Animal!";
}
const message = favoriteAnimal('Cat');
console.log(message);
// another function.
function hatedAnimal (animo) {
    return animo + " is the animal i hate most! ";
}
const messageZero = hatedAnimal('Netanyahu'); // pig.
const messageOne = hatedAnimal('Donald Trump'); // Tomhawk missile..
console.log(messageZero + messageOne); // Minab : 

function myPet(pet) {
    return pet + " is my cat name!"
}

console.log(myPet('Nolan')); // without first storing it in a separate variable..

