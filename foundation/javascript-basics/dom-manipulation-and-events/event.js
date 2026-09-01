// https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#events

// events in javascript 
// events are how you make that magic happen on your pages. events are actions that occur on your webpages, such as mouse-clicks or key-presses. using javascript, we can make our webpage listen to and react to these events.

const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World!');

// Guide on arrow function
// https://javascript.info/arrow-functions-basics

let sum = (a, b) => a + b; // arrow function.
