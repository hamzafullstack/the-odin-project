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