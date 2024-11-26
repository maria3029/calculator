let currentNumber = '';
let previousNumber = '';
let operation = null;

function numbers(num) {
  if (num === '.' && currentNumber.includes('.')) return;
  currentNumber += num;
  updateDisplay();
}

function choose(op) {
  if (currentNumber === '') return;
  if (previousNumber !== '') {
    compute();
  }
  operation = op;
  previousNumber = currentNumber;
  currentNumber = '';
}

function compute() {
  let result;
  const prev = parseFloat(previousNumber);
  const current = parseFloat(currentNumber);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  operation = null;
  previousNumber = '';
  updateDisplay();
}

function clearDisplay() {
  console.log('Clear function called');
  currentNumber = '';
  previousNumber = '';
  operation = null;
  updateDisplay();
}


function updateDisplay() {
  const display = document.getElementById('display');
  if (!display) {
    console.error('Display element not found!');
    return;
  }
  display.value = currentNumber || '0';
}
