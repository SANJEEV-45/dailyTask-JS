//Variables (creating a memory location for a js member)
/* 1.var
   2.let
   3.const 

  Rules:
   1. Should'nt start with numbers
   2.No js keywords
   3.Its case sensitive
   4.space b/ charcaters not allowed
*/

//var
var Name; //Declaration
Name = "Sanjeev"; //Initialization
console.log(Name);
Name = "Rohit"; //Re-initialization is allowed
console.log(Name);
var Name = "Sanjeev"; //Re-initialization and declaration is possible
console.log(Name);

//let 
let myAge;//Declaration is allowed
console.log(myAge);
myAge = 23; //Initialization
console.log(myAge);
myAge = 22; //Re-initialization is possible
// let myAge; //Re-declaration is not possible

//const
const MY_COUNTRY = "INDIA"
// MY_COUNTRY="ITALY"; 
console.log(MY_COUNTRY); //Re-initialization and re-declaration is not possible

//Variables Scopes
/* 1.Global
   2.Local */
//Global
let myBlood = "O+"; //Global scope

function bloodInfo() {
    let myBlood = "A+"; //Block scope(Local)
    /* U can't access the local var outside the block */
    console.log(`My blood group is ${myBlood}`);
}
bloodInfo();

//var vs let
let temp = "This is from outside scope";

function checkBlock() {
    var str = "Hi this is from var type";
    let str2 = "Hi this is from let type";
    for (i = 0; i < 10; i++) //If we didn't use any variable for the identifier, it will consider as var type.
    {
        console.log(str + i);
    }
}
checkBlock();
console.log(i);// U can access the var type outside the block
// console.log(str2);// This will show error

randomDraw;
console.log(randomDraw);// This will get error for not prefixed with any type of variables.
randomDraw = 15;// If we didn't prefix any variable and assigned value to a identifier it will consider as a var type.
console.log(randomDraw);// It does print.