// js events
// https://www.javascripttutorial.net/javascript-dom/javascript-events/

// introduction to javascript events
// in javascript an event is something that happens in the browser. for example click a button, moving the mouse, loading a page, 
// you can react to events by running a function when the event occurs. the function is called an event handler or listener.

let btn = document.querySelector('#btn');

function handleClick() {
    alert('You clicked the button');
}

btn.addEventListener('click', handleClick);

// a shorter way to register an event handler is to place all code in an anonymous function.

let btn2 = document.querySelector("#btn2");

btn2.addEventListener('click', function() {
    alert('Yeaah! You clicked me too');
});

// Alternatively you can use Arrow function =>.

const btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', () => {
    alert('aahn i am from => function');
});

// event flow 
// when you click the button, the event can move through the page.

// event bubbling.
// in the event bubbling model, an event starts at the specific element and then flows upward to ward the least element(the document or even window).

// note: that modern web browsers bubble the event up to the window object.

// Event Capturing.
// in the event capturing model an event starts at the least specific element and flows downward toward the most specific element.

// DOM level 2 event flow 
// top to bottom and again bottom to top 

// event Object 
// when the event occurs, the web browser passes an event object to the event handler.

const btn4 = document.querySelector('#btn4');

btn4.addEventListener('click', function(event) {
    console.log(event.type); // 'click'
});

// note that the event object is only accessible inside the event handler. once all the event handlers have been executed, the event object is automatically destroyed.

// preventDefault().
// to prevent default behavior of an event, you can use the preventDefualt() method.

const link = document.querySelector('a');
link.addEventListener('click', function(event) {
    console.log('clicked');
    event.preventDefault(); // it won't allow to direct jstut.net
});
// Note the preventDefault() method does not stop the event from bubbling up the DOM.

// stopPropagation() method
// stopPropagation() method immediately stops the flow of an event dom tree. but it does not stop the browser's default behavior.

const btn5 = document.querySelector('click', function(event) {
    console.log('the button was clicked!');
    event.stopPropagation();
});

document.body.addEventListener('click', function(event) {
    console.log('the button was clicked!');
});

// without the stopPropagation method you would see two messages on the console window.