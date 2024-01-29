//Hoisting 
/*Defaault behaviour of moving all the declarations at 
  the top of the scope before code execution) */
  
  console.log(age);
  var age=10;

  console.log(addNumber2());
  let addNumber = function()//Hoisting isn't possible for function expression
  {
    return 15+20;
  }

  function addNumber2() //Hoisting is possible for function declaration
  {
     return 40+10;
  }

  var age=10;