let n = 1;
for (let i = 1; i <= 100; n += 1) {
    if (n % 5 == 0 && n % 3 == 0) {
        console.log("FizzBuzz");
    }
    else if (n % 5 == 0 && !(n % 3 == 0)) {
        console.log("Buzz");
    }
    else if(n % 3 == 0) {
        console.log("Fizz");
    }
    else {
        console.log(n);
    }
    i += 1
}