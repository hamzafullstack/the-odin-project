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

// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events#listening_for_other_events

// listening for other events 
// there are many different events that can be fired by a button element,

// - focus and blur - the color changes when the button is focused and unfocused.
// dblclick - the color changes only when the button is doubleclicked.
// mouseover and mouseout - the color changes when the mouse pointer hover over the button or when pointer moves away.
// some events such as click are available nearly any element, other are more specific to the certain situations like play event is only for available on element that have play functionality such as <video>

// removing listeners 
// if you have added an eventlistener using addEventListener() you can remove it again if desired.. the most common way to do this is by using the removeEventListener() method.

// its very useful for large complex programs, it can improve efficiency. also the ability to remove event handlers allows you to have the same button performing a different actions in different circumstances.


// Adding multiple listeners for a single event
// by making more than one call to addEventListener() you can have multiple handler functions running in response

myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);
// Both functions would now run when the element is clicked.

// other event listener mechanisms
// MDN docs recommand that we should use addEventListener() method because it's the most powerful method and scales best with more complex programs.

// there are also two other event handlers that are no recommanded to use.

// event handler properties 

// onclick example 
const btn2 = document.querySelector('#btn2');

// btn2.onclick = () => {....}

// Inline event handlers — don't use these
// {/* <button onclick="bgChange()">Press me</button> */}
