document.addEventListener("DOMContentLoaded", function (event) {

	/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});


	// слайдер
	function mobileSlider1() {
		const sliderMob1 = document.querySelector('.functions__slider'); //класс слайдера
		if (sliderMob1) {
			if (window.innerWidth <= 768 && sliderMob1.dataset.mobile === 'false') {
				let = mobSwiper1 = new Swiper(sliderMob1, {
					slidesPerView: 1,
					spaceBetween: 10,
					//autoHeight: true,
					navigation: {
						prevEl: '.swiper-button-prev',
						nextEl: '.swiper-button-next',
					},
				});

				sliderMob1.dataset.mobile = 'true';
			}

			if (window.innerWidth > 768) {
				sliderMob1.dataset.mobile = 'false';

				if (sliderMob1.classList.contains('swiper-initialized')) {
					mobSwiper1.destroy();
				}

			}
		}
	}

	window.addEventListener("load", function (e) {
		mobileSlider1();
		window.addEventListener('resize', function (event) {
			mobileSlider1();
		});
	});


	// плавная прокрутка наверх
	const smoothLink = document.querySelector('.footer__up');
	if (smoothLink) {
		smoothLink.addEventListener('click', function (e) {
			e.preventDefault();
			const id = smoothLink.getAttribute('href');

			document.querySelector(id).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}


});






