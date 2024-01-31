//String
//We can declare in three ways
let str = "Hello world"; //using double quotes
let str_1 = "Hi this is sanjeev"; // using single quote
//Template string
let str_2 = `Words doesn't "Actions" does`; //if we wanna hightlight a string inside a string variable we can use backticks.

// find the size using length property
let size = str.length;
console.log(size); //11
let word = str_1.charAt(); //t
console.log(word);
let word_1 = str_1.charCodeAt(0); // return ascii values of the character
//ES6 2022 estd
let word_2 = str_2.at(-11); //It accepts the negative arguments and red from the last character.

//Extracting string parts
//slice => it accepts 2 parameters (start,end), it will accept negative values.
const SLICE = str_1.slice(3, 7); //extracted a part of string and returning as a new string
console.log(SLICE);
const REV_SLICE = str_2.slice(-4); //index starts from the last character.
console.log(REV_SLICE);
//if u give one parameter, starts from that index rest of the string will be printed.

//substring
const SUBSTRING = str_1.substring(-3, 7);
console.log(SUBSTRING);

//Converting text to UpperCase
const UPPER = str_1.toUpperCase(); //this will print all as upper case.
const LOWER = str_2.toLowerCase(); //this will print all as lower case.

//Concatenating two strings
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2); //this will print "hello world".
console.log(text3);


let line_2 = "       Hi this is from js        ";
let line_3 = line_2.trim(); //this method will removes the whitespace from both sides.
console.log(line_3);
let line_4 = line_2.trimStart(); //this method will removes the whitespace from the starting side
console.log(line_4);
let line_5 = line_2.trimEnd(); //this method will removes the whitespace from the ending side.
console.log(line_5);

//repeat
let str_3 = str_1.repeat(3);
console.log(str_3); // this method returnds a no of copies in string and it doesn't modify the original string.

//replace(Case-sensitive)
let newLine = str.replace("world","Venus");
console.log(newLine); //Hello Venus
/* It will replace the first occurence in a sentence, if u wanna replace with all 
   words what u gave, u should use regression orelse we use replaceAll instead of regression */

//replaceAll
let LINE = "Cats are Domestic, We love Cats , Cats eats chicken";
console.log(LINE.replaceAll("Cats","Dogs"));

//indexof
let temp = LINE.indexOf("Cats"); //This method returns the index of the first occurence or return -1 if the string is not found.
console.log(temp); //0  (but it accepts the second parameter(int) of where to start)

//lastIndexOf
let temp_2 = LINE.lastIndexOf("Cats"); //This method returns the index of the last occurence or return -1 if the string is not found.
console.log(temp_2); //34  (but it accepts the second parameter(int) of where to start from the last index only(reverse))