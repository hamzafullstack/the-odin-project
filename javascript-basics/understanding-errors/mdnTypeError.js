// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError

// Type Error 

// The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.

// creating a TypeError

try {
  throw new TypeError("Hello");
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Stack of the error
}

// Happy independence of Pakistan..
