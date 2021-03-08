// Arrow Functions

/* The arrow comes after the list of parameters and is
followerd by the function's body
*/
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};

/* When there is only one parameter name, you can omit the parentheses around the parameters list
*/
const square1 = (x) => { return x * x; };
const square2 = x => x * x;

/* When an arrow function has not parameters at all, its
parameter list is just an empty set of parentheses
*/
const horn = () => {
    console.log("Toot");
};
