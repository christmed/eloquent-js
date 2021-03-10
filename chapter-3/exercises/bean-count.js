// Basic function to count "b" characters in string.
function countBs(str) {
    let bCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "B") {
            bCount += 1;
        }
    }
    return bCount;
}

let bs = countBs("ShaBadaBada");
console.log(bs);

// Basic function to count "x" character in string.
function countChar(str, char) {
    let charCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == char) {
            charCount += 1;
        }
    }
    return charCount;
}

let charCount = countChar("AbracAdabrA", "A");
console.log(charCount);