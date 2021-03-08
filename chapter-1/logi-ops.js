console.log(true && false)
console.log(true && false)

console.log(false || true)
console.log(false || false)

/* Not is written as an exclamation mark (!)
!true produces false
!false produces true
*/

// Ternary operator
console.log(true ? 2 : 4);
console.log(false ? 2 : 4);

/* Empty values
null and undefined. Treat them as mostly interchangeable
*/

// Automatic type conversion
console.log(8 * null)
console.log("5" - 1)
console.log("5" + 1)
console.log("five" * 2)
console.log(false == 0)

/* Use the three-character (=== !==) comparison operators defensively to prevent unexpected type conversions
*/

// Short-circuiting of logical operators
console.log(null || "user")
console.log("Agnes" || "user")

/* This functionality is ued as a way to fall back 
on a default value that might be empty. The rules 
for converting strings and numbers to Boolean values state that 0, NaN and the empty string("") count as
false
0 || - 1 produces -1
"" || "!?" yields "!?"
*/

console.log(Infinity && true)

/* The && operator works similarly but the other way around. When the value to its left is something that converts to false, it returns that value, and otherwise it returns the value on its right
*/