let today = new Date();// It is internally called toString.
console.log(today.getDay());



function DateInfo() {
    let x = {
        Date: `${today.getDate()}`,
        Day: `${today.getDay()}`,
        year: `${today.getFullYear()}`,
        Month: `${today.getMonth()}`,
        Hours: `${today.getHours()}`,
        Minutes: `${today.getMinutes()}`,
        Seconds: `${today.getSeconds()}`
    };
    document.getElementById("p2").innerHTML = JSON.stringify(x);
}