// function reversed(num) {
//     return num.reversed();
// }

// let i = 0;
// let reversedNum = 0;
// while (i < 10) {
//     remainder = i % 10;
//     reversedNum = (reversedNum * 10) + remainder;
//     i = Math.floor(i / 10);
//     console.log(i);
// i++;
// }

// ---------------------------------------------------------------

// function reverseNumbers(num) {
//     let original = Math.abs(num); // work with positive
//     let reversed = 0; // store

//     while (original > 0) {
//         let lastDigit = original % 10; // get last digit.
//         reversed = (reversed * 10) + lastDigit; // shift digits left and add
//         original = Math.floor(original / 10); // remove the last digit.
//     }
//     return reversed * Math.sign(num); // restored the original sign.
// }
// console.log(reverseNumbers(1245));

// ----------------------------------------------------------


// ---------- lets psuedocode / describe problem ------------

// مجھے ایک نمبر ایک سے 10 تک گننا ہے، اور وہ بھی الٹی ترتیب میں
// اور آخر میں میسج دینا ہے کہ جیسے ہی کاؤنٹ ڈاؤن 10 سے 1 پر آئے تو
// "BLAST OFF!" پرنٹ ہو۔ وہ بھی while loop سے۔
//
// اب سوال یہ ہے کہ یہ ہوگا کیسے؟
// Loop میں تو reversed() method لگا نہیں سکتے، وہ تو اس پر کام نہیں کرتا،
// اور میں نے while loop کل ہی سیکھا ہے، تو syntax پر بھی میری پکڑ اتنی
// مضبوط نہیں ہے۔ تو میں یہ کیسے کروں؟
//
// اگر میں ایک function بناؤں، اس میں manually mathematical reversing کروں،
// پھر اس function کو while loop کے اندر call کروں، اور conditionals کی
// مدد سے آخر میں "BLAST OFF!" پرنٹ کروا دوں تو کیا ہوگا؟
//
// کیا اس بار بھی غلطی کی وجہ سے infinite loop چل جانا ہے مجھ سے؟

//   ⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️

//-+-+-+-+-====Finally solved it====-+-+-+-+-
function reverseTheNumbers(current, max = 10) {
    return (max + 1) - current;
}
let launch = 1;
while (launch < 11) {
    console.log(reverseTheNumbers(launch));
    if(launch === 10) {
        console.log('BLAST OFF!')
    }
    launch++;
}
