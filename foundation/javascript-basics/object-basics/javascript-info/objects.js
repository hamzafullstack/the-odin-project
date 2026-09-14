// objects in javascript 
// https://javascript.info/object

// intro
// as we know there are "Eight" data types in JavaScript. seven of them are called "primitive", because their values contain only a single thing.
// in contrast, objects are used to store keyed collections of various data and more complex entities. in JavaScript objects penetrate almost every aspect of the language. so we must understand them first before going in depth anywhere else.

// an object can be created with curly braces {...} with an optional list of properties. s property is a key value pair where key is a string also called property name, and value can be anything..

// creating an object 
let user = new Object(); // object constructor syntax.
let user1 = {}; // object literal syntax.
// usually, the curly braces {...} are used. that declaration is called an object literal.

// literals and properties 
let customer = { //an object
    name: 'Shoaib', // by key "name" stores value 'shoaib'
    age: 10 // by key "age" stores value 10.
};
// a property has a key(also known as name or identifier)

// we can add, remove or read files from it at any time
// property values are accessible using the dot notation.
console.log(customer.name); // shoaib
console.log(customer.age); // 10

// the value can be any type even booleans.

// to remove property we can use delete operator 
delete customer.age;

// we can also mutliword property names but they must be quoted.

const team = {
    'full name': 'Ameer Hamza Bugti', // multi word
    age: 26,
    'likes coding': true // multiword.
};
console.log(team);

// the last propety in the list may end with a comma,
const intern = {
    name: 'kashif',
    age: 11,
};
// that is called a "Trailing" or "hanging" comma. makes it easier to add/remove/move around properties because all lines becomes a like.

// square brackets.
// for mutliword properties, the dot access doesn't work we use square brackets to access the multiword properties.

const languages = {
    myLang: 'JavaScript',
    age: 31,
    'Worst language': 'English'
};

delete languages['Worst language'];
console.log(languages);

// square brackets also provide a way to obtain the property name as a the result of any expression.

const key = 'Love Coding';
languages[key] = true
// dot notation cannot be used in a similar way.

// computed properties 
// we can use square brackets in an object literal, when creating an object that's called computed properties.

let fruit = 'apple';
let bag = {
    [fruit + 'computer']: 5 // bag.appleComputer = 5
};

// square brackets are much more powerful than dot notation. they allow any property names and variables, but they are also more cumbersome to write.

// property value and shorthand.
// in real code we often use existing variable as values for property names 
function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...other properties
    };
}
let newUser = makeUser('Hamza', 26);
console.log(newUser.name); // Hamza..

// there is a special property value shorthand to make it shorter 
// instead of name: name, we can simply write name , 
function otherUser(name, age) {
    return {
        name,
        age,
        // ...other.
    };
}
// we can both normal properties and shorthand in the same object.

// propety names limitations 
// you can  use language-reserved words like for let return etc as key in objects..

// these properties are all right.
const obj = {
    for: 1,
    return: 2,
    let: 3,
    const: 4,
};

// in short, there is no limitation on property names.

// property existence test in operator.
// a notable feature of objects in javascript compared to many other languages, is that it's possible to access any property. there will be no error.

let prop = {};
console.log(prop.noSuchProperty === undefined); // true means no such property.

// special operator "in"
let cars = {toyota: 'Camry', nissan: 'Maxima'};
console.log('toyota' in cars); // true 
console.log('ford' in cars); // false

// the for..in loop.

let userTwo = {
    name: 'kavin',
    age: 27,
    isAdmin: true
};

for (let key in userTwo) {
    // for keys 
    console.log(key); // name, age, isadmin
    // for values of the keys 
    console.log(userTwo[key]); // kavin, 27, true
}

// note that all for constructs allow use to declare the looping variable inside the loop.

// ordered like an object 
// ordered in a special fashion, integer properties are sorted other appear in creation order. 

const codes = {
    '91': 'india',
    '92': 'Pakistan',
    '971': 'UAE',
    '1': "USA",
    '41': 'switzerland',
    '49': 'Germany',
    '999': 'Your MOM'
};
for (let code in codes) {
    console.log(code); // 1,41,49,91,92,971,999
}

// the object maybe used to suggest a list of options to the user,

// integer property? what is that ?
// the integer property term here means a string that can be converted to and from an integer without a change.

// if the keys are non-integer then they are listed in creation order.
