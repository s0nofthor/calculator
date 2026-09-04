//Identify Parts
const device = document.getElementById('container');
    const display = document.getElementById('display');
        let num1 = display.appendChild(document.createElement('div'));
        let op = display.appendChild(document.createElement('div'));
        let num2 = display.appendChild(document.createElement('div'));
    const button = display.querySelectorAll('button');
    const numBox = document.getElementById('number-inputs');
        const nums = numBox.querySelector('button');
    const opBox = document.getElementById('in-betweens');
        const ops = opBox.querySelector('button');
    const eraserBox = document.getElementById('erasers');
        const erasers = eraserBox.querySelector('button');
//Create Operations
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
    //Access Operations
    function operate(num1, op, num2) {
        if (op === add) {
            return add(num1, num2);
        } else if (op === subtract) {
            return subtract(num1, num2);
        } else if (op === multiply) {
            return multiply(num1, num2);
        } else if (op === divide) {
            return divide(num1, num2);
        }
    }