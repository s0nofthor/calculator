//Identify Parts
    const button = document.querySelectorAll('button');
    //Memory Log
        const memory = document.getElementById('memory');
        let mem = [];
        let memNumber = 0;
        let chosenMem = [];
    //Operations
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
        if (OP === '/' && (X === '0' || Y === '0'))  {
            arrIs.push("You should know that's not possible");
        } else {
            let result = pickOperation(Number(X), OP, Number(Y));
            if (!arrIs[1]){
                if (result % 1 != 0) {
                    arrIs.push(`${result.toFixed(3)}`);
                } else {
                    arrIs.push(`${result}`);
                }
            }
        }
    }
//Update Display
    function updateDisplay() {
        x.innerHTML = arrX.join('');
        op.innerHTML = arrOp;
        y.innerHTML = arrY.join('');
    }
//Memory
    function storeMemory() {
        if (arrIs[1] !== "You should know that's not possible") {
            memNumber += 1;
            let item = document.createElement('button');
            item.classList.add('memory');
            item.id = memNumber;
            const oldX = document.createElement('div');
                oldX.id = "topLine";
                oldX.innerHTML = arrX.join('');
            const bottomLine = document.createElement('div');
                const oldOp = document.createElement('div');
                    oldOp.innerHTML = arrOp.join('');
                bottomLine.id = "bottomLine";
                bottomLine.appendChild(oldOp);
                const oldY = document.createElement('div');
                    oldY.innerHTML = arrY.join('');
                    bottomLine.appendChild(oldY);
            const oldResultHolder = document.createElement('div');
                oldResultHolder.id = "oldResultHolder";
            const oldResult = document.createElement('div');
                oldResult.id = "oldResult";
                oldResultHolder.appendChild(oldResult);
                oldResult.innerHTML = is.textContent.slice(2);
            mem.push([oldX.innerHTML, oldOp.innerHTML, oldY.innerHTML, oldResult.innerHTML]);
            item.appendChild(oldX);
            item.appendChild(bottomLine);
            item.appendChild(oldResultHolder);
            memory.appendChild(item);
        }
    }
    memory.addEventListener('mouseover', e=> {
        if (!e.target.closest('.memory')) return;
        let throwBack = e.target.closest('.memory');
        let oldResultBox = throwBack.querySelector('#oldResultHolder');
        throwBack.style.backgroundImage = "url('images/reverse-chalk.png')";
        oldResultBox.style.borderImage = "url('images/reverse-chalk.png') 30";
    })
    memory.addEventListener('mouseout', e => {
        if (!e.target.closest('.memory')) return;
        throwBack = e.target.closest('.memory');
        let oldResultBox = throwBack.querySelector('#oldResultHolder');
        throwBack.style.backgroundImage = "url('images/chalk.png')";
        oldResultBox.style.borderImage = "url('images/chalk.png') 30";
    })
    memory.addEventListener('click', e => {
        if (!e.target.closest('.memory')) return;
            let throwBack = e.target.closest('.memory');
            chosenMem.push(mem[throwBack.id - 1]);
            let toPutBack = chosenMem.flat();
            arrX.splice(0, Infinity, toPutBack[0]);
            arrOp.splice(0, 1, toPutBack[1]);
            arrY.splice(0, Infinity, toPutBack[2]);
            arrIs.splice(1, Infinity, toPutBack[3]);
            chosenMem.splice(0, Infinity);
            updateDisplay();
            is.innerHTML = arrIs.join('');
            throwBack.blur();
    })
