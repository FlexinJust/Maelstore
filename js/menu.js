let menu = document.querySelector('.menu');
let menuIcon = menu.querySelector('.menu__icon');
let menuBody = menu.querySelector('.menu__body');

menuIcon.onclick = function() {
    menuBody.classList.toggle('active');
};

document.addEventListener('click', (e) => {
    if(e.pageX > parseInt(window.getComputedStyle(menuBody).width)) {
        menuBody.classList.remove('active');
    }
});