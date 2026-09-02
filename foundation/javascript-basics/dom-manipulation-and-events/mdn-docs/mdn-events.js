// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events#

// Introduction to events

// events are things that happen in the system you are programming, which the system tells you about so your code react to them.
// example: if the user clicks a button on a webpage, you might want to react to the action by displaying an information box...

// what is an event?
// events are things that happen in the system you are programming - the system produces or fires a signal of some kind when an event occurs, and provides a machanism by which an action can be automatically taken, that is some code running, when the event occurs... 
// events are fired inside the browser window, and tend to be attached a specific item that resides in it.
// this might be a single element, a set of element, the HTML document loaded in the current tab, or the entire browser window. there many types of events that can occur.

// we can attach an event listener to it.

// for example we have a button to change its color 

// javascript code 
const btn = document.querySelector('#btn');

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener('click', () => {
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    document.body.style.backgroundColor = randomColor;
});

// using addEventListener()
// as we saw in the last example, objects that can fire events have an addEventListener() method, and this is the recommanded mechanism for the adding event listeners.

// closer look at the code from last example 
// the HTML  button #btn will fire a click event when the user clicks it.
// addEventListener() method on it to add an event listener, it takes two parameters,
// the string "click" to indicate that we want to listen to the click event. button can fire lots of other events such as mouseover when the user moves their mouse over the button or keydown when user presses a key and the botton is focuesed.
// a function to call when the event happens. in our case, the defined anonymous function generates a random RGB color and sets the background-color of the page body to the color...

// NOTE: you could also create a separate named function and reference that in the second parameter of addEventLister().....

// selecting button via its ID #btn2
const btn1 = document.querySelector('#btn1');

// function for random numbers
function randomOne(num){
    return Math.floor(Math.random() * (num + 1));
}

// function to change backgroundColor
function changeBackground() {
    const randomBgColor = `rgb(${randomOne(255)} ${randomOne(255)} ${randomOne(255)})`;
    document.body.style.backgroundColor = randomBgColor;
}

// set addEventListener() on #btn1 param click + function
btn1.addEventListener('click', changeBackground);

