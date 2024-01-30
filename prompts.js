/* 1.alert
   2.confirm
   3.prompt */

//alert(doesn't return anything)
let avail = alert("Welcome user");
console.log(avail);

//confirm (for confirmation purpose)
/* it's return type is boolean
  if u click OK it returns true 
  if u click CANCEL it returns False
*/
let user = confirm("Enable the less data usage");
console.log(typeof(user))//boolean type

//prompt
let userAccess = prompt("Enter the number you want");
/* Whatever u give in the prompt box it returns sting format so u 
   should convert to respective datatype what you need */
console.log(Number(userAccess));

