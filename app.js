//Funciones de operaciones basicas

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

//Create three variables for each of the parts of a calculator operation
let firstNumberCalculator;
let secondNumberCalculator;
let operatorCalculator;

//Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers

function operate(operator, first, second){
    switch (operator) {
        case "+":
            return add(first, second);
        
        case "-":
            return subtract(first, second);
        
        case "*":
            return multiply(first, second);
        
        case "/":
            if (second === 0) return "Error dividir por cero"
            return divide(first, second);
        
    }
}
/* Create the functions that populate the display when you 
click the number buttons. You should be storing the ‘display 
value’ in a variable somewhere for use in the next step.
*/

const buttons = document.querySelectorAll('button');
const screenUnder = document.querySelector('.screen-under');
const screenAbove = document.querySelector('.screen-above');

buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        screenUnder.textContent += button.textContent;
        if (button.textContent === "C") {
            screenUnder.textContent = ''; //clear button
            screenAbove.textContent = '';
            count = 0;
        }
    });
});

// logica de los operator
// logica de los operator
let acumulator = 0;
let count = 0;

const operatorButton = document.querySelectorAll('.operator-btn')
operatorButton.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        
        if (count === 0) {
            firstNumberCalculator = parseFloat(screenUnder.textContent.slice(0,-1));
            acumulator = firstNumberCalculator;
            count += 1;
        } else {
            acumulator = operate(operatorCalculator, acumulator, parseFloat(screenUnder.textContent.slice(0,-1)));
        }
        operatorCalculator = button.textContent;
        screenAbove.textContent += screenUnder.textContent;
        screenUnder.textContent = '';
    });
});

const resolveButton = document.querySelectorAll('.resolve-button')
resolveButton.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        screenAbove.textContent += screenUnder.textContent;
        secondNumberCalculator = parseFloat(screenUnder.textContent.slice(0,-1))
        screenUnder.textContent = '';
        screenUnder.textContent = Math.round(operate(operatorCalculator,acumulator,secondNumberCalculator));
    });
});
