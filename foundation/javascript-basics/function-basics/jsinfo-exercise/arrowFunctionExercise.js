// exercise solution

// TASK 1
// Rewrite with arrow functions
// Replace Function Expressions with arrow functions
function ask(question, yes, no) {
    if(confirm(question)) yes();
    else no();
}
ask(
    'Do You agree?',
    () => { alert('Yes'); },
    () => { alert('No'); }
);