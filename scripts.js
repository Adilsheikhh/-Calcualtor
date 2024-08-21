// Select the display element
const display = document.getElementById('display');

// Function to append values to the display
function appendToDisplay(value) {
    if (value === '.' && display.value.includes('.')) return; // Prevent multiple dots
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to perform calculation
function calculate() {
    try {
        // Evaluate the expression in the display
        display.value = eval(display.value);
    } catch (error) {
        // Handle any errors (e.g., invalid input)
        display.value = 'Error';
    }
}

// Handle keyboard input
document.addEventListener('keydown', function (event) {
    const key = event.key;
    
    if ('0123456789'.includes(key)) {
        appendToDisplay(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(` ${key} `);
    } else if (key === '.') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
