//https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops#while_and_do...while

// MDN-Docs while and do while loops

// while and do...while
// for is not the only type of general loop available in JavaScript. There are actually many others and, while you don't need to understand all of these now, it is worth having a look at the structure of a couple of others so that you can recognize the same features at work in a slightly different way.

// while loop 
// -------------------------
// initializer
// while (condition) {
//    code to run

//   final-expression
// }
//----------------------------
// this works in a very similar way to the forloop.
// except that the initializer variable set before the loop.

// lets code a whileloop 
const animals = ['Dog', 'Cat', 'Lion'];
let myFavoriteAnimals = 'My Favorite Animals ';

let i = 0;
while (i < animals.length) {
    if (i === animals.length -1) {
        myFavoriteAnimals += `and ${animals[i]}.`;
    }else{
        myFavoriteAnimals += `${animals[i]},`
    }
    i++;
}
console.log(myFavoriteAnimals);

// do while is very similar but provides a variation on the while structure 

// do...while
// -----------------------------------
// initializer
// do {
//   // code to run

//   final-expression
// } while (condition)
// --------------------------------------

// In this case, the initializer again comes first, before the loop starts. 
// the code inside a do...while loop is always executed at least once.

const words = ['hello', 'World', 'Winter', 'Is', 'Coming'];
let englishWords = 'these are the words ';

// dowhile 
let a = 0;
do {
    if (a === words.length - 1) {
        englishWords += `${words[a]}.`;
    }else{
        englishWords += `${words[a]},`;
    }

    a++;
} while (a < words.length);
console.log(englishWords);


//-----Warning ⚠️⚠️⚠️⚠️⚠️⚠️⚠️--------------------
// Warning: With any kind of loop, you must make sure that the initializer is incremented or, depending on the case, decremented, so the condition eventually becomes false. If not, the loop will go on forever, and either the browser will force it to stop, or it will crash. This is called an infinite loop.
//----------------------------------------------------

// while (true) {
//     console.log('Hello! i am an infinite Loop');
// }
while (true) {
    console.log('Hello! i am an infinite Loop-1');
    console.log('Hello! i am an infinite Loop-2');
    console.log('Hello! i am an infinite Loop-3');
    break;
}