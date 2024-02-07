//For code readability
let display = document.getElementById("display");
let previousCalculation = document.getElementById("previousCalculations");

//Function to adding the operands amd operations
function clicktoAppend(value) {
    display.value += value;
}

//To clear the display box
function clicktoClearAll() {
    display.value = "";
    
}

//To clear the single text
function clicktoClear() {
    display.value = display.value.slice(0,-1);
    
}

//To calculate the displaying numbers
function clicktoCalculate()
{
    try{
       const operation = display.value;
       display.value = eval(display.value);
       const result = display.value;
       displayHistory(result,operation);
    }
    catch(Error){
        display.value = "Invalid Calculation";
    }
}

//to show the previous calculations
function displayHistory(result,operation)
{
    const history = `${operation} = ${result}`;
    const line = document.createElement("p");
    line.textContent = history;
    previousCalculation.appendChild(line);
}
//to clear the previous calculations
function clicktoClrhistory(){
    previousCalculation.innerText = "";
}
