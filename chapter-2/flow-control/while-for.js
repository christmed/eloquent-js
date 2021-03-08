let number = 0;
while (number <= 20) {
    console.log(number);
    number = number + 2;
}

console.log("")
let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);
console.log(counter);

//Do structure. The code bellow only works on browser 
// let yourName;
// do {
//     yourName = prompt("Who are you?");
// } while (!yourName);
//     console.log(yourName);

console.log("")
//For loop structure. shorter version of the first snippet
for (let number = 0; number <= 20; number = number + 2) {
    console.log(number)
}

console.log("")
let r = 1;
for (let i = 0; i < 10; i += 1) {
    r *= 2;
    console.log(i)
}
console.log(r);

for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}

for (let num = 1; ; num += 1) {
    if (num % 25 == 0) {
        console.log(num);
        break;
    }
}
