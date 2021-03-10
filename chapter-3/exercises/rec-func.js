//Basic function to check if given number is even

function isEven(n) {
    if (n == 1) {
        return !(n);
    } else if (n == 0) {
        return !(n);
    } else {
        if (n > 0) return isEven(n - 2); 
        else return isEven(n + 2);
        }
    }

let even = isEven(50);
console.log(even);

even = isEven(75);
console.log(even);

even = isEven(-1);
console.log(even);

even = isEven(-24);
console.log(even);
