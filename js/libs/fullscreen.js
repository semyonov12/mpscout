// Для scss добавить
// [data-fullscreen] {
// 	min-height: 100vh;
// 	.touch & {
// 		min-height: calc(var(--vh, 1vh) * 100);
// 	transition: min-height 0.2s;
// }
// }

/* Проверка мобильного браузера */
let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

// Добавление класса _touch для HTML если браузер мобильный
if (isMobile.any()) document.documentElement.classList.add('touch');

// Учет плавающей панели на мобильных устройствах при 100vh
const fullScreens = document.querySelectorAll('[data-fullscreen]');
if (fullScreens.length && isMobile.any()) {
	window.addEventListener('resize', fixHeight);
	function fixHeight() {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}
	fixHeight();
}