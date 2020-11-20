// let menu = document.querySelector('.header__menu-burger');
// let menuIcon = menu.querySelector('.burger__icon');
// let menuBody = menu.querySelector('.menu__body');

// menuIcon.onclick = function() {
//     menuBody.classList.toggle('active');
// };

// document.addEventListener('click', (e) => {
//     if(e.pageX > parseInt(window.getComputedStyle(menuBody).width)) {
//         menuBody.classList.remove('active');
//     }
// });

function openMenu() {
	document.getElementById("sidebar").classList.toggle('active');
	document.getElementById("burger__icon").classList.toggle('active');
	document.getElementById("burger__line").classList.toggle('active');
}