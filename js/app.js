document.addEventListener('DOMContentLoaded', ()=>{
    eventListener();
})

function eventListener(){
    const menu = document.querySelector('.navegacion__mobileMenu');
    menu.addEventListener('click',navegacionResponsive);
}

function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');
    const title = document.querySelector('.header__title');
    const flecha = document.querySelector('.header__arrow');
    navegacion.classList.toggle('mostrar');
    title.classList.toggle('mostrar__heading');
    flecha.classList.toggle('mostrar__heading');
}