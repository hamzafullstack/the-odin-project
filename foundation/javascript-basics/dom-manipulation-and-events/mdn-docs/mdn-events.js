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

// myElement.addEventListener('click', functionA);
// myElement.addEventListener('click', functionB);
// Both functions would now run when the element is clicked.

// other event listener mechanisms
// MDN docs recommand that we should use addEventListener() method because it's the most powerful method and scales best with more complex programs.

// there are also two other event handlers that are no recommanded to use.

// event handler properties 

// onclick example 
const btn2 = document.querySelector('#btn2');
function message(){
    alert('smile');
}
btn2.onclick = message;

// Inline event handlers — don't use these
// {/* <button onclick="bgChange()">Press me</button> */}

// event handler properties have disadvantages compared to addEventListener(). one of the most significant is that you can't add more than one listener for single event.

// you use HTML Attributes inside event handlers but you should use, they are considered bad practice.

// its not a good idea to mix up your HTML and Javascript. as it becomes hard to read. keep your JavaScript separated is a good practice, and if its separated you can apply it to multiple HTML documents.

// even if its a single file still inline event handlers are not a good idea. when project grows it would quickly turn into a maintenance nightmare.

// event listener for all buttons 
const buttons = document.querySelectorAll('button');

for(const button of buttons) {
    button.addEventListener('click', changeBackground);
}
//many common server configuration will disallow inline javascript, as a security measure.

// Event Objects.
// you may see inside an event handler function you'll see a parameter specified with name such as event, evt, e this is called the event object...

const btn3 = document.querySelector('#btn3');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function bgChanged(e){
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}
btn3.addEventListener('click', bgChanged);

// target property 
// e.target is a button itself. the target property of the event object is always a reference to the element the event occured upon. setting a random background color on the button not the page.

// note:  you can use any name you like for the event object - you just need to choose a name that can reference inside the event handler function e, evt, event so on...


// extra properties of event objects 
// most event objects have a standard set of properties and methods

const textBox = document.querySelector('#textBox');
const output = document.querySelector('#output');
textBox.addEventListener('keydown', (event) => {
    output.textContent = `You Pressed "${event.key}".`;
});

// preventing default behaviors
// you will come across a situation where you want to prevent an event from doing what it does by default. the most common example is that of a web form, like a custom registration form, 
// normally we fill the form and submit it, and server process and browser to be redirected to "success message". etc 

// the trouble comes when the user has not submitted the data correctly - as a developer, you want to prevent the submission to the server. and give an error messag saying what is wrong and what need to be done to put things right. some browsers support automatic form data validation feature but some dont. you are advised to not rely on those and implement your own validation checks.

// form validation / preventDefault()

const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

form.addEventListener('submit', (e) => {
    if (fname.value === "" || lname.value === "") {
        e.preventDefault();
        para.textContent = 'You need to fill in both names';
    }
});
// this is pretty weak form validation - but its okay for example purposes.

// its not just webpages 
// events are not unique to javascript, most programming languages have some kind of event model, and the way the most model works often differs from javascript's way.

// events model in JS for web pages and event model for JS other enviroments are different.
// nodejs runtime and browser js event differs...


// THE END 