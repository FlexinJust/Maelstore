// let menu = document.querySelector('.menu');
// let menuIcon = menu.querySelector('.menu__icon');
// let menuBody = menu.querySelector('.menu__body');

// menuIcon.onclick = function() {
//     menuBody.classList.toggle('active');
// };

// document.addEventListener('click', (e) => {
//     if(e.pageX > parseInt(window.getComputedStyle(menuBody).width)) {
//         menuBody.classList.remove('active');
//     }
// });

// function openMenu() {
// 	document.getElementById("sidebar").classList.toggle('active');
// 	document.getElementById("burger__icon").classList.toggle('active');
// 	document.getElementById("burger__line").classList.toggle('active');
// };

// const menuSidebar = document.getElementById("burger__icon");

// menuSidebar.onclick = function(){
// 	menuSidebar.classList.toggle('active');
// };


burger__icon.onclick = function () {
	document.getElementById("sidebar").classList.toggle('active');
	this.classList.toggle('active');
	// document.querySelector('.sidebar-overlay').classList.toggle('active');

};
