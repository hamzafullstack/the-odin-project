// Breaking the loop
// normally a loop exits when its condition becomes falsy.
// using break keyword we can force exit the loop.

// https://javascript.info/while-for#breaking-the-loop

let sum = 0;
while (true) {
    let value = +prompt("ENTER A NUMBER:", '');
    if (!value) break; // loop stops if its empty...
    sum += value;
}
alert('sum: ' + sum );


// https://javascript.info/while-for#continue
// javascript continue 

// js cotinue  syntax example
for (let odd = 0; odd < 10; odd++) {
    //if true, skip the remaining part of body.
    if(odd % 2==0) continue;

    alert(odd); // 1,3,5,7,9
}
// The continue directive helps decrease nesting

for (let newOdd = 0; newOdd < 15; newOdd++) {
    // without continue
    if(newOdd % 2) {
        alert(newOdd);
    }
// Using `if` works, but it adds another level of nesting, which can reduce readability when the code becomes longer.
}


// No break/continue to the right side of ‘?’
//  syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there.
