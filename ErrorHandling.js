"use strict";
//Type error
try {
  const name = "Sanjeev";
  name = "Rohit";
} catch (err) {
  console.error(err.name);
}

//Custom error setting
let age = 9;
try {
  if (age <= 18) {
    throw new Error("You are not eligible to vote");
  }
  console.log("You are eligible to vote");
} catch (e) {
  console.error(e);
}

function myError() {
  const message = document.getElementById("p1");
  message.innerHTML = "";
  let x = document.getElementById("demo4").value;
  try {
    if (x.trim() == "") {
      throw "empty";
    }
    if (isNaN(x)) {
      throw "not a number";
    }
    x = Number(x);
    if (x < 5) {
      throw "too low";
    }
    if (x > 10) {
      throw "too high";
    }
    message.textContent = "Input is " + x;
  } catch (err) {
    message.innerHTML = "Input is " + err;
  }
}
