// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops#exiting_loops_with_break

// note#  this is also part of same article name looping code
// but we need to work with the html file...

// Exiting loops with break
// a break statement will immediately exit the loop and make the browser move on to any code that follows it.

const contacts = [
    "Hamza:2222221111",
    "Shoaib:111222111",
    "Kashif:332211144",
    "Zahid:9988554411",
    "Ali:223311330",
];
const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const searchName = input.value.toLowerCase();
    input.value = "";
    input.focus();
    para.textContent = "";
    for (const contact of contacts) {
        const splitContact = contact.split(":");
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = `${splitContact[0]}'s number is ${splitContact[1]}.`;
            break;
        }
    }
    if(para.textContent === "") {
        para.textContent = "Contact not found!";
    }
});