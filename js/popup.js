// Пишем переменную при которой будет открываться любой объект с классом .popup-link Чтобы ПопАп открывался при клике на любой объект с классом .popup-link 
const popupLinks = document.querySelectorAll('.popup-link');
// Пишем переменную body для блокирования скролла внутри него
const body = document.querySelector('body');

const lockPadding = document.querySelectorAll(".lock-padding");
// Чтобы не было двойных нажатий
let unlock = true;
// Должно быть равно цыфре в свойстве transition .8s (800) для адекватной работы скрола
const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			// запрещаем ссылке перезагружать страницу
			e.preventDefault();
		});
	}
}

// ПЕРЕМЕННАЯ ДЛЯ ЗАКРЫТИЯ ОКНА
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			// запрещаем дальнейшую работу ссылки
			e.preventDefault();
			});
	}
}

// ФУНКЦИЯ ОТКРЫТИЯ ПОПАП
// 1 передаем функции имя объекта
function popupOpen(curentPopup) {
// 2 проверяем есть ли такой объект и открыта ли переменная unlock (по умолчанию она у нас открыта)?
if (curentPopup && unlock) {
	const popupActive = document.querySelector('.popup.open');
	if (popupActive) {
		popupClose(popupActive, false);
	} else {
		bodyLock();
	}
	curentPopup.classList.add('open');
	curentPopup.addEventListener("click", function (e) {
		if (!e.target.closest('.popup__content')) {
			popupClose(e.target.closest('.popup'));
	     }
	  }); 
  }
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

if(lockPadding.length > 0) {
	for (let index = 0; index < lockPadding.length; index++) {
		const el = lockPadding[index];
		el.style.paddingRight = lockPaddingValue;
	   }
		}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');
// На время лочим unlock чтобы небыло повторных нажатий на окно
	unlock = false;
	setTimeout(function () {
		unlock = true;
		}, timeout);
	}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = '0px';
		}
	}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);


unlock = false;
setTimeout(function () {
	unlock = true;
  }, timeout);
}

// ЗАКРЫТИЕ POPUP КЛАВИШЕЙ ESC
document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popupLogin.open');
		popupClose(popupActive);
	}
});

// ПОЛИФИЛЫ - ПОДГОНЯЮТ ПАРАМЕТРЫ ПОД СТАРЫЕ БРАУЗЕРЫ Explorer 11
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches (css)) return node;
				else node = node.parentElement;
			} 
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
		Element.prototype.webkitMatchesSelector ||
		Element.prototype.mozMatchesSelector ||
		Element.prototype.msMatchesSelector;
	}
	})();
