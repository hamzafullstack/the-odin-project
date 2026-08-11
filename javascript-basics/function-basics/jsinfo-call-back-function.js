// https://javascript.info/function-expressions

// Callback functions

function ask(question, yes, no) {
    if (confirm(question)) yes()
        else no();
}
function showOk() {
    alert('ageed!');
}
function showCancel() {
    alert('canceled the execution.');
}
//functions showOk, showCancel are passed as arguments to ask
ask('Do you agree?', showOk, showCancel);

// We can use Function Expressions to write an equivalent, shorter function:

// func expressions 
function asking(q, y, n) {
    if (confirm(q)) y()
        else n();
}
asking(
    'do you agree?',
    function() { alert('agree'); },
    function() { alert('disagree'); }
);

// A function is a value representing an “action”
// Regular values like strings or numbers represent the data.

// A function can be perceived as an action.

// We can pass it between variables and run when we want
