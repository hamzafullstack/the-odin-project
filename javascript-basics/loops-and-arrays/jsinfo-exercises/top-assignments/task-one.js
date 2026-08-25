// Translate border-left-width to borderLeftWidth

function camelize(str) {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, char) => char.toUpperCase());
}
console.log(camelize('Background-color'));
console.log(camelize('background-color-white'));
console.log(camelize('my-short-string'));
console.log(camelize('my short string'));

