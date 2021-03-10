// Simple function to get min of two given numbers
function getMin(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}

let min = getMin(5, -10);
console.log(min)