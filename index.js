/* Intro to Programming Homework -- 13/01/2022
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/*

Main Datatypes in JavaScript:
number          example: let Bowl = 23
string          example: let Cup = "Something"
boolean         example: let youngerThan30 = true   (or false)
undefined       example: console.log(myMovie)  ---> this will return undefined if I previously didn't declare myMovie variable before I console.log() it
null            example: let Bowl = null ---> use this to empty a variable

*/


/* EXERCISE 2
 Try to describe what an object is, in your own words.
*/

/* Object is one of the structural types in JavScript that contains collections of key-value properties.
for example, a book. A book is an object, it has many properties like price, genre, published year, author, and etc.
If we translate that object book and it's properties in javascript language, it will be like this:

let book = {
    author: "Miranda Gultom",
    genre: "Sci-Fi",
    year: 1989,
    price: 15
}


*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let a = 12
let b = 20

let sum = a+b

console.log(sum)

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12

/* EXERCISE 5
 Create a variable called name and assign to it your name as a string.
*/

let name = "Erliza E"

/* EXERCISE 6
 Execute a subtraction between the number 4 and the variable x you declared before (which is storing the value 12).
*/

let y = 4
let subs = x-y
console.log(subs)

/* EXERCISE 7
Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
 YOU DON'T NEED AN IF/ELSE BLOCK. It is enough to use console.log()
*/

let name1 = "john"
let name2 = "John"
console.log("are name1 = name2? :", name1 === name2)

console.log( name1 === "john" && name2 === "john")

