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

	// modal auth ============

	var modalLogin = document.querySelector('.modalLogin');
	var modalLogin_inner = modalLogin.querySelector('.modal__win');
	var modalLogin_open = document.querySelectorAll('.open_auth');
	var modalLogin_close = document.querySelectorAll('.close_auth');

	// modal register ============

	var modalRegister = document.querySelector('.modalRegister');
	var modalRegister_inner = modalRegister.querySelector('.modal__win');
	var modalRegister_open = document.querySelectorAll('.open_register');
	var modalRegister_close = document.querySelectorAll('.close_register');

	// modal forgot ============

	var modalForgot = document.querySelector('.modalForgot');
	var modalForgot_inner = modalForgot.querySelector('.modal__win');
	var modalForgot_open = document.querySelectorAll('.open_forgot');
	var modalForgot_close = document.querySelectorAll('.close_forgot');

	// modal change ============

	var modalChange = document.querySelector('.modalChange');
	var modalChange_inner = modalChange.querySelector('.modal__win');
	var modalChange_open = document.querySelectorAll('.open_change');
	var modalChange_close = document.querySelectorAll('.close_change');

	// modal success ============

	var modalSuccess = document.querySelector('.modalSuccess');
	var modalSuccess_inner = modalSuccess.querySelector('.modal__win');
	var modalSuccess_open = document.querySelectorAll('.open_success');
	var modalSuccess_close = document.querySelectorAll('.close_success');

	// search ============

	var search = document.querySelector('.search');
	var modalSearch_open = document.querySelectorAll('.open_search');

	if (search) {
		for (var i=0;i<modalSearch_open.length;i++) { // открыть поиск
			modalSearch_open[i].addEventListener('click', function(){
				search.classList.toggle('search--open');
			});
		}
	}



	if (modalCart) {
		document.onclick = function(e){
			if ( !modalCart_open[0].contains(e.target) && !modalCart_inner.contains(e.target) ) { // закрытие дропдауна корзины
				modalCart.classList.remove('modalCart--open','modal--open');
			}
			if ( !modalWish_open[0].contains(e.target) && !modalWish_inner.contains(e.target) ) { // закрытие дропдауна избранное
				modalWish.classList.remove('modalWish--open','modal--open');
			}
			if ( !modalLogin_open[0].contains(e.target) && !modalLogin_inner.contains(e.target) && !modalRegister_inner.contains(e.target) && !modalForgot_inner.contains(e.target) ) { // закрытие авторизации
				modalLogin.classList.remove('modalLogin--open','modal--open');
			}
			if ( !modalRegister_open[0].contains(e.target) && !modalRegister_inner.contains(e.target) && !modalLogin_open[0].contains(e.target) ) { // закрытие регистрации
				modalRegister.classList.remove('modalRegister--open','modal--open');
			}
			if ( !modalSearch_open[0].contains(e.target) && !search.contains(e.target) ) { // закрытие поиска
				search.classList.remove('search--open');
			}
			if ( !modalForgot_open[0].contains(e.target) && !modalForgot_inner.contains(e.target) ) { // закрытие формы сброса пароля
				modalForgot.classList.remove('modalForgot--open','modal--open');
			}
			if ( !modalChange_open[0].contains(e.target) && !modalChange_inner.contains(e.target) ) { // закрытие формы восстановления пароля
				modalChange.classList.remove('modalChange--open','modal--open');
			}
		};
	}


	function modal($modal,$open,$close,$class,$others) { // открытие/закрытие модальных окон
		if ($modal) {

			for (var i=0;i<$open.length;i++) {
				$open[i].addEventListener('click', function(){
					for (var i=0;i<$others.length;i++) {
						if ($others[i] != $modal) {
							$others[i].classList.remove('modal--open');
						}
						
					}
					$modal.classList.add($class,'modal--open');
					setTimeout(disableScroll, 1);
				});
			}

			for (var i=0;i<$close.length;i++) {
				$close[i].addEventListener('click', function(){
					$modal.classList.remove($class,'modal--open');
					setTimeout(enableScroll, 400);
				});
			}
		}
	}

	var modals = [modalCart,modalWish,modalLogin,modalRegister,modalForgot,modalChange,modalSuccess];

	modal(modalCart,modalCart_open,modalCart_close,'modalCart--open',modals);
	modal(modalWish,modalWish_open,modalWish_close,'modalWish--open',modals);
	modal(modalLogin,modalLogin_open,modalLogin_close,'modalLogin--open',modals);
	modal(modalRegister,modalRegister_open,modalRegister_close,'modalRegister--open',modals);
	modal(modalForgot,modalForgot_open,modalForgot_close,'modalForgot--open',modals);
	modal(modalChange,modalChange_open,modalChange_close,'modalChange--open',modals);
	modal(modalSuccess,modalSuccess_open,modalSuccess_close,'modalLogin--open',modals);





	// mobile menu ============

	var open_menu = $('.open_menu');

	open_menu.on('click', function(){
		$('.header__innerWrap').slideToggle();
	});





	
}