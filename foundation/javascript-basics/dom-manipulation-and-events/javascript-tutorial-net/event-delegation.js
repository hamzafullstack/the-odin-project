// JavaScript Event Delegation 
// https://www.javascripttutorial.net/javascript-dom/javascript-event-delegation/

// how to use the javascript event delegation that adds a single event handler to the parent element instead of having to register multiple event handlers to the child element.

// in javascript if you have a large number of event handler on a page, these event handlers will directly impact the performance because of the following reasons.

// each event handler is a function which is also an object that takes up memory, the more objects in the memory the slower the performance.

// it takes time to assign all the event handlers, which causes a delay in the interactivity of the page...

// to solve this issue, you can leverage the event bubbling.

// instead of having event handlers., you can assign a single event handler to handle all the click events.

const menu = document.getElementById('menu');

menu.addEventListener('click', (event) => {
    const target = event.target;

    switch(target.id) {
        case 'home':
            console.log('Home menu item was clicked!');
            break;
        case 'dashboard':
            console.log('Dashboard menu item was clicked!');
            break;
        case 'report':
            console.log('Report menu item was clicked!');
            break;
    }
});

// javascript event delegation benefits
// less memory usage,
// less time is required to set up event handler on the page.
// the document object is available immediately as long as the element is rendered, it can start functioning correctly without delay,

// summary 
// having large number of event handlers will take up memory and degrade the performance of a page.

// the event delegation technique utilizes the event bubbling to handle the event at a higher level in the dom than the element on which the event originated.
