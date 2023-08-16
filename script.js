const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');
const clearAllButton = document.querySelector('.clear-all');
const backspaceButton = document.querySelector('.backspace');
const history = document.querySelector('.history');
const result = document.querySelector('.result');

let currentNumber = 0;
let previousNumber = 0;
let operator = null;
let historyText = "0";

function addNumber(number) {
    if (currentNumber == 0) {
        currentNumber = number;
    } else {
        currentNumber = currentNumber * 10 + number;
    }
    result.innerHTML = currentNumber;
}

function addOperator(op) {
    if (operator != null) {
        calculate();
    }
    previousNumber = currentNumber;
    currentNumber = 0;
    operator = op;
    historyText = previousNumber + " " + operator;
    history.innerHTML = historyText;
}

function calculate() {
    let answer = 0;
    switch (operator) {
        case '+':
            answer = parseInt(previousNumber) + parseInt(currentNumber);
            break;
        case '-':
            answer = parseInt(previousNumber) - parseInt(currentNumber);
            break;
        case '*':
            answer = parseInt(previousNumber) * parseInt(currentNumber);
            break;
        case '/':
            answer = parseInt(previousNumber) / parseInt(currentNumber);
            break;
    }
    result.innerHTML = answer;
    currentNumber = answer;
    previousNumber = 0;
    operator = null;
    historyText = "0";
    history.innerHTML = historyText;
}

function clearAll() {
    currentNumber = 0;
    previousNumber = 0;
    operator = null;
    historyText = "0";
    history.innerHTML = historyText;
    result.innerHTML = currentNumber;
}

function clearCurrent() {
    currentNumber = 0;
    result.innerHTML = currentNumber;
}

function backspace() {
    currentNumber = Math.floor(currentNumber / 10);
    result.innerHTML = currentNumber;
}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        addNumber(parseInt(button.innerHTML));
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        addOperator(button.innerHTML);
    })
})

equalButton.addEventListener('click', () => {
    calculate();
})

clearAllButton.addEventListener('click', () => {
    clearAll();
})

backspaceButton.addEventListener('click', () => {
    backspace();
})

document.addEventListener('keydown', (event) => {
    if (event.key >= 0 && event.key <= 9) {
        addNumber(parseInt(event.key));
    } else if (event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/') {
        addOperator(event.key);
    } else if (event.key == 'Enter') {
        calculate();
    } else if (event.key == 'Backspace') {
        backspace();
    } else if (event.key == 'Escape' || event.key == 'Delete') {
        clearAll();
    }
})