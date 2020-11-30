document.addEventListener('DOMContentLoaded', () => {
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



})


