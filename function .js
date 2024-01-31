//Function (Object)
/* Block of code used to perform a specific task 
  syntax to create a function 
  1.Function Expression
  2.Function Declaration
*/
//1.Function Declaration(Hoisting is possible)
log();
function log() {
  console.log("Hi this is from function declaration");
}

//2.Function Exprssion(It's not a hoisting type)
//  log1();// This will throw error
const log1 = function () {
  console.log("Hi this is from function expression");
};

//Nested function
function outerFun() {
  let msg = "Hi this is from outer";
  console.log(msg);
  function innerFun() {
    let msg = "Hi this is from inner";
    console.log(msg);
  }
  return innerFun; //Should return the inner function im the outer block when u achive the nested function
}
outerFun()();

//Scope Chain or Lexical Scope
/* One variable has a scope(may be local or global) is used by another variable
   or function having another scope */
// Global Scoped letiable
let global_scope = "Hi I am global scope";

// First function...
function first_function() {
  return global_scope;
}

// Second function...
function second_function() {
  return first_function();
}

console.log(second_function());

//ex-2
function main_function() {
  // let variable with Local Scope...
  let a = 2;

  // Nested Function having Function Scope
  let multiply = function () {
    // It can be accessed and altered as well
    console.log(a * 5);
  };

  // Will be called out when main_function gets called
  multiply();
}

// Display's the result...
console.log(main_function());

// Throws a reference error since it
// is a locally scoped scope
console.log(a);

// Throws a reference error since it
// is a locally scoped function
multiply();
