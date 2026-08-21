// Exercise details are available on the javascript.info i only write the header and the solution here...

// Task~~1 Last loop value.
let i = 3;
while (i) {
  console.log( i-- );
} // 1.

// Task~~2 Which values does the while loop show?

// The prefix form ++i:
let a = 3;
while(++a < 5) console.log(a); // 4
// The postfix form i++
let b = 0;
while(b++ < 5) console.log(b++); // 135.

// Task~~3 Which values get shown by the "for" loop?
// The postfix form
for (let c = 0; c < 5; c++) console.log(c); // 0 To 4.
// The prefix form
for (let d = 0; d < 5; ++d) console.log(d); // same as prefix.


// Task~~4 Output even numbers in the loop
for (let evenNumbers = 0; evenNumbers < 10; evenNumbers++) {
    if(evenNumbers % 2 == 0) {
        console.log(evenNumbers);
// returns even numbers like 0/2/4/6/8.
    }
} // wrote this but there was small bug it starts from 0 and stops at 8 instead of starting from 2 to 10..

// i tested this code at "OneCompiler online Code editor"
// https://onecompiler.com/javascript#draft-gkyp
// and after some experiments i got the desire result.

// ====desired solution====
for (let evenNumbers = 1; evenNumbers < 11; evenNumbers++) {
    if(evenNumbers % 2 == 0) {
        console.log(evenNumbers);
    }
} // output: 2,4,6,8,10


// Task~~5 Replace "for" with "while"
let jupyter = 0; // i ran out of variable names xd
while(jupyter < 3) {
    console.log(`Number | ${jupyter}!` );
    jupyter++;
} // for to While...


// Task~~6 Repeat until the input is correct.
// note the solution requires prompt() so i created new html file for solution.


// Task~~7 Output prime numbers
// damn! this was hard....
for (let i = 1; i <= 30; i++) {
    let prime = i > 1;
    for(let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0){
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(i, 'is a Prime Number dude');
    }
}

// this was littlebit hard and i get the idea and laws from Stackoverflow solution,, someone name : "L. Monty" answered similar solution in 2021, and my half of solution is edit of his solution code, Thank You Sir/Madam "L. Monty"
// Source - https://stackoverflow.com/a/68192996
// Posted by L. Monty, modified by community. See post 'Timeline' for change history
// Retrieved 2026-08-21, License - CC BY-SA 4.0


// NOTE: later i checked the solution tab, and javascript info solution is very optimized and very clean.. its a better to understand and give that solution a try.
