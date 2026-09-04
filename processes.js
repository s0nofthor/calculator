//Identify Parts
const device = document.getElementById('container');
    const display = document.getElementById('display');
        let num1 = display.appendChild(document.getElementById('x'));
        let oprtn = display.appendChild(document.getElementById('op'));
        let num2 = display.appendChild(document.getElementById('y'));
    const button = device.querySelectorAll('button');
    const numBox = document.getElementById('number-inputs');
        const nums = numBox.querySelector('button');
    const opBox = document.getElementById('in-betweens');
        const ops = opBox.querySelector('button');
    const bigChangeBox = document.getElementById('transformers');
        const bigChanges = bigChangeBox.querySelector('button');
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
//Input Triggers
button.forEach(btn => {
    btn.addEventListener('click', event => {
        if (btn.className === 'num' && op.innerHTML === '') {
            let x = document.createElement('div');
            x.innerHTML = btn.innerHTML;
            num1.appendChild(x);
        } else if (num1.innerHTML !== '' && btn.className === 'op') {
            let op = document.createElement('div');
            op.innerHTML = btn.innerHTML;
            oprtn.appendChild(op);
        } else if (oprtn.innerHTML !== '' && btn.className === 'num') {
            let y = document.createElement('div');
            y.innerHTML = btn.innerHTML;
            num2.appendChild(y);
        }
    })
})