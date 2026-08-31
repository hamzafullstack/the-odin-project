// https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events

// DOM Manipulation and events
// one of the most unique and useful abilities of javascript is it's ability to manipulate the DOM.

// DOM ~~ Document Object Model.
// The DOM is a tree like representation of the content of a webpage, a tree of nodes with different relationships depending on how they're arranged in the HTML Document. There are many type of nodes, most of which are not commonly used, we will be focusing on element nodes which are [Primarily] used for manipulating the DOM.

// Targeting nodes with selectors
// when working with the DOM, You use selectors to target the nodes you want to work with. you can use a combination of css-style selectors and relationship properties to target the nodes you want.

// css style selectors.
// div.display .display #container > .display div#container > div.display

// you can also use relational selectors .firtsElementChild or lastElementChild, etc

// selects the container div.
const container = document.querySelector("#container");
// select the first child of #container => .display
const display = container.firstElementChild;
// lets print it 
console.log(display); // 
// select the control div 
const controls = document.querySelector('.controls');

// Select the prior sibling => .display
const displays = controls.previousElementSibling;
console.log(displays);

// DOM Methods
// When your HTML code is parsed by a web browser, it is converted to the DOM, as was mentioned above. One of the primary differences is that these nodes are javascript objects that have many properties and methods attached to them. these properties and methods are the primary tools we are going to use to manuplate our webpages with javascript.

// querySelector 
// element.querySelector(selector) - returns a reference to the first match of selector.
// element.querySelectorAll(selectors)- returns a "NodeList" containing references to all of the matches of the selectors.

// === Performance Consideration
// there are several other selectors more specific queries that offer potential marginal performances.

// spread operator:: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// Element creation
// document.createElement(tagName, [Option])
// creates a new element of tag type tagname. [option] in this case means you can add some optional parameters to the function.
const div2 = document.createElement('div');
// this function does not put your new element into the dom, it creates it in the memory.
// so that you can manipulate the elements (by adding styles, classes, ids, text, etc)

// append elements 
// parentNode.appendChild(childNode)
// appends childNode as the last child of parentNode.

// parentNode.insertBefore(newNode, referenceNode)
//inserts newNode into parentNode before referenceNode.

// remove elements 
// parentNode.removeChild(child);
//remove child from parentnode on the dom and returns reference to child.

// Altering elements
// this allows you to do many useful alterations, like adding, removing, or altering attributes, changing classes, adding inline style information and more.

// create a new div referenced in the variable
const ndiv = document.createElement('div');
// adding inline style 
// set the indicated style rule to the element in the div variable
ndiv.style.color = 'blue';
// set the entire inline style. 
ndiv.setAttribute('style', 'color: blue; background: white;');

// When Accessing a kebab-cased css property like background-color with js, you will need to either use camelCase with dot notation or bracket notation.
// but property name must be a string....

// bracket notation with kebab-case: also works
ndiv.style["background-color"];

// bracket notation with camelCase: also works
ndiv.style["backgroundColor"];

// equivalent to: div.style.background - color
ndiv.style.background-color;

// if id exists, update it to 'theDiv', else create an id with value "theDiv"
ndiv.setAttribute('id', 'theDiv');

// returns value of specified attribute, in this case 'theDiv'
ndiv.setAttribute('id');

// remove specified attribute 
ndiv.removeAttribute('id');

// more about attribute on MDN-docs
// https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes