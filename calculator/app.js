var currentInput = "0";
var previousInput = "";
var operator = "";
var shouldResetDisplay = false;

function updateDisplay() {
  document.getElementById("result").innerHTML = currentInput;
  
  if (operator !== "") {
    document.getElementById("expression").innerHTML = previousInput + " " + operator;
  } else {
    document.getElementById("expression").innerHTML = "";
  }
}


function appendNumber(num) {
  if (currentInput === "0" || shouldResetDisplay) {
    currentInput = num;
    shouldResetDisplay = false;
  } else {
    currentInput = currentInput + num; 
  }
  updateDisplay();
}


function appendDecimal(dot) {
  if (shouldResetDisplay) {
    currentInput = "0";
    shouldResetDisplay = false;
  }
  

  if (currentInput.indexOf(".") === -1) {
    currentInput = currentInput + dot;
  }
  updateDisplay();
}


function appendOperator(op) {
  if (operator !== "" && !shouldResetDisplay) {
    calculateResult();
  }
  
  previousInput = currentInput;
  operator = op;
  shouldResetDisplay = true;
  updateDisplay();
}


function calculateResult() {
  if (operator === "" || shouldResetDisplay) {
    return;
  }


  var num1 = parseFloat(previousInput);
  var num2 = parseFloat(currentInput);
  var calculation = 0;


  switch (operator) {
    case "+":
      calculation = num1 + num2;
      break;
    case "-":
      calculation = num1 - num2;
      break;
    case "*":
      calculation = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        alert("Cannot divide by zero!");
        clearAll();
        return;
      }
      calculation = num1 / num2;
      break;
    default:
      return;
  }


  currentInput = calculation.toString();
  operator = "";
  previousInput = "";
  shouldResetDisplay = true;
  updateDisplay();
}

function clearAll() {
  currentInput = "0";
  previousInput = "";
  operator = "";
  shouldResetDisplay = false;
  updateDisplay();
}


function deleteChar() {
  if (shouldResetDisplay) {
    return;
  }

  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, currentInput.length - 1);
  } else {
    currentInput = "0";
  }
  updateDisplay();
}