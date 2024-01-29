/*Tokens (Just a building blocks of a language)
1.Identifiers
2.Keywords
3.Literals
4.Seperators */
 
//Identifiers (Name given to a js member)
var isValid = true; 
var myAge = 23;
const fruits =["Apples","Oranges","Grapes"];

//Keywords(Compiler aware words)
//if, else, console etc.,
if(myAge > 18)
{
   console.log("Eligible to vote");
}
else{
    console.log("Not elgible to vote");
}

//Literals (You can directly print the particular value of datatypes in the console)
console.log(1440.40);
console.log('Hello world');
console.log(null);
console.log(undefined);

//Datatypes (Primitive types)
/* String - Can declare in three ways => " ", ' ', `  ` */
var line = "this is from html";
console.log(typeof(line));;
var info = `Shanmar took 6 "wickets" in the first test`; //if u wanna highlight a word using " " in a string then use template string .
console.log(typeof(info));

/*Numbers - It's having range in between 2^53-1to 2^53+1 consider as a number */
var randomNum = 99.0000008;
console.log(typeof(randomNum));

/*BigInt - Use this type to store a number beyond the given range by suffiing the number with n*/
console.log(typeof(9007199254740991n+2n));//big int
// console.log(typeof());

/*Boolean -True,False */
console.log(typeof(myAge>19)); //semicolon is not mandatory

//Null (In the absence of value, will be using null)
const RAM = 8;
const ROM = null; //Null is an object type
console.log(typeof(ROM));//object

//Undefined
/* When a var declared in js, js engine implicits an undefined value */
let temp;
console.log(typeof(temp));
// console.log(temp2);//not defined

//Datatypes (Reference types)
/* Object - It'll created by the developer and it has states and behaviour
            and will be using in key and value based manner */
var myprofile = 
{Name : "Sanjeev",
 Age  : 23,
 isEligible : true,
 myHobby :function()
{return "I do play cricket"}};

console.log(myprofile.Age);//we can call the value using the keys of objects
console.log(myprofile.myHobby());
console.log(myprofile.isEligible);

