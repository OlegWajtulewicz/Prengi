/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
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
}

$(document).ready(function(){
	$('.carousel__inner').slick({
		dots: true,
		speed: 1800,
		autoplay: false,
  		autoplaySpeed: 4000,
		  prevArrow: '<button type="button" class="slick-prev"><img src="../img/left.png"></button>',
		  nextArrow: '<button type="button" class="slick-next"><img src="../img/right.png"></button>',
		  responsive: [
            {
                breakpoint: 1190,
                settings: {
                  dots: false,
                  arrows: false
                }
            }
		]
	});
  });


  
  

  