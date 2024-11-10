// calc.js

// function to display numbers on the screen
function displayNumbers(number) {
    if (calcText.textContent === '0') {
        calcText.textContent = number.toString();
    } else {
        calcText.textContent += number.toString();
    }
    // Then change the value of AC to C
    ac.textContent = 'C';
}


// We retrieve all DOM elements
document.addEventListener("DOMContentLoaded", function () {
    // Selection of DOM elements
    const calcScreen = document.getElementById('calcScreen');
    const calcText = document.getElementById('calcText');
    const ac = document.getElementById('ac');
    const plusMoins = document.getElementById('plusMoins');
    const percent = document.getElementById('percent');
    const division = document.getElementById('division');
    const seven = document.getElementById('seven');
    const eight = document.getElementById('eight');
    const nine = document.getElementById('nine');
    const multiplication = document.getElementById('multiplication');
    const four = document.getElementById('four');
    const five = document.getElementById('five');
    const six = document.getElementById('six');
    const minus = document.getElementById('minus');
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const plus = document.getElementById('plus');
    const zero = document.getElementById('zero');
    const virgule = document.getElementById('virgule');
    const equality = document.getElementById('equality');
    const calcForm = document.getElementById('calcForm');
    const themeText = document.getElementById('themeText');

    //Before, we initialize two states
    let firstNumber = null
    let operator = null

    //function to handle multiplication
    multiplication.addEventListener('click', function () {
        firstNumber = parseFloat(calcText.textContent)
        operator = 'multiply'
        calcText.textContent = ''; // Clear the screen content correctly
    })

    //function to handle addition
    plus.addEventListener('click', function () {
        firstNumber = parseFloat(calcText.textContent)
        operator = 'plus'
        calcText.textContent = ''; // Clear the screen content correctly
    })

    //function to handle subtraction
    minus.addEventListener('click', function () {
        firstNumber = parseFloat(calcText.textContent)
        operator = 'minus'
        calcText.textContent = ''; // Clear the screen content correctly
    })

    //function to handle division
    division.addEventListener('click', function () {
        firstNumber = parseFloat(calcText.textContent)
        operator = 'divide'
        calcText.textContent = ''; // Clear the screen content correctly
    })

    //function to handle equality
    equality.addEventListener('click', function () {
        if (operator === 'plus' && firstNumber !== null) {
            const secondNumber = parseFloat(calcText.textContent)
            const result = firstNumber + secondNumber
            calcText.textContent = result.toString()
            firstNumber = null
            operator = null
        }
        else if (operator === 'minus' && firstNumber !== null) {
            const secondNumber = parseFloat(calcText.textContent)
            const result = firstNumber - secondNumber
            calcText.textContent = result.toString()
            firstNumber = null
            operator = null
        } 
        else if (operator === 'divide' && firstNumber!== null) {
            const secondNumber = parseFloat(calcText.textContent)
            const result = firstNumber / secondNumber
            calcText.textContent = result.toString()
            firstNumber = null
            operator = null
        }
        else if (operator === 'multiply' && firstNumber !== null){
            const secondNumber = parseFloat(calcText.textContent)
            const result = firstNumber * secondNumber
            calcText.textContent = result.toString()
            firstNumber = null
            operator = null
        }
        else {
            alert('An error occurred while trying your operation. Please try again later')
        }
    })
    
    // function to erase value from the screen
    function erase() {
        calcText.textContent = '0';
    }


    // Adding a Listener to ac element to clear numbers on the screen when clicked
    ac.addEventListener('click', function () {
        if (ac.textContent === 'C') {
            ac.textContent = 'AC';
            calcText.textContent = '0'; // Clear the screen content correctly
        }
    });

    //Managing the color theme 
    
    //Firstly, we initialize two states to false
    let isLight = true;
    let isDark = false;
    
    //We handle light mode
    themeText.addEventListener('click', function(){

        if(isLight){
        themeText.textContent = 'Dark mode'
        themeText.style.backgroundColor = 'var(--gris-clair)'
        themeText.style.color = 'var(--noir)'
        calcText.style.color = 'var(--blanc)'
        calcForm.style.backgroundColor = 'var(--gris-fonce)'
        zero.style.backgroundColor = 'var(--noir)'
        one.style.backgroundColor = 'var(--noir)'
        two.style.backgroundColor = 'var(--noir)'
        three.style.backgroundColor = 'var(--noir)'
        four.style.backgroundColor = 'var(--noir)'
        five.style.backgroundColor = 'var(--noir)'
        six.style.backgroundColor = 'var(--noir)'
        seven.style.backgroundColor = 'var(--noir)'
        eight.style.backgroundColor = 'var(--noir)'
        nine.style.backgroundColor = 'var(--noir)'
        virgule.style.backgroundColor = 'var(--noir)'
        isLight = false
        isDark = true
    } else if (isDark) {
        themeText.textContent = 'Light mode'
        themeText.style.backgroundColor = 'var(--noir)'
        themeText.style.color = 'var(--blanc)'
        calcText.style.color = 'var(--blanc)'
        calcForm.style.backgroundColor = 'var(--noir)'
        zero.style.backgroundColor = 'var(--gris-fonce)'
        one.style.backgroundColor = 'var(--gris-fonce)'
        two.style.backgroundColor = 'var(--gris-fonce)'
        three.style.backgroundColor = 'var(--gris-fonce)'
        four.style.backgroundColor = 'var(--gris-fonce)'
        five.style.backgroundColor = 'var(--gris-fonce)'
        six.style.backgroundColor = 'var(--gris-fonce)'
        seven.style.backgroundColor = 'var(--gris-fonce)'
        eight.style.backgroundColor = 'var(--gris-fonce)'
        nine.style.backgroundColor = 'var(--gris-fonce)'
        virgule.style.backgroundColor = 'var(--gris-fonce)'
        isDark = false
        isLight = true
    }
    })
})
