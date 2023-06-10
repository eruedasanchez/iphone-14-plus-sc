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

/* Agregar el total de productos al icono del carrito cuando se presiona el btn agregar al carrito */

const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header-container__carrito--notif');

addToCartBtn.addEventListener('click', () => {
    let lastValue = parseInt(cartNotification.innerText);
    lastValue += userInputNumber;                           // suma la cantidad actual y la anterior (no los pisa)
    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';              // .style cambia los estilos y .display de la prop display unicamente 
});



