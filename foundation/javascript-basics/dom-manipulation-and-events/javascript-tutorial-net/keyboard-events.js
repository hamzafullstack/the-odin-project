// javascript Keyboard Events
// https://www.javascripttutorial.net/javascript-dom/javascript-keyboard-events/

// how to work with javascript keyboard events including keydown, keypress, and keyup.

// when you interact with the keyboard the keyboard events are fired.

// keydown - fires when you press a key on keyboard.
// keyup - fires when you release a key on the keyboard.
// keypress - fires when you press a charector key like abcd. not left arrow key or home or end keyboard.

// the keyboard events typically fire on the text box, though all elements support them.

// keydown-->keypress-->keyup.

const textBox = document.querySelector('#message');
textBox.addEventListener('keydown', (event) => {
    console.log(`key=${event.key}, code=${event.code}`);
});
// How it works?
// first  select the textbox with the id message 
// then register a keydown event listener and log the key and code of the key that has been pressed.


// keyboard event object has important properties key and code properties that allow you to detect which key has been pressed.
