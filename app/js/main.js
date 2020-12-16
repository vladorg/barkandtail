window.onload = function () {


	// base ============

	var body = document.querySelector('body');
	var quant = document.querySelectorAll('.quantly');

	function disableScroll() {
		body.classList.add('no_scroll');
	}
	function enableScroll() {
		body.classList.remove('no_scroll');
	}

	if (quant) {
		for (var i=0;i<quant.length;i++) {
			var quantly_in = quant[i].querySelector('input[name=quantly]');
			var quantly;

			quant[i].querySelector('.quantly__plus').addEventListener('click', function(){
				quantly = parseInt(this.parentNode.querySelector('input[name=quantly]').value);
				this.parentNode.querySelector('input[name=quantly]').value = quantly + 1;
			});
			quant[i].querySelector('.quantly__minus').addEventListener('click', function(){
				quantly = parseInt(this.parentNode.querySelector('input[name=quantly]').value);
				if (quantly > 1) {
					this.parentNode.querySelector('input[name=quantly]').value = quantly - 1;
				}
			});
		}
	}






	// modal cart ============

	var modalCart = document.querySelector('.modalCart');
	var modalCart_inner = modalCart.querySelector('.modal__win');
	var modalCart_open = document.querySelectorAll('.open_cart');
	var modalCart_close = document.querySelectorAll('.close_cart');

	if (modalCart) {
		for (var i=0;i<modalCart_open.length;i++) { // открыть корзину
			modalCart_open[i].addEventListener('click', function(){
				modalCart.classList.add('modalCart--open','modal--open');
				setTimeout(disableScroll, 300);
			});
		}
		for (var i=0;i<modalCart_close.length;i++) {
			modalCart_close[i].addEventListener('click', function(){ // закрыть корзину
				modalCart.classList.remove('modalCart--open','modal--open');
				setTimeout(enableScroll, 100);
			});
		}

		document.onclick = function(e){
			if ( !modalCart_open[0].contains(e.target) && !modalCart_inner.contains(e.target) ) { // закрытие дропдауна корзины
				modalCart.classList.remove('modalCart--open','modal--open');
			}
		};

		$('.add_promo').on('click', function(){
			$(this).parents('.promocode__def').slideUp(200);
			setTimeout(function(){
				$('.promocode__add').slideDown(200);
			}, 200);
		});
		$('.confirm_promo').on('click', function(){
			var code = $(this).prev();
			if ( code.val() != '' ) {
				code.removeClass('input--err');
				code.addClass('input--ok');				
				$(this).parents('.promocode__add').slideUp(200);
				setTimeout(function(){
					$('.promocode__result').slideDown(200);
				}, 200);
			} else {
				code.removeClass('input--ok');
				code.addClass('input--err');
			}
		});
	}


	// modal wish ============

	var modalWish = document.querySelector('.modalWish');
	var modalWish_inner = modalWish.querySelector('.modal__win');
	var modalWish_open = document.querySelectorAll('.open_wish');
	var modalWish_close = document.querySelectorAll('.close_wish');

	if (modalWish) {
		for (var i=0;i<modalWish_open.length;i++) { // открыть избранное
			modalWish_open[i].addEventListener('click', function(){
				modalWish.classList.add('modalWish--open','modal--open');
				setTimeout(disableScroll, 300);
			});
		}
		for (var i=0;i<modalWish_close.length;i++) {
			modalWish_close[i].addEventListener('click', function(){ // закрыть избранное
				modalWish.classList.remove('modalWish--open','modal--open');
				setTimeout(enableScroll, 100);
			});
		}

		document.onclick = function(e){
			if ( !modalWish_open[0].contains(e.target) && !modalWish_inner.contains(e.target) ) { // закрытие дропдауна избранное
				modalWish.classList.remove('modalWish--open','modal--open');
			}
		};
	}


	// search ============

	var search = document.querySelector('.search');
	var modalWish_open = document.querySelectorAll('.open_search');

	if (search) {
		for (var i=0;i<modalWish_open.length;i++) { // открыть поиск
			modalWish_open[i].addEventListener('click', function(){
				search.classList.toggle('search--open');
			});
		}

		document.onclick = function(e){
			if ( !modalWish_open[0].contains(e.target) && !search.contains(e.target) ) { // закрытие поиска
				search.classList.remove('search--open');
			}
		};
	}



	
}