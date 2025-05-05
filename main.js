const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let resultShown = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (button.classList.contains('clear')) {
      currentInput = '';
      display.textContent = '0';
      return;
    }

    if (button.classList.contains('equal')) {
      try {
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
        resultShown = true;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
      return;
    }

    if (resultShown && !isNaN(value)) {
      // Reset if last result was shown
      currentInput = '';
      display.textContent = '0';
      resultShown = false;
    }

    currentInput += value;
    display.textContent = currentInput;
  });
});