// Mouse events in javascript..
// https://www.javascripttutorial.net/javascript-dom/javascript-mouse-events/

// Javascript mouse events..
// basic mouse events and their properties in javascript.

// Introduction to JavaScript mouse events.
// Mouse events fire when you use the mouse to interact with the elements on the page. DOM Level-3 events define 10 mouse events: 1.mousedown 2.mouseup 3.click 4.dblclick 5.mousemove 6.mouseover 7.mouseout 8.mouseenter 9.mouseleave 10.wheel(added for scrolling).

// when you click an element, there are no less than three mouse events fire in the following sequence.
// 1. the mousedown fires when you press the mouse button on the element.
// 2.mouseup fires when you release the mouse button on the element.
// the click fires when you on mousedown and one mouseup detected on the element.
// mousedown ---> mouseup ---> click

// dblclick event.
// in practice you will rarely use the dblclick event. the dblclick event fires when you double-click over an element.
// mousedown->mouseup->click->mousedown->mouseup->click=dblclick.

// mousemove event.
// the mousemove event fires repeatedly whenever you move the mouse cursor around an element.
// this mousemove event fires many times per second as the mouse is moved around, even if it's just by one pixel.
// this may lead to a performance issue if the event handler function is complex.
//always avoid performance issue, its good practice to add mousemove event handler when its needed otherwise dont add it.

// element.onmousemove = mouseMoveEventHandler;
// ...
//  later, no longer use
// element.onmousemove = null;

// wheel event.
// the event fires when the user scrolls the wheel or touchpad.
// element.addEventListener('wheel', e => console.log(e.deltaY));

// mouseover / mouseout event.
// mouseover - fires when the pointer enters the element or any of its children. it bubbles.
// mouseout - fires when the pointer leaves the element or any of its children. it bubbles.

// for performance reason, you should consider throttling or debouncing the mousemove handler instead of removing it completely if you need it to run continuesly.

// mouseenter / mouseleave
//mouseenter - fires when the pointer enter the element itself only. it doesnot bubbles.
//mouseleave - fires when the pointer leaves the element itself only. it doesnot bubble.

// registering mouse event handlers is very simple
// select element by querySelector() or getElementById()
// then register the mouse event using the addEventListener() method.

const btn = document.getElementById('btn');
btn.addEventListener('click', (event) => {
    alert('clicked!');
});


// detecting the mouse buttons.
// the event object passed to the mouse event handler has property called button that indicates which mouse button was pressed on the mouse to trigger the event.

// the mouse button is represented by a number.

