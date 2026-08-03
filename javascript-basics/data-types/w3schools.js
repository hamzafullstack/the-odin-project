// JavaScript String Methods from w3schools
// learn more about the javascript
// link https://www.w3schools.com/js/js_string_methods.asp

// string length
// The length property returns the length of a string:
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length); // 26
// Extracting String Characters
// JavaScript String charAt()
// The charAt() method returns the character at a specified index (position) in a string:
let text2 = 'hello world';
let char2 = text2.charAt(0);
console.log(char2); // h.
// JavaScript String charCodeAt()
// The method returns a UTF-16 code (an integer between 0 and 65535).
let text3 = 'Hello Hamza';
let char3 = text3.charCodeAt(0); //
console.log(char3); // 72 char code.

// codepointAt
// Get code point value at the first position in a string:
let text4 = 'hamza baloch';
let code4 = text4.codePointAt(0);
console.log(code4); // 104
// JavaScript String at()
// The at() method returns the character at a specified index (position) in a string.
const name = 'Ameer Hamza';
let letter = name.at(2);
console.log(letter); // e - 0,1,2 2=e
// Get the third letter of name:
// let letter = name[2]; 

// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.

let name1 = "kashif";
let letter1 = name1.at(-5);
console.log(letter1); // a

// Property Access [ ]

let propertyText = "My world";
let propertyChar = propertyText[0];
console.log(propertyChar); // m

// strict mode.
// "strict mode"

// js string concat() 
// concat() joins two or more strings. 
let userOne = 'Hamza';
let userTwo = 'Kashif';
let join = userOne.concat("message", userTwo);
console.log(join); // HamzamessageKashif
// The concat() method can be used instead of the plus operator. These two lines do the same:
let msg = 'hello' + ' ' + 'world'; // do the same as concat().
// All string methods return a new string. They don't modify the original string
// Strings are immutable: Strings cannot be changed, only replaced.
// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// JavaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.

let fruits = "Apple, grape, kiwi";
let parts = fruits.slice(7, 13);
console.log(parts); // grape,
let part = fruits.slice(7); //slice out the rest of the string:
console.log(part); // grape, kiwi.
// If a parameter is negative, the position is counted from the end of the string:
let part1 = fruits.slice(-12);
console.log(part1); //


// JavaScript String substring()
// substring() is similar to slice()
let team = "Russian, Chinese, Pakistani";
let select = team.substring(9, 14);
console.log(select); // chine.
// If you omit the second parameter, substring() will slice out the rest of the string.

// javascript string substr() 
// You are strongly advised to use substring() or slice() instead.

// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():
// A string is converted to lower case with toLowerCase():

// JavaScript String toUpperCase()
let upperCase = 'ameerhamzabugti';
let operation = upperCase.toUpperCase();
console.log(operation); // AMEERHAMZABUGTI
// JavaScript String toLowerCase()
let lowerCase = 'AMEER HAMZA BUGTI BALOCH';
let operation1 = lowerCase.toLowerCase();
console.log(operation1); // ameer hamza bugti baloch

// JavaScript String isWellFormed()
let formed = 'Hello World!';
result = formed.isWellFormed();
console.log(result); // true
let notformed = 'Hello world \uD800';
let result1 = notformed.isWellFormed();
console.log(result1); // false.
// A lone surrogate is a Unicode surrogate code point

// JavaScript String toWellFormed()
let welform = 'hello world \uD800';
let welformer = welform.toWellFormed();
console.log(welformer); //hello world �


// JavaScript String trim()
// removes whitespace from both sides of a string: 
let trimmer = "         hello   world!      ";
let trimmer1 = trimmer.trim();
console.log(trimmer1); // hello   world!
// JavaScript String trimStart()
// removes whitespace only from the start of a string.
// JavaScript String trimEnd()
// removes whitespace only from the end of a string.

// JavaScript String Padding
//  two new string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.

// JavaScript String padStart()
let padd = "5";
let padded = padd.padStart(4,"0");
console.log(padded); // 0005
// It pads a string with another string (multiple times) until it reaches a given length.
// The padStart() method is a string method.

// JavaScript String padEnd()
// The padEnd() method pads a string from the end.
let userName = 'Ameer hamza';
let userPadd = userName.padEnd(4, " ");
console.log(userPadd); //

// JavaScript String repeat()
// The repeat() method returns a string with a number of copies of a string.

let simpleName = "Muhammed Shoaib";
let repeater = simpleName.repeat(3);
console.log(repeater); // mohammed shoaib *2
// syntax = string.repeat(count)..

// Replacing String content. 
// The replace() method replaces a specified value with another value in a string:

let follow = 'Please follow me on Instagram!';
let replacer = follow.replace('Instagram', 'Github');
console.log(replacer); //Please follow me on Github!
// By default, the replace() method replaces only the first match: 
// To replace case insensitive, use a regular expression with an /i flag (insensitive):
// To replace all matches, use a regular expression with a /g flag (global match):

// JavaScript String ReplaceAll()
// In 2021, JavaScript introduced the string method replaceAll():

let animals = 'DonaldTrump, Netanyahu';
animals1 = animals.replaceAll('donaldTrump', "netanyahu");
console.log(animals1); //

// Converting a String to an Array
// JavaScript String split()

let foxy = 'Hi Fox!';
foxy.split('');
// If the parameter is " ", the returned array will be an array of words:
let wordMaster = "A Quick brown fox jumps";
wordMaster.split("");
// Using split("") is unsafe

// for references you can visit w3schools official website. 

// exercise 
// exercise submited to w3schools official site no need to code on personal code editor. | MCQs type exercise..