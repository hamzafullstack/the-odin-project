// exercise solution 
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting#creating_a_dynamic_shopping_list

const input = document.querySelector('input');
const addItem = document.querySelector('#add-item');

const unorderList = document.querySelector('ul');

addItem.addEventListener('click', (event) => {
    event.preventDefault();
    if(input.value) {
const list = document.createElement('li');
const deleteItem = document.createElement('button');
deleteItem.innerText = 'Delete';
deleteItem.classList.add ('delete-Button');
list.textContent = input.value;
input.value = '';
input.focus();
unorderList.appendChild(list);
list.appendChild(deleteItem);
deleteItem.classList.add('my-Margin');
deleteItem.addEventListener('click', () => {
    unorderList.removeChild(list);
});
}
});
