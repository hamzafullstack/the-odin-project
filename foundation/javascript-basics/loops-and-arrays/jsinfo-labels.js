// Labels for break/continue
// https://javascript.info/while-for#labels-for-break-continue

// what is label ?
// A label is an identifier with a colon before a loop:
// labelName: for (...) {
//   ...
// }


// Label: code syntax example.
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        let input = prompt(`value at coords (${i},${j})`, "");
        //if an empty string or cancelled  then break both
        if(!input) break outer; // (breakall)
    }
}
alert('done.!');


// Labels do not allow to “jump” anywhere
// Labels do not allow us to jump into an arbitrary place in the code.


// …Although, 99.9% of the time break is used inside loops, as we’ve seen in the examples above.

// A continue is only possible from inside a loop.

//++========Summary++========

// while – The condition is checked before each iteration.
// do..while – The condition is checked after each iteration.
// for (;;) – The condition is checked before each iteration, additional settings available
// To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive
// If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.
// break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.

