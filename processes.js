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
        const equal = document.getElementById('equals');
        const clearEntry = document.getElementById('clear-entry');
        const allClear = document.getElementById('all-clear');
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
//Clearing Children
function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
//Input Triggers
button.forEach(btn => {
    btn.addEventListener('click', event => {
        if (btn.className === 'num' && !oprtn.firstChild) {
            let x = document.createElement('div');
            x.innerHTML = btn.innerHTML;
            num1.appendChild(x);
        } else if (btn.className === 'op' && num1.firstChild) {
            if (!op) {
                let op = document.createElement('div');
                oprtn.appendChild(op);
            } 
            op.innerHTML = btn.innerHTML;
        } else if (btn.className === 'num' && oprtn.firstChild) {
            let y = document.createElement('div');
            y.innerHTML = btn.innerHTML;
            num2.appendChild(y);
        } else if (btn.id === 'neg') {
            if (!num2.firstChild) {
                if (num1.firstChild.textContent !== "-") {
                    num1.prepend("-");
                } else if (num1.firstChild.textContent === "-") {
                    num1.removeChild(num1.firstChild);
                }
            } else if (num2.firstChild){
                if (num2.firstChild.textContent !== "-") {
                    num2.prepend("-");
                } else if (num2.firstChild.textContent === "-") {
                    num2.removeChild(num2.firstChild);
                }
            }
        } else if (btn.id === 'clear-entry') {
            if (num2.firstChild) {
                removeAllChildren(num2);
            } else if (!num2.firstChild && num1.firstChild) {
                removeAllChildren(oprtn);
                removeAllChildren(num1);
            }
        } else if (btn.id === 'all-clear') {
            removeAllChildren(num1);
            removeAllChildren(oprtn);
            removeAllChildren(num2);
        }
    })
})