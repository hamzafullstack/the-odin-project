// exercise solutions goes here
// Task 1
if ("0") {
    alert('hello');
    // yes it will alert because '0' is string.
}

// Task 2
const userInput = prompt('What is the official name of Javascript? ');
if (userInput == 'ECMAScript') {
    alert('Right!');
}else{
    alert('You dont know ECMAScript!');
}

// Task 3
const userPrompt = prompt('enter a number: ');
if (userPrompt > 0) {
    alert(1);
}else if (userPrompt < 0) {
    alert(-1);
}else {
    alert(0);
}

// Task 4
let result = (a + b < 4) ? 'below' : 'Over';

// Task 5
let message = (login == 'Employee') ? 'hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';

// Finished.