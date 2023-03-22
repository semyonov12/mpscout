// Подключение:
//<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css">
<script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>


// для html слайдеру data-mobile="false"
function mobileSlider1() {
	const sliderMob1 = document.querySelector('.class'); //класс слайдера
	if (sliderMob1) {
		if (window.innerWidth <= 992 && sliderMob1.dataset.mobile === 'false') {
			let = mobSwiper1 = new Swiper(sliderMob1, {
				slidesPerView: 1,
				spaceBetween: 10,
				//autoHeight: true,
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
			});

			sliderMob1.dataset.mobile = 'true';
		}

		if (window.innerWidth > 992) {
			sliderMob1.dataset.mobile = 'false';

			if (sliderMob1.classList.contains('swiper-initialized')) {
				mobSwiper1.destroy();
			}

		}
	}
}



function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации мобильных слайдеров
	mobileSlider1();
	window.addEventListener('resize', function (event) {
		mobileSlider1();
	});
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});