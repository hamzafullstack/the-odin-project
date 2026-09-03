// events 
// https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#events

// events in javascript 
// events are how you make that magic happen on your pages. events are actions that occur on your webpages, such as mouse-clicks or key-presses. using javascript, we can make our webpage listen to and react to these events.

const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World!');

// Guide on arrow function
// https://javascript.info/arrow-functions-basics

let sum = (a, b) => a + b; // arrow function.

// its better  use addEventListener() because its modern.
const btn2 = document.querySelector('#btn2');
btn2.addEventListener("click", () => { console.log('Hello Dickhead'); });

// regular function 
function command() {
    alert("Pant's down, spread your legs bitch.");
}
// selecting third button using his id in q/s().
const btn3 = document.querySelector('#btn3');

// old method onclick..
btn3.onclcik = command;

// new method addEventListener()
btn3.addEventListener('click', command);

// using named functions can clean up your code considerably, and is a really good idea if the function is something that you are going to want to do in multiple places..

const btn4 = document.querySelector('#btn4');
// passing param to the function that we are calling
btn4.addEventListener('click', function (smile) {
    console.log(smile);
});

// understanding callbacks 
// when we pass in command or function (smile){...} as an argument to addEventListener, we call this a callback.A callback is simply a function that is passed into another function as an argument.

// the  smile parameter in that callback function contains an object that references the event itself. 
// javascript knows the parameter is an event because an eventlistener callback takes an event object by definition.

// learn more about event objects on MDN-docs 
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events#event_objects

// attaching listeners to group of nodes.
// this might seem like a lot of code if you're attaching lots of similar event listeners to many elements.
// there are few ways to do it efficiently like we can use querySelectorAll('selector')...

// button is a node list. looks & acts similar to an array
const buttons = document.querySelectorAll('button');

// forEach method to iterate through each function.
buttons.forEach((button) => {
    // for each one we add a click listener.
    button.addEventListener('click', () => {
        alert(button.id);
    });
});

// this is just the tip of the iceberg, when it comes to dom manipulation and event handling,, 
// some useful event include: 
// click, dblclick, keydown, keyup,


// w3schools references
// https://www.w3schools.com/jsref/dom_obj_event.asp

// javascripttutorial.net other events 
// https://www.javascripttutorial.net/javascript-dom/javascript-events/
// https://www.javascripttutorial.net/javascript-dom/javascript-mouse-events/
// https://www.javascripttutorial.net/javascript-dom/javascript-keyboard-events/
// https://www.javascripttutorial.net/javascript-dom/javascript-event-delegation/
// https://www.javascripttutorial.net/javascript-dom/javascript-dispatchevent/
// https://www.javascripttutorial.net/javascript-dom/javascript-custom-events/

// read and understand callbacks
// https://dev.to/i3uckwheat/understanding-callbacks-2o9e

// MDN  exercise to test skills 
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting#doing_some_basic_dom_manipulation
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting#creating_a_dynamic_shopping_list

