// exercise solution code 

const container = document.querySelector("#container");

const para = document.createElement('p');
// para.classList.add('para');
para.textContent = "Hey I'm red!";
para.setAttribute('style', 'color: red;');

container.appendChild(para);

const heading3 = document.createElement('h3');
heading3.textContent = "I'm a blue h3";
heading3.setAttribute('style', 'color: blue;');

container.appendChild(heading3);

const parentDiv = document.createElement('div');
parentDiv.setAttribute('style', 'background-color: pink; border: 5px solid black;');
container.appendChild(parentDiv);

const heading1 = document.createElement('h1');
heading1.textContent = "I'm in a div";
parentDiv.appendChild(heading1);

const nestedPara = document.createElement('p');
nestedPara.textContent = 'ME TOO!';
parentDiv.appendChild(nestedPara);