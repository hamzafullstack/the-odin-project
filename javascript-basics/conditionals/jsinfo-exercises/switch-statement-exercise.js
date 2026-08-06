// Rewrite the "switch" into an "if"
// Task 1 
let browser = "Chrome";
if (browser === 'Edge') {
    console.log('You have got the "EDGE" ');
} else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
    console.log('Okay! We support these browsers too.!');
}else {
    console.log('We hope that this page looks okay..!!');
}

// Rewrite "if" into "switch" 
// Task 2
let a = 0;
switch(a) {
    case 0:
    console.log(0);
        break;
    case 1:
        console.log(1);
        break;
        case 2:
        case 3:
            console.log("2, 3");
            break;
}
// NOTE: in the following exercise Task 2 they used prompt but i'm lazy to create HTML file and run it on browser so i go with variable.