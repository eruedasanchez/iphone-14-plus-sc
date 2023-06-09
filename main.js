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
    cartNotification.style.display = 'block';
    drawProductInModal(); // cuando se elimina el producto, se puedan volver a cargar productos                                             // .style cambia los estilos y .display de la prop display unicamente 
});

/* Mostrar el modal con el detalle del carrito */

const cartIconBtn = document.querySelector('.header-container__carrito');
const cartModal = document.querySelector('.carrito-modal');
// let priceModal = document.querySelector('.carrito-modal__price');
const productContainer = document.querySelector('.carrito-modal__checkout-container');

cartIconBtn.addEventListener('click', () => {
    cartModal.classList.toggle('show');                                     // .toggle: si existe la clase, la quita, si no, la agrega
    
    if(lastValue == 0){
        productContainer.innerHTML = '<p class="cart-empty">El carrito esta vacio</p>';
    } else {
        drawProductInModal();
    }
});

/* Activar carrousel de imagenes (version mobile) */

const imagesContainer = document.querySelector('.gallery__img-container');
const previousGalleryBtn = document.querySelector('.gallery__previous');
const nextGalleryBtn = document.querySelector('.gallery__next');
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', () => {
    changeNextImage(imagesContainer);
});

previousGalleryBtn.addEventListener('click', () => {
    changePreviousImage(imagesContainer);
});

/* Mostrar galeria modal al click en la imagen */

const imagesModal = document.querySelector('.modal-gallery__background');
const closeModalBtn = document.querySelector('.modal-gallery__close-container');

imagesContainer.addEventListener('click', () => {
    imagesModal.style.display = 'grid';
});

closeModalBtn.addEventListener('click', () => {
    imagesModal.style.display = 'none';
});

/* Cambiar las imagenes principales al clickear los thumbnails */

let thumbnails = document.querySelectorAll('.gallery__thumbnail');
thumbnails = [...thumbnails];                                            // convierte el node-list thumbnails a arreglo

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', event => {
        imagesContainer.style.backgroundImage = `url('./assets/img/iphone-14-pro-max-${event.target.id}.jpg')`;
    });
});

/* Cambiar las imagenes principales al clickear los thumbnails en modal gallery */

const modalImageContainer = document.querySelector('.modal-gallery__img-container');
let modalThumbnails = document.querySelectorAll('.modal-gallery__thumbnail');
modalThumbnails = [...modalThumbnails];                                            // convierte el node-list thumbnails a arreglo

modalThumbnails.forEach(modalthumbnail => {
    modalthumbnail.addEventListener('click', event => {
        modalImageContainer.style.backgroundImage = `url('./assets/img/iphone-14-pro-max-${event.target.id.slice(-1)}.jpg')`; // .slice(-1) corta desde el final 1 digito y se lo queda (m1 y se obtiene 1)  
    });
});

/* Cambiar las imagenes principales de la galeria modal utilizando las flechas */

const nextModalBtn = document.querySelector('.modal-gallery__next');
const previousModalBtn = document.querySelector('.modal-gallery__previous');

nextModalBtn.addEventListener('click', () => {
    changeNextImage(modalImageContainer);
});

previousModalBtn.addEventListener('click', () => {
    changePreviousImage(modalImageContainer);
});

/* Mostrar modal navbar al clickear menu hamburguesa */

const hamburgerMenuBtn = document.querySelector('.header-container__menu');
const modalNavbarBackground = document.querySelector('.modal-navbar__background');
const modalNavbar = document.querySelector('.modal-navbar');
const closeHamburgerMenuBtn = document.querySelector('.modal-navbar__close-icon');

hamburgerMenuBtn.addEventListener('click', () => {
    modalNavbarBackground.style.display = 'block';
    modalNavbar.style.display = 'block';
});

/* Cerrar el menu hamburguesa al clickear close icon */

closeHamburgerMenuBtn.addEventListener('click', () => {
    modalNavbarBackground.style.display = 'none';
    modalNavbar.style.display = 'none';
});

/******************************* FUNCIONES *******************************/

/* Borrar el contenido del carrito */

function deleteProduct(){
    const deleteProductBtn = document.querySelector('.carrito-modal__delete');
    deleteProductBtn.addEventListener('click', () => {
        productContainer.innerHTML = '<p class="cart-empty">El carrito esta vacio</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    });
}

function drawProductInModal(){
    productContainer.innerHTML = `
        <div class="carrito-modal__details-container">
            <img class="carrito-modal__img" src="./assets/img/iphone-14-pro-max-3-thumbnail.jpg" alt="">
            <div>
                <p class="carrito-modal__product">iPhone 14 Pro Max</p>
                <p class="carrito-modal__price">$1000.00 x3 <span>$375.00</span></p>
            </div>
            <img class="carrito-modal__delete" src="./assets/img/icon-delete.svg" alt="deshacer compra">
        </div>
        <button class="carrito-modal__checkout">Confirmar</button>`;
        let priceModal = document.querySelector('.carrito-modal__price');
        priceModal.innerHTML = `$1000.00 x${lastValue} <span>$${1000 * lastValue}</span>`;    // actualizacion del precio al ir aumentando la cantidad 
        deleteProduct();
}

function changeNextImage(imgContainer){
    if (imgIndex == 4){
        imgIndex = 1;
    } else {
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('./assets/img/iphone-14-pro-max-${imgIndex}.jpg')`;
}

function changePreviousImage(imgContainer){
    if (imgIndex == 1){
        imgIndex = 4;
    } else {
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('./assets/img/iphone-14-pro-max-${imgIndex}.jpg')`;
}


