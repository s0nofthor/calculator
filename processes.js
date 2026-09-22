//Identify Parts
const button = document.querySelectorAll('button');
let arrX = [];
let arrOp = [];
let arrY = [];
let arrIs = ['= ',];
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
function pickOperation(x, op, y) {
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
function operate() {
    let X = arrX.join('');
    let OP = arrOp[0];
    let Y = arrY.join('');
    if (Y === '0') {
        arrIs.push("You should know you can't do that");
    } else {
        let result = pickOperation(Number(X), OP, Number(Y));
        if (!arrIs[1]){
            if (result % 1 != 0) {
        arrIs.push(result.toFixed(3));
            } else {
                arrIs.push(result);
            }
        }
    }
}
//Input Triggers
document.addEventListener('keydown', e => {
    if (e.key === '1') {
        document.getElementById('1').click();
    } else if (e.key === '2') {
        document.getElementById('2').click();
    } else if (e.key === '3') {
        document.getElementById('3').click();
    } else if (e.key === '4') {
        document.getElementById('4').click();
    } else if (e.key === '5') {
        document.getElementById('5').click();
    } else if (e.key === '6') {
        document.getElementById('6').click();
    } else if (e.key === '7') {
        document.getElementById('7').click();
    } else if (e.key === '8') {
        document.getElementById('8').click();
    } else if (e.key === '9') {
        document.getElementById('9').click();
    } else if (e.key === '0') {
        document.getElementById('0').click();
    } else if (e.key === '.') {
        document.getElementById('.').click();
    } else if (e.key === '-') {
        if (arrX[0] && !arrOp[0]
         || arrY[0]) {
            document.getElementById('subtract').click();
        } else if (!arrX[0]
                 || arrX[0] && arrOp[0]) {
            document.getElementById('neg').click();
        }
    } else if (e.key === '+') {
        document.getElementById('add').click();
    } else if (e.key === '*') {
        document.getElementById('multiply').click();
    } else if (e.key === '/') {
        document.getElementById('divide').click();
    } else if (e.key === '=') {
        document.getElementById('equals').click();
    } else if (e.key === 'Backspace') {
        if (arrIs[1]) {
            arrIs.splice(1);
            is.innerHTML = '';
        } else if (!arrIs[1]) {
            document.getElementById('backspace').click();
        }
    } else if (e.key === 'Enter') {
        document.getElementById('equals').click();
    }
});
button.forEach(btn => {
    btn.addEventListener('click', event => {
        if (btn.id === 'equals') {
            if (arrY[0] === '-' && arrY[1] 
              ||arrY[0] && arrY[0] !== '-') {
            operate();
            is.innerHTML = arrIs.join('');
            }
        }
        if (btn.className === 'num' && !arrOp[0] && arrX[arrX.length - 2] !== '.') {
            arrX.push(btn.innerHTML);
        } else if (btn.className === 'op' && arrX[0]) {
            if (!arrOp[0]) {
                arrOp.push(btn.innerHTML);
            } else if (arrOp[0]) {
                if (!arrY[0]) {
                arrOp.splice(0, 1, btn.innerHTML);
                } else {
                    operate();
                    x.innerHTML = arrIs.join('');
                    arrOp.splice(0, 1, btn.innerHTML);
                }
            } 
            if (arrIs[1]) {
                arrX.splice(0, Infinity, arrIs.slice(1));
                arrY.splice(0);
                arrIs.splice(1);
                is.innerHTML = '';
            }
        } else if (btn.className === 'num' && arrOp[0] && !arrIs[1] && arrY[arrY.length - 2] !== '.') {
            arrY.push(btn.innerHTML);
        } else if (btn.id === 'neg') {
            if (!arrOp[0]) {
                if (arrX[0] !== "-") {
                    arrX.unshift("-");
                }
            } else if (arrOp[0] && !arrIs[1]){
                if (arrY[0] !== "-" && !arrY[0]) {
                    arrY.unshift("-");
                }
            }
        } else if (btn.id === 'backspace') {
            if (arrY[0]) {
                arrY.pop();
            } else if (arrOp[0] && !arrY[0]) {
                arrOp.pop();
            } else if (arrX[0] && !arrOp[0]) {
                arrX.pop();
            }
        } else if (btn.id === 'clear-entry') {
            if (arrY[0]) {
                arrY.splice(0);
                arrIs.splice(1);
                is.innerHTML = '';
            } else if (!arrY[0] && arrX[0]) {
                arrOp.splice(0);
                arrX.splice(0);
            }
        } else if (btn.id === 'all-clear' 
                || btn.className === 'num' && arrIs[1]) {
            arrX.splice(0);
            arrOp.splice(0);
            arrY.splice(0);
            arrIs.splice(1);
            is.innerHTML = '';
            if (btn.className === 'num') {
                arrX.push(btn.innerHTML);
            }
        }
        x.innerHTML = arrX.join('');
        op.innerHTML = arrOp;
        y.innerHTML = arrY.join('');
    })
})