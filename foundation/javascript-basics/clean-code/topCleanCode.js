// Lesson: clean code : The Odin Project ~ foundations.
// https://www.theodinproject.com/lessons/foundations-clean-code

// what is clean code? 
// code examples.

// bad code 
const x= function (z){
   const w = "Hello ";
return w +  z

 }

x("John");
// its not readable, variable names are confusing, unwanted space and no space etc

// good code 
const generateUserGreeting = function (name) {
  const greeting = "Hello ";
  return greeting + name;
};

generateUserGreeting("John");
// clean code, its readable variable names says what is coming, evenly spaces and so on.


// About camelCase
// camelCase is a naming convention that allows writing multiple words together without spaces or punctuation. In camelCase, when a variable name consists of multiple words like our setTimeout example, the first word is written completely in lowercase, while the first letter of the second word (and any subsequent words) are capitalized

// for javaScript most of the time you use the camelCase writing, its naming convention for javascript but its just a convention, does break your code, you may land on job where the company some rules you cant use camelCase you have to use maybe the snake_case_writing.


// Conventions are only conventions
//  in reality, every organization will have different specific approaches, some of which may differ slightly from our examples in this lesson. Nothing is absolute.

// Naming functions and variables
// Let’s break down further what makes a good variable or function name
// A good name is descriptive
// name variables and functions according there work, like generateusergreeting, userName, userAge, gameScore, scoreCard etc

// Use consistent vocabulary
// Variables of the same type ideally follow a consistent naming system. Consider the following examples from a game:

// Consistent naming
// function getPlayerScore();
// function getPlayerName();
// function getPlayerTag();

// Inconsistent naming
// function getUserScore();
// function fetchPlayerName();
// function retrievePlayer1Tag();


// Variables should preferably begin with a noun or an adjective (that is, a noun phrase), as they typically represent “things”, whether that thing is a string, a number etc. Functions represent actions so ideally begin with a verb.

// Preferable
const numberOfThings = 10;
const myName = "Thor";
const selected = true;

// Not preferable (these start with verbs, could be confused for functions)
const getCount = 10;
const showNorseGods = ["Odin", "Thor", "Loki"];

// Preferable
function getCount() {
  return numberOfThings;
}

// Not preferable (myName doesn't represent some kind of action)
function myName() {
  return "Thor";
}

// Use searchable and immediately understandable names
setTimeout(stopTimer, 3600000); // confusing...


const ONE_HOUR = 3600000; // Can even write as 60 * 60 * 1000;

setTimeout(stopTimer, ONE_HOUR);
// The variable is declared with a descriptive name, and you don’t need to perform any calculations when reading this code.

// This is a convention to be used when the programmer is absolutely sure that the variable is truly a constant, they use "uppercase" variable names.
// Remember, this is only a convention.

// Indentation and line length
// Now it’s time to head to more “controversial” topics (there’s a joke about the war between coders who indent with spaces versus tabs).
// someone's very useful response from the giving reddit link : https://www.reddit.com/r/programming/comments/p1j1c/tabs_vs_spaces_vs_both/

// response: 
// sumsarus • 15y ago
// I spent the larger part of my life until now being a coding-style fundamentalist. Intense hatred for tabs was part of my religion.
// After I got my first real programming job where I had to get along with 30+ other programmers working full-time on the same code base as me, I realized that there's little to no point arguing about stuff like this. As long as the style is fairly consistent within a single project, it simply does not matter.
// It takes one day at most to get used to any other coding style.

// -----------------------------------------------------
// consistency matters, choose a way to indent and stick to it.. various javascript style guides recommand different options.


// Line length
// you should keep 80 charectors line length. 
// Different formats aren’t necessarily right or wrong, and different people may prefer different things. Do things in a way that makes sense to you, and stay consistent with it.
// You could format it like this
let reallyReallyLongLine =
  something +
  somethingElse +
  anotherThing +
  howManyTacos +
  oneMoreReallyLongThing;
  // its good and readable..
  
//   Semicolons
// semicolons are optional in javascript but This functionality can break in certain situations, leading to bugs in your code, so we’d recommend getting used to adding semicolons.
// Whether you do or not, again, consistency is the main thing..

// About comments
//  it might be tempting to have comments that explain everything the code is doing. This is generally not a good practice.

// Don’t comment when you should be using git
// It might be tempting to have comments in your code that explain the changes.

// Good comments explain the reasons behind a piece of code. Sometimes you won’t even need a comment at all!

// Function to extract text
function extractText(s) {
  // Return the string starting after the "[" and ending at "]"
  return s.substring(s.indexOf("[") + 1, s.indexOf("]"));
}

// good comment 
// Extracts text inside square brackets (excluding the brackets)
function extractText(s) {
  return s.substring(s.indexOf("[") + 1, s.indexOf("]"));
}


// conclusions. 


// "Great code comes from experience. Experience comes from not-so-great code."

// assignments 
// https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/
// https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/
// https://blog.codinghorror.com/coding-without-comments/
