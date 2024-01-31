const myVariable = "423.9999 ";
const myNumber = 42;
const myFloat = 42.0;

//Methods
//isInteger (return type boolean)
console.log(Number.isInteger(myNumber)); //true
console.log(Number.isInteger(42.3)); //false

//parseInt
console.log(Number.parseInt("423")); // if u start with other than number it will return as NAN.
//parseFloat
console.log(Number.parseFloat("42334.222")); //removes the unnecessary string and displays only the float format.
//if u start with other than number it will return as NAN.

//tofixed
console.log(Number.parseFloat(myVariable).toFixed(2));
//It rounds the string to a specified no of decimals and returns string.

//isNaN
console.log(isNaN("ads")); //true

console.log(Number.isNaN("ass555")); //if u are checking with normal isNAN it will returns true but u are checking with the number type.

//chaining methods
console.log(parseFloat(myVariable).toFixed(1).toString()); //We can call a method and further call a method.

//MATH.PI
console.log(Math.PI);
//trunc
console.log(Math.trunc(Math.PI)); //It removes the fractional digits.
//round
console.log(Math.round(2.8)); //It rounds the number
//ceil
console.log(Math.ceil(8.1)); // if we use this method to a fractional digit it will return as a next digit.
//pow
console.log(Math.pow(10, 3)); //1000
console.log(Math.pow(1)); // If we pass a single parameter it will return as a NaN.

//Math.MIN
console.log(Math.min(2, 1.24, 8, 11, 100)); //It will return least number

//Math.MAX
console.log(Math.max(2, 1.24, 8, 11, 100)); //It will return largest number.

//random
console.log(Math.random()); //it returns any number between 0-1

//floor => It returns a number that down to the nearest integer
console.log(Math.floor(Math.random() * 10));
