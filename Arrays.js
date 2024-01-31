const Cars = ["Hyundai", "Toyata", "Ford", "Benz", "BMW", "Volkswagen"];
const Fruits = ["Apples", "Oranges", "Grapes", "Mangoes", "Bananas"];
console.log(Fruits);

//Methods
//1. push
Fruits.push("Pineapple"); //Pineapple will be added to the last of the array.
console.log(Fruits);
//2. pop
Fruits.pop();
console.log(Fruits); //It will remove the last element of the array.
//3. unshift
Fruits.unshift("Grapes"); // Grapes will be added as the first element of the array.
console.log(Fruits);
//4. Shift
Fruits.shift(); //It removes the first element of the array.
console.log(Fruits);
Cars.splice;

//5. splice
/* it has 3 parameters (starts count,delete count, string
   If u give negative parameter, it will start count from end.
*/
// const SPLICE = Cars.splice(1,2);
// console.log(SPLICE);
// const SPLICE1 = Cars.splice(3,1,"Suzuki");
// console.log(Cars);
// const SPLICE2  = Cars.splice(-2);
// console.log(SPLICE2);

//toSpliced
/* it is similiar to the splice method but it doesnt affect the array
     meanwhile splice affects the original array */

//6. reverse
console.log(Cars.reverse); //It will reverse the whole array.
//7. join
//this method return array to string if we give any string as a argument it will add to end of each element of the array.
const JOIN = Cars.join(" and ");
console.log(JOIN);
//8.split
//this method split the string based on what we gave in the parameter and return as an array.
const SPLIT = JOIN.split("and");
console.log(SPLIT);
//9.concat
//this method will merge the array what we give array ref as an array as a paramter.
const New_array = ["KIA", "Honda", "Ferrari"];
console.log(SPLIT.concat(New_array));
//10.slice
//this method will split out a piece of an array into a new array and also original array doesn't affects.
const SLICE = Cars.slice(3);
console.log(SLICE);

//find
let array = [10, 20, 30, 40, 50];
let found = array.find(retrive);

function retrive(value, index, array) {
  return value > 20;
}
console.log(found); // The element which satisfies the condition will be printed.

//reduce (from left to right iteration)
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);
console.log(sum);

function myFunction(total, value, index, array) {
  return total + value;
}

const numbers2 = [12, 3, 4, 13, 23];
let sum2 = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
