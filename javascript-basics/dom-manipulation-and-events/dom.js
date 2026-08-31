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


// working with classes.
// add class new to the your new div 
const newDiv = document.createElement('div');
newDiv.classList.add('new');
// remove new from the class from div 
newDiv.classList.remove('new');
// if div doesn't have class "active" then add it or if does, the remove it.
newDiv.classList.toggle('active');

// it is often standard (and cleaner) to toggle a css style rather than adding and removing inline css.

// adding text content 
// create a text node containing "hello world!" and inserts it in div
newDiv.textContent = 'Hello World!';

// Adding HTML Content 
// renders the html inside the div 
newDiv.innerHTML = '<span> Hey World!</span>';

// security risk of innerHTML 
// using textContent is preferred over innerHTML for adding text as inner HTML should be used aparingly to avoid potential security risk.
// always void XSS vulnerability 

// https://www.youtube.com/watch?v=ns1LX6mEvyM

// Review  what we covered..

// in the javascript  first we get a reference to the container div that already exists in our HTML. then we create a new div and store it in the variable content.
// we add a class and some text to the content div and finally append that div to container. after the javascript code is run,

// keep in mind that the javascript does not alter your HTML, But the DOM - your HTML file will look the same, but javascript changes what the browser renders.


// Timing of Javascript...
// to run your DOM properly include your javascript file at the bottom of your HTML file so that it gets run after the DOM nodes are parsed and created..

// https://javascript.info/script-async-defer#defer
// alternative : use defer and put in the head of html file. defer keyword load the file after the html is parsed,

//<head>
//  <script src="js-file.js" defer></script>
// </head>




