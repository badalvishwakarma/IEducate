humburger = document.querySelector('.humburger');
navbar = document.querySelector('.navbar');
rightnav = document.querySelector('.right-nav');
navlist = document.querySelector('.nav-list');
humburger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})