// Chris → not Phil/Lola → Admit
// Anne  → not Phil/Lola → Admit
// Colin → not Phil/Lola → Admit
// Terri → not Phil/Lola → Admit
// Phil  → Phil!         → Refuse
// Lola  → Lola!         → Refuse
// Sam   → not Phil/Lola → Admit


// Filling in a guest list
// solution 

const peoples = [
    "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

let admit = [];
let refused = [];

for (let people of peoples) {
    if(people === "Phil" || people === "Lola") {
        refused.push(people);
    }else {
        admit.push(people);
    }
    console.log(people);
}

console.log(admit);
console.log(refused);
console.log('Admit:  ' + admit);
console.log('Refused: ' + refused);