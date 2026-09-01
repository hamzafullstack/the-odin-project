// The "switch" statement 
// learn more about switch statement on : https://javascript.info/switch
// javascript.info is the best website for beginners..

// A switch statement can replace multiple if checks.
// syntax
let a = 2 + 2;
switch (a) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    console.log( 'Exactly!' );
    break;
  case 5:
    console.log( 'Too big' );
    break;
  default:
    console.log( "I don't know such values" ); // default is no value matched.
}

// If there is no break then the execution continues with the next case without any checks.

// Any expression can be a switch/case argument
let d = "1";
let e = 0;
switch (+d) {
  case e + 1:
    console.log("this runs, because +d is 1, exactly equals b+1");
    break;

  default:
    console.log("this doesn't run");
}

// Grouping of “case”
let f = 3;

switch (f) {
  case 4:
    console.log('Right!');
    break;
  case 3: // (*) grouped two cases
  case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}

// Type matters
// the equality check is always strict. The values must be of the same type to match.


// want to learn more about switch or need explaination visit the javascript.info/swtich.
