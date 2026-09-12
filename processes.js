//Identify Parts
const button = document.querySelectorAll('button');
let arrX = [];
let arrOp = [];
let arrY = [];
let arrIs = ['=',];
const nums = '1234567890';
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
function operate(x, op, y) {
    if (op === "+") {
        return add(x, y);
    } else if (op === "-") {
        return subtract(x, y);
    } else if (op === "*") {
        return multiply(x, y);
    } else if (op === "/") {
        return divide(x, y);
    }
}
//Input Triggers
button.forEach(btn => {
    btn.addEventListener('click', event => {
        if (btn.className === 'num' && !arrOp[0]) {
            arrX.push(btn.innerHTML);
        } else if (btn.className === 'op' && arrX[0]) {
            if (!op) {
                arrOp.push(btn.innerHTML);
            } else if (op){
                arrOp.splice(0, 1, btn.innerHTML);
            } if (arrIs[1]) {
                arrX.splice(0, Infinity, arrIs.slice(1));
                arrY.splice(0);
                arrIs.splice(1);
                is.innerHTML = '';
            }
        } else if (btn.className === 'num' && arrOp[0]) {
            arrY.push(btn.innerHTML);
        } else if (btn.id === 'neg') {
            if (!arrOp[0]) {
                if (arrX[0] !== "-") {
                    arrX.unshift("-");
                } else if (arrX[0] === "-") {
                    arrX.shift();
                }
            } else if (arrOp[0]){
                if (arrY[0] !== "-") {
                    arrY.unshift("-");
                } else if (arrY[0] === "-") {
                    arrY.shift();
                }
            }
        } else if (btn.id === 'clear-entry') {
            if (arrY[0]) {
                arrY.splice(0);
            } else if (!arrY[0] && arrX[0]) {
                arrOp.splice(0);
                arrX.splice(0);
            }
        } else if (btn.id === 'all-clear') {
            arrX.splice(0);
            arrOp.splice(0);
            arrY.splice(0);
            arrIs.splice(1);
        }
        x.innerHTML = arrX.join('');
        op.innerHTML = arrOp;
        y.innerHTML = arrY.join('');
        if (btn.id === 'equals') {
            let X = arrX.join('');
            let OP = arrOp[0];
            let Y = arrY.join('');
            arrIs.push(operate(Number(X), OP, Number(Y)));
            is.innerHTML = arrIs.join('');
        }
    })
})