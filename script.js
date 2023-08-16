let currentNumber = 0;
let previousNumber = 0;
let operator = null;
let historyText = "";
let history = document.querySelector(".history");
let result = document.querySelector(".result");

function addNumber(number) {
    currentNumber = currentNumber * 10 + number;
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
    if (operator == "+") {
        currentNumber = previousNumber + currentNumber;
    } else if (operator == "-") {
        currentNumber = previousNumber - currentNumber;
    } else if (operator == "*") {
        currentNumber = previousNumber * currentNumber;
    } else if (operator == "/") {
        currentNumber = previousNumber / currentNumber;
    }
    result.innerHTML = currentNumber;
    historyText = historyText + " " + currentNumber;
    history.innerHTML = historyText;
    operator = null;
}

function clearAll() {
    currentNumber = 0;
    previousNumber = 0;
    operator = null;
    historyText = "";
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