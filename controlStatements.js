let event2 = document.getElementsByClassName("reload");
event2.onclick=reload;
function reload()
{
   location.reload();
}
for (let i = 0; i < event2.length; i++) {
   event2[i].onclick=reload;
 }
//Control Statements
/* 1.If
   2.if-else
   3.else-if
   4.nested else-if
   5.Switch */

//if
let event1=document.getElementById("if");
const num = document.getElementById("inputNo").value;
event1.onclick=function(){
if(num<=10 && num>=0 && num!="" && !isNaN(num))
{
   document.getElementById("para").innerHTML="Given no is less than 10";// Whenever we have one condition we go for if.
}

}

//if-else
let event3=document.getElementById("if-else");
const age = document.getElementById("inputNo1").value;
event3.onclick=function(){
  if(age!="" && !isNaN(age)) 
  {
     if(age>18) //Whenever we have two statements in which anyone has to be executed we go for if-else
     {
        document.getElementById("para1").innerHTML="You are eligible to vote";
     }
     else 
      {
        document.getElementById("para1").innerHTML="You are not eligible to vote";
      }
   }
}

//else-if

let mark=85;
if(mark>=60 && mark<=70)
{
    console.log("Your grade is C"); 
}
else if(mark>=71 && mark<=80)
{
    console.log("Your grade is B");  // Whenever we have multiple conditions we go for else-if
}
else if(mark>=81 && mark<=90)
{
    console.log("Your grade is A");
}

//nested-if
let num_1=10;
if (num_1 > 10) {
   console.log("Above 10");
   if (num_1 > 20) {
      console.log(" and also above 20");
   } else {
      console.log(" but not above 20");
   }
}
/* Looping statements
   1.while
   2.do while
   3.for
   4.for each
   5.switch
*/

//while
let temp_1 = 1;
while (temp_1 < 6) { 
  console.log(temp_1);           
   temp_1++;
} 
    /* First the condition will be checked and the statement
     will be executed till the condition fails */

//do while
let temp_2=1;
do {
  if (temp_2 == 3) 
  {
    break;
  }
  console.log(temp_2);
  temp_2++;
} while (temp_2 < 6);

/* First the statement will be executed and the condition
     will be checked, loop continues till the condition fails */

//for 
let sum=0;
for(let num_2=1; num_2<=5;num_2++)
{
     sum+= num_2;
}
console.log(sum);

function forloop() {
   for (let i = 0; i < 10; i++) {

      if(i!=3)
      {
       document.getElementById("para3").innerHTML += i +"<br>";
      }
   }
 }
 var mybtn = document.getElementById("btn");
 mybtn.addEventListener("click", forloop);
