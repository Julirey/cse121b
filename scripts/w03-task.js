/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers (){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add (addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click",addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2){
    return number1 - number2;
}

const subtractNumbers = function(){
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract (subtractNumber1, subtractNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click",subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => document.querySelector("#product").value = multiply(Number(document.querySelector("#factor1").value), Number(document.querySelector("#factor2").value));

document.querySelector("#multiplyNumbers").addEventListener("click",multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2){
    return number1 / number2;
}

function divideNumbers(){
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide (dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click",divideNumbers);

/* Decision Structure */
function calculatePercentage(number, percentage){
    return number * (percentage / 100)
}

function calculateSubtotal (){
    let number = Number(document.querySelector("#subtotal").value);
    let checkbox = document.querySelector("#member");
    if (checkbox.checked){
        document.querySelector("#total").textContent = `$${(Math.round((number - calculatePercentage(number, 15)) * 100) / 100).toFixed(2)}`;
    } else {
        document.querySelector("#total").textContent = `$${(Math.round(number * 100) / 100).toFixed(2)}`;
    }
}

document.querySelector("#getTotal").addEventListener("click",calculateSubtotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").textContent = numbersArray;

/* Output Odds Only Array */
document.querySelector("#odds").textContent = numbersArray.filter((number) => number % 2 === 1);

/* Output Evens Only Array */
document.querySelector("#evens").textContent = numbersArray.filter((number) => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").textContent = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").textContent = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
