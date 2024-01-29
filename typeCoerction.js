//Type Coerection (Implicitly converts form one to another data type)
/* By using Type Coercion, JavaScript attempts to make the 
data types compatible to complete the operation or comparison */

//number to string convertion
let Age = 23;
let Line = "My name is "+Age;
console.log(Line);
console.log(typeof(Line)); //Age is concantenated with the string and converted into string itself.

//String to number convertion
let Num = "50";
let add =+ Num;
console.log(typeof(add));// String is converted to number format.

//Comparison erection 
console.log(18=="18"); //Comparing and number and string format.
/* When u use double equality operator it checks for the value only */
console.log(18==="18");//false
/* When u use triple equality operator it checks for the value and datatype also */


//Type Conversion
/* Type conversion, also known as type casting, refers to the explicit transformation of a value from one data type to another. 
It involves intentionally changing the data type of a value using built-in functions or operators provided by the language. */

//String to Number convertion
let age ="18";
let age_2 = Number(age);
console.log(typeof(age_2));// String gets converted to number using Number cast operator

//Number to string convertion
age_2 = String(age_2);
console.log(typeof(age_2)); //Number gets converted to String using string cast operator

//Boolean to string convertion
let isValid = true;
console.log(typeof(isValid));
console.log(typeof(String(isValid)));// Boolean converted to String using string operator

//Hoisting (Calling a variable before declaration)