//Input Triggers
    function origState(intended) {
        setTimeout(function() {
            intended.style.borderStyle = 'outset'
        }, 200);
    }
    document.addEventListener('keydown', e => {
        if (e.key === '1') {
            let one = document.getElementById('one');
            one.click();
            one.style.borderStyle = 'inset';
            origState(one);
        } else if (e.key === '2') {
            let two = document.getElementById('two');
            two.click();
            two.style.borderStyle = 'inset';
            origState(two);
        } else if (e.key === '3') {
            let three = document.getElementById('three');
            three.click();
            three.style.borderStyle = 'inset';
            origState(three);
        } else if (e.key === '4') {
            let four = document.getElementById('four');
            four.click();
            four.style.borderStyle = 'inset';
            origState(four);
        } else if (e.key === '5') {
            let five = document.getElementById('five');
            five.click();
            five.style.borderStyle = 'inset';
            origState(five);
        } else if (e.key === '6') {
            let six = document.getElementById('six');
            six.click();
            six.style.borderStyle = 'inset';
            origState(six);
        } else if (e.key === '7') {
            let seven = document.getElementById('seven');
            seven.click();
            seven.style.borderStyle = 'inset';
            origState(seven);
        } else if (e.key === '8') {
            let eight = document.getElementById('eight');
            eight.click();
            eight.style.borderStyle = 'inset';
            origState(eight);
        } else if (e.key === '9') {
            let nine = document.getElementById('nine');
            nine.click();
            nine.style.borderStyle = 'inset';
            origState(nine);
        } else if (e.key === '0') {
            let zero = document.getElementById('zero');
            zero.click();
            zero.style.borderStyle = 'inset';
            origState(zero);
        } else if (e.key === '.') {
            let point = document.getElementById('.');
            point.click();
            point.style.borderStyle = 'inset';
            origState(point);
        } else if (e.key === '-') {
            if (arrX[0] && !arrOp[0]
            || arrY[0]) {
                let subtract = document.getElementById('subtract');
                subtract.click();
                subtract.style.borderStyle = 'inset';
                origState(subtract);
            } else if (!arrX[0]
                    || arrX[0] && arrOp[0]) {
                let neg = document.getElementById('neg');
                neg.click();
                neg.style.borderStyle = 'inset';
                origState(neg);
            }
        } else if (e.key === '+') {
            let add = document.getElementById('add');
            add.click();
            add.style.borderStyle = 'inset';
            origState(add);
        } else if (e.key === '*') {
            let multiply = document.getElementById('multiply');
            multiply.click();
            multiply.style.borderStyle = 'inset';
            origState(multiply);
        } else if (e.key === '/') {
            let divide = document.getElementById('divide');
            divide.click();
            divide.style.borderStyle = 'inset';
            origState(divide);
        } else if (e.key === '=') {
            let equals = document.getElementById('equals');
            equals.click();
            equals.style.borderStyle = 'inset';
            origState(equals);
        } else if (e.key === 'Backspace') {
            if (arrIs[1]) {
                let backspace = document.getElementById('backspace');
                backspace.style.borderStyle = 'inset';
                origState(backspace);
                arrIs.splice(1);
                is.innerHTML = '';
            } else if (!arrIs[1]) {
                let backspace = document.getElementById('backspace');
                backspace.click();
                backspace.style.borderStyle = 'inset';
                origState(backspace);
            }
        } else if (e.key === 'b') {
            let clearEntry = document.getElementById('clear-entry');
            clearEntry.click();
            clearEntry.style.borderStyle = 'inset';
            origState(clearEntry);
        } else if (e.key === 'c') {
            let allClear = document.getElementById('all-clear');
            allClear.click();
            allClear.style.borderStyle = 'inset';
            origState(allClear);        
        }else if (e.key === 'Enter') {
            let equals = document.getElementById('equals');
            equals.click();
            equals.style.borderStyle = 'inset';
            origState(equals);
        }
    });
    button.forEach(btn => {
        btn.addEventListener('click', event => {
            if (btn.id === 'equals') {
                if (arrY[0] === '-' && arrY[1] 
                ||arrY[0] && arrY[0] !== '-') {
                    operate();
                    is.innerHTML = arrIs.join('');
                    storeMemory();
                }
            } else if (btn.className === 'num' && !arrOp[0] && arrX[arrX.length - 2] !== '.') {
                arrX.push(btn.innerHTML);
            } else if (btn.className === 'op' && arrX[0]) {
                if (!arrOp[0]) {
                    arrOp.push(btn.innerHTML);
                } else {
                    if (arrY[0]) {
                        operate();
                        x.innerHTML = arrIs.join('');
                        arrOp.splice(0, 1, btn.innerHTML);
                    } else {
                        arrOp.splice(0, 1, btn.innerHTML);
                    }
                } 
                if (arrIs[1] 
                && arrIs[1] !== "You should know that's not possible") {
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
            updateDisplay();
            this.borderStyle = 'outset';
            btn.blur();
        })
    })