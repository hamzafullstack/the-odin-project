// Breaking the loop
// normally a loop exits when its condition becomes falsy.
// using break keyword we can force exit the loop.

let sum = 0;
while (true) {
    let value = +prompt("ENTER A NUMBER:", '');
    if (!value) break; // loop stops if its empty...
    sum += value;
}
alert('sum: ' + sum );