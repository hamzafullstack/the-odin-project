// JavaScript custom events
// https://www.javascripttutorial.net/javascript-dom/javascript-custom-events/

// custom events 
// in javascript standard events are provided by the web browser tht you can listen to and respond to, click, input, submit, the browser automatically theses events when something happens like mouse click document loading and so on.

// custom events are events that you define and dispatch yourself. custom events allow you to create your own communication system between different parts of your app.

// the following calls the function and adds a border to a div element 

function highlight(elem, callback) {
    elem.style.backgroundColor = 'yellow';

    if(callback && typeof callback === 'function') {
        callback(elem);
    }
}

const demo = document.querySelector('#demo');
function addBorder(elem) {
    elem.style.border = 'solid 1px red';
}
highlight(demo, addBorder);

// to make code more flexible you can use custom events.

// creating javascript custom events
// to create custom event you use the CustomEvent() constructor.

// let event = new CustomEvent(eventType, options);

// the CustomEvent() has two parameters 
// the eventType is a string that represents the name of event.
// the options is an object has the detail property that contains any custom information about the event.

// customEvent inherits form the regular event object and adds the details property for passing custom data.

// javascript custom events with dispatchEvent()

function highLight(elem) {
    const bgColor = 'Green';
    elem.style.backgroundColor = bgColor;

    // creat the event..
    const event = new CustomEvent('mark', {
        detail: {
            backgroundColor: bgColor
        }
    });

    // dispatch the event 
    elem.dispatchEvent(event);
}

// select the div element.
const demo2 = document.getElementById('demo2');

// add border style 
function addingBorder(elem){
    elem.style.border = 'solid 5px blue';
}

// listen to the highLight event 
demo2.addEventListener('mark', function(e) {
    addingBorder(this);

    //examine the background.
    console.log(e.detail);
});

highLight(demo2);


// why use custom events? 
// custom events allow you to decouple code execution, allowing you one piece of code to run after another completes.

// summary 
// Use the CustomEvent() constructor to create a custom event and dispatchEvent() to trigger the event.