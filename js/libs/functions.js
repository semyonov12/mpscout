/// прокрутка к блокам
const smoothLinks = document.querySelectorAll('.link-act');
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener('click', function (e) {
		e.preventDefault();
		burger.classList.remove("active");
		menu.classList.remove("active");
		body.classList.remove("lock");
		const id = smoothLink.getAttribute('href');

		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
};


/////////// аккардион
document.querySelectorAll('.faq__triger').forEach((item) =>
	item.addEventListener('click', () => {

		item.parentNode.classList.toggle('faq__item-active');
	})
);

////////////// фикс 100% vh над загрузкой вставлять
window.addEventListener('resize', () => {
	// We execute the same script as before
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});


/* Проверка мобильного браузера */
let isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

// Добавление класса _touch для HTML если браузер мобильный
if (isMobile.any()) document.documentElement.classList.add('touch');

// Добавление loaded для HTML после полной загрузки страницы
window.addEventListener("load", function () {
	setTimeout(function () {
		document.documentElement.classList.add('loaded');
	}, 0);
});






