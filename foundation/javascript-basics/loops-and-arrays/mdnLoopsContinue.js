// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops#skipping_iterations_with_continue
// continue also part of loopingcode on mdn-docs 

// Skipping iterations with continue
// The continue statement works similarly to break, but instead of breaking out of the loop entirely, it skips to the next iteration of the loop.

const para = document.querySelector("p");
const input = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    para.textContent = "Output: ";
    const num = input.value;
    input.value = "";
    input.focus();
    for (let i = 1; i <= num; i++) {
        let sqRoot = Math.sqrt(i);
        if (Math.floor(sqRoot) !== sqRoot) {
            continue;
        }
        para.textContent += `${i} `;
    }
});

//explaination is available on given link above..
