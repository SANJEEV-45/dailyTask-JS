//Object
/* It has properties and values 
   we can access object using key and value pair.

*/
function reload() {
   location.reload();
}
const userProfile = {
   Name: "sanjeev",
   Age: 23,
   isYoung: false,
   greet: function () {
      return `Hi this is ${this.Name}`; // U can't also use any propeties inside a function, if u want to use u should call using this keyword.
   },
   hobbies: "cricket",
};

// we can access the object by its reference or call by using properties(keys).
//Method 1
console.log(userProfile["Name"]);
console.log(userProfile.isYoung);

const copyObj = userProfile;
console.log(copyObj.Age);
console.log(copyObj.hobbies[1]);

//Method 2
console.log(userProfile.greet());
const copyObj2 = Object.create(userProfile);
copyObj.Age = 10;
/* If anything you change to a copied object,
 it will reflect in the created object too */
console.log(userProfile.Age);

/* If u have inherited the properties using create method and try to change 
  the value it wont affect the original object */
copyObj2.name = "Rohit";
console.log(userProfile.Name); //sanjeev

function printProp() {
   let values = "";
   for (let y in userProfile) {
      values += userProfile[y] + "<br>";
   }
   document.getElementById("demo2").innerHTML = values;
}

//Nested object
const userProfile_2 = {
   name: "Vetri",
   Age: 21,
   Vehicles: {
      Cars: ["BMW", "Benz"],
      Bike: ["RX100", "Max100"],
      CC: 150,
   },
};
console.log(userProfile_2.Vehicles.Cars[1]);
console.log(userProfile_2["Vehicles"]["CC"]); //150

//Nested arrays and object inside arrays
function objArray() {
   let x = "";
   const myObj = {
      name: "John",
      age: 30,
      cars: [
         { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
         { name: "BMW", models: ["320", "X3", "X5"] },
         { name: "Fiat", models: ["500", "Panda"] },
      ],
   };

   for (let i in myObj.cars) {
      x += "<h2>" + myObj.cars[i].name + "</h2>";
      for (let j in myObj.cars[i].models) {
         x += myObj.cars[i].models[j] + "<br>";
      }
   }
   document.getElementById("demo").innerHTML = x;
}

//Object methods
//values (returns an array)
console.log(Object.values(userProfile));

//stringify(It wont stringify(print) the function)
let Parse = "";
function stringify(Parse) {
   Parse = JSON.stringify(userProfile_2);
   document.getElementById("demo3").innerHTML = Parse;
}
let text = JSON.stringify(copyObj2);

//parse
//It is opposite to stringify method and it will return object type(key and value pair)
const text2 = JSON.parse(text);
console.log(text2); // returns json format to object

//get ,set methods
const person = {
   firstName: "Sanjeev",
   lastName: "Jeyagobi",
   language: "eng",
   hobby: "football",
   get lang() {
      return this.language;
   },
   set hobbies(hobby) {
      this.hobby = hobby;
   },
};

console.log(person.lang);

person.hobbies = "cricket";
console.log(person.hobby);
