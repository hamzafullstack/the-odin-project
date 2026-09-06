// DOM Scripting Introduction..
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting#doing_some_basic_dom_manipulation

// the most common thing you'll want to do is change the document structure in some way.

// each entry is in the tree is called a node.

// doing some basic DOM Manipulation

const link = document.querySelector('a');
link.textContent = 'Mozilla Developers Network';
link.href = 'https://developer.mozilla.org';
// . Document.querySelector() is the recommended modern approach. It is convenient because it allows you to select elements using CSS selectors.

// document.querySelectorAll() stores references in array like objects called a NodeList.


// creating and placing new nodes 
const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'I love Coding. The JavaScript is my new crush.';
sect.appendChild(para);

const text = document.createTextNode("- MDN-Docs the premier source for web development knowledge.");

// grabbing the paragraph the link sits inside.
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

// moving and removing elements 

// parent.appendChild(linkPara); // parent means sect.

// you may thought it'll copy the element but its not..
// for copy you can use Node.cloneNode() cloneNode() will copy it.

// removing node is pretty simple as well. removeChild()

// removing. 
// Node.removeChild(linkPara);

// when you want to remove a node only on a ref to itself which is fairly common you can use elem.remove()

// node.remove(); // its not supported in older browsers.

// you have to the following to remove itself 
// link.parentNode.removeChild(linkPara);

// Manipulating styles.
// its possible to manipulate css styles via JavaScript.

para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';

// to add this class name to your element use classlist
para.classList.add('highlight');
// the css is still applied to the paragraph, but this time by giving it class that is selected by our css rule.


// read in details at MDN docs 
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting#doing_some_basic_dom_manipulation

