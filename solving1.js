/* 
Problem 1: 
Create a variable called carName, assign the value Volvo to it.
----------------- 
*/
let carName = "Volvo";

/* 
Problem 2: 
On one single line, declare three variables with the following names and values:
----------------- 
*/
let firstName = "John";
let lastName = "Doe";
let age = 35;

/* 
Problem 3: 
Use the correct assignment operator that will result in x being 50 (same as x = x * y).
----------------- 
*/
let x = 10;
let y = 5;
x = x *= y;
console.log(x);

/* 
Problem 4: 
Use comments to describe the correct data type of the following variables:
----------------- 
*/
let length = 16; // Number
let lastName = "Johnson"; // String

const x = {
  firstName: "John",
  lastName: "Doe",
}; // Object

/* 
Problem 5: 
Execute the function named myFunction.
----------------- 
*/
function myFunction() {
  alert("Hello World!");
}

myFunction();

/* 
Problem 6: 
Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").
----------------- 
*/
let person = {
  name: "John",
  age: 50,
};

alert(`${person.name} is ${person.age}`);

/* 
Problem 7: 
The <button> element should do something when someone clicks on it. Try to fix it!
----------------- 
*/
<button onclick="alert('I am button')">Click me.</button>

/* 
Problem 8: 
Array Related Question 
----------------- 
*/

// Alert the number of items in an array, using the correct Array property:
const cars = ["Volvo", "Jeep", "Mercedes"];
alert(cars.length);

// Change the first item of Brand to "Ford".
const Brand = ["Volvo", "Jeep", "Mercedes"]; 
Brand[0] = "Ford";
console.log(Brand);

/* 
Problem 9: 
Math Related Problems
----------------- 
*/

// Use the correct Math method to create a random number.
const randomNumber = Math.random();

// Use the correct Math method to return the largest number of 10 and 20.
const largestNumber = Math.max(10, 20);

// Use the correct Math method to get the square root of 9.
const squareRoot = Math.sqrt(9);

/* 
Problem 10: 
comparison operator related problems! 
----------------- 
*/
// 1. Choose the correct comparison operator to alert true, when x is greater than y.
let x = 10;
let y = 5;
alert(x > y);

// Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
alert(age < 18 ? "Too young" : "Old enough");

