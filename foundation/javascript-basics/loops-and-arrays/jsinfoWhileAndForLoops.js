// https://javascript.info/while-for
// loops in javascript for, while and do...while

// Loops: while and for
// we often need to repeat actions and loops are a way to repeat the same code multiple times..

// The “while” loop
// while (condition) {
//    code
//    so-called "loop body"
// }

// while  the condition is truthy code from the loop body is executed.

let i = 0;
while (i < 3) {
    console.log(i);
    // 0,1,2
    i++; //
}
// a single execution of the loop body is called iteration.


// a shorter way to write while (i != 0) is while (i):
let a = 3;
while (a) {
    console.log(a);
    a--; // reverse count -> 3,2,1
}


// curly braces are not required for single-line body.
let b = 3;
while(b) console.log(b--); // works fine.


// The “do…while” loop
// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

let c = 0; // initializer
do{
    console.log(c); // this will run must
    c++; // step.
}while (c < 3); // conditon.
// NOTE: this form of syntax should only be used when you want the body of the loop to execute at least once..


// The “for” loop
// The for loop is more complex, but most commonly used loop.

// for (begin; condition; step) {
  // ... loop body ...
// }

// for loop syntax 
for (let d = 0; d < 3; d++) {
    console.log(d);
}

// For Statement part-by-part
// parts 
// Begin --> let d = 0;
// condition --> d < 3;
// body --> console.log(d);
// step --> d++;

// Run begin
// --> (if condition → run body and run step)

// NOTE: javascript.info has great explaination available.

// inline variable declaration.
// the counter  Variable d is declared right in the loop, this is called an inline variable declaration.

// for  loop also uses outside declared variables.

let outSide = 0; // var outside of forloop.
for (outSide = 0; outSide < 3; outSide++) { 
    // used an existing variable
    console.log(outSide); // 0,1,2
}


// skipping parts 
// any part of for loop can be skipped.
// we can omit begin if we dont need to do anything at the loop start.

let e = 0;
for(; e < 3; e++) {
    // no need for "begin"
    console.log(e); // 0,1,2
}

// we can also remove the step part 
let f = 0;
for (; f < 3;) {
    console.log(f++);
    // this makes the loop identical to while(f < 3).
}

// We can actually remove everything, creating an infinite loop:
// for (;;) {
  // repeats without limits
// }


