const hamburger = document.querySelector('#hamburger');
const lista = document.querySelector('#lista');

hamburger.addEventListener("click" ,()=>{
    hamburger.classList.toggle('active');
    lista.classList.toggle('active');
})