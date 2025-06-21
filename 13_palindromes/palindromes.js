const palindromes = function (word) {
    let arr = word.split("");
    arr = arr.filter(char => (char.charCodeAt(0) >= 48) && (char.charCodeAt(0) <= 122));
    arr = arr.map(char => char.toLowerCase());
    let reverse = [...arr].reverse();
    return arr.every((letter, index) => letter === reverse[index]);
};

// Do not edit below this line
module.exports = palindromes;
