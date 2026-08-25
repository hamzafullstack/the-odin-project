// Translate border-left-width to borderLeftWidth

// solution 1 ~ i solved then i realized exercise says use the array methods like split, transform and join..
function camelize(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, char) => char.toUpperCase());
}
console.log(camelize('Background-color'));
console.log(camelize('background-color-white'));
console.log(camelize('my-short-string'));
console.log(camelize('my short string'));

// Solution 2 ~ where i used split, map and join methods.
function camelCase(string) {
    return string.split(/[-]/).map((word, index) => {
        if(index === 0) {
            return word;
        }
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join("");
}
console.log(camelCase('my-short-string'));
console.log(camelCase('hello-my-world'));