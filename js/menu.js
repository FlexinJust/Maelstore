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

// SIDEBAR
const sidebar = document.getElementById('sidebar');
const overlay = document.querySelector('.sidebar-overlay');
const burger = document.getElementById('burger');

burger.onclick = function () {
	sidebar.classList.toggle('active');
	this.classList.toggle('active');
};
overlay.onclick = function () {
	burger.classList.remove('active');  
   sidebar.classList.remove('active');   
};

let verticalMenu = document.querySelector('.sidebar__menu-list'),
    items = verticalMenu.querySelectorAll('.sidebar__menu-link');

verticalMenu.onclick = function(e) {
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove('active');
  }
  e.target.classList.add('active');
}



