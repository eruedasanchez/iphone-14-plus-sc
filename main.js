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
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', () => {
    lastValue += userInputNumber;                                                         // suma la cantidad actual y la anterior (no los pisa)
    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';                                             // .style cambia los estilos y .display de la prop display unicamente 
    priceModal.innerHTML = `$1000.00 x${lastValue} <span>$${1000 * lastValue}</span>`;    // actualizacion del precio al ir aumentando la cantidad      
});

/* Mostrar el modal con el detalle del carrito */

const cartIconBtn = document.querySelector('.header-container__carrito');
const cartModal = document.querySelector('.carrito-modal');
let priceModal = document.querySelector('.carrito-modal__price');

cartIconBtn.addEventListener('click', () => {
    cartModal.classList.toggle('show');                                     // .toggle: si existe la clase, la quita, si no, la agrega
});







