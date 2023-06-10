/* Aumentar y disminuir el contador de productos */

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', () => {
    userInputNumber++;
    userInput.value = userInputNumber;
});

minusBtn.addEventListener('click', () => {
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0; // no admite valores de compras negativos
    }
    userInput.value = userInputNumber;
});

