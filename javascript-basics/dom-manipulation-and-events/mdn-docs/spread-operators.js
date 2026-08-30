// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// Spread syntax (...)
// the spread syntax allows an iterable, such as an array or string to be expanded in places where zero or more arguments for (function calls) or elements(for array literals) are excepted. in an object literal, the spread enumerates the properties of an object and adds the key value pairs to the object being created.

// spread syntax looks exactly like rest syntax.
// spread syntax is the opposite of rest syntax.
// spread syntax === expands (unpack).
// rest syntax === collects (collection)

// syntax demo
function sum (x, y, z){
    return x + y + z;
}
const numbers = [1,2,3];
console.log(sum(...numbers));
// excepted output 6 
console.log(sum.apply(null, numbers));
// output 6.

// syntax.
// myfunction(a, ...iterableobj, b)
// [1, ...iterableobj, '4', 'five', 6]
// { ...obj, key: 'value'}

// Description:
// spread syntax can be used when all elements from an object or array need to be included in a new array or object. 

// js syntax 
const array = [1,2,3,4];
const obj = {...array}; // {0: 1, 1: 2, 2: 3}

// All primitives can be spread in objects. Only strings have enumerable own properties, and spreading anything else doesn't create properties on the new object.

const obj1 = { ...true, ..."test", ...10 };
// { '0': 't', '1': 'e', '2': 's', '3': 't' }


// Spread in function calls 
// replace apply()
// it's  common to use function.prototype.apply() in cases where you want to use the elements of an array as argument to function.

function myfunc(x, y, z) {}
const args = [0, 1, 2];
myfunc.apply(null, args);

// with spread syntax the above can be written as:
function myfunc1(x, y, z) {}
const arg = [1,2,3];
myfunc1(...arg);

// any argument in the argument list can be use spread syntax and spread syntax can be used multiple times

function myfunc2(v, w, x, y, z) {}
const arg2 = [0, 1, 2];
myfunc2(-1, ...arg2, 2, ...[3]);

// apply for new operator.
// when calling a cunstructor with new, its not possible to directly use an array and apply(), because apply() calls the target function instead of constructing it.
// but an array can be easily used with new thanks to spread
const dateFields = [2000, 2, 15]; // 15f2k
const d = new Date(...dateFields);

// spread in array literals.
// a more powerfull array literal.
const parts = ['Shoulders', 'Knees'];
const lyrics = ["Head", ...parts, 'and', "Toes"];
//  ["head", "shoulders", "knees", "and", "toes"]

// Just like spread for argument lists, ... can be used anywhere in the array literal, and may be used more than once.

// copying an array 
// you can use the spread syntax to make a shallow copy of an array. each array element retains its identity without getting copied.

const arr3 = [1, 2, 3];
const copyArr3 = [...arr3]; // like arr3.slice()
copyArr3.push(4);
// copyArr3 becomes [1,2,3,4]
// arr3 remain unaffected.

// spread syntax effectively goes one level deep while copying an array..
// it maybe unsuitable for copying multidimensional arrays.

// a better  way to concatenate arrays is array.prototype.concat() method.

// Note: Unlike unshift(), this creates a new arr1, instead of modifying the original arr1 array in-place.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

