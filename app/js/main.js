window.onload = function () {


	// base ============

	var body = document.querySelector('body');
	var quant = document.querySelectorAll('.quantly');
	var drop_open = $('.dropdown__title');

	drop_open.on('click', function(){
		$(this).next().slideToggle(200);
		$(this).toggleClass('dropdown__title--open');
	});

	function disableScroll() {
		body.classList.add('no_scroll');
	}
	function enableScroll() {
		body.classList.remove('no_scroll');
	}

	function checkModal($modals) {
		var picker = null;
		for(var i=0;i<$modals.length;i++) {
			if ($modals[i].classList.contains('modal--open')) {
				picker = false;
			} else {
				if (picker != false) {
					picker = true;
				}							
			}
		}
		return picker;
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




	// развернуть блок сео текста
	$('.seo__btn').on('click', function(){
		$(this).closest('.seo').toggleClass('seo--open');
	});


	// dropdown
	// при выборе пункта записать его в input hidden + вывести его в заголовок дропдауна + закрыть дропдаун
	$('.dropdown__row').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		var item = $(this).find('input').val();
		var lab = $(this).find('label').text();
		$(this).closest('.dropdown__list').find('input[type=hidden]').val(item);
		$(this).closest('.dropdown').find('.dropdown__title .dropdown__checked').fadeOut(200);		

		setTimeout(function(){ // для плавности
			$this.closest('.dropdown').find('.dropdown__title .dropdown__checked').text(lab);
			$this.closest('.dropdown').find('.dropdown__title .dropdown__checked').fadeIn(200);
		}, 200);

		$(this).closest('.dropdown__list').slideUp(200);
		$(this).closest('.dropdown').find('.dropdown__title').removeClass('dropdown__title--open');
	});





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
				if (checkModal(modals)) {
					enableScroll();
				}
			}
			if ( !modalWish_open[0].contains(e.target) && !modalWish_inner.contains(e.target) ) { // закрытие дропдауна избранное
				modalWish.classList.remove('modalWish--open','modal--open');
				if (checkModal(modals)) {
					enableScroll();
				}
			}
			if ( !modalLogin_open[0].contains(e.target) && !modalLogin_inner.contains(e.target) && !modalRegister_inner.contains(e.target) && !modalForgot_inner.contains(e.target) ) { // закрытие авторизации
				modalLogin.classList.remove('modalLogin--open','modal--open');
				if (checkModal(modals)) {
					enableScroll();
				}
			}
			if ( !modalRegister_open[0].contains(e.target) && !modalRegister_inner.contains(e.target) && !modalLogin_open[0].contains(e.target) ) { // закрытие регистрации
				modalRegister.classList.remove('modalRegister--open','modal--open');
				if (checkModal(modals)) {
					enableScroll();
				}
			}
			if ( !modalSearch_open[0].contains(e.target) && !search.contains(e.target) ) { // закрытие поиска
				search.classList.remove('search--open');
				if (checkModal(modals)) {
					enableScroll();
				}
			}
			if ( !modalForgot_open[0].contains(e.target) && !modalForgot_inner.contains(e.target) ) { // закрытие формы сброса пароля
				modalForgot.classList.remove('modalForgot--open','modal--open');
				if (checkModal(modals)) {
					enableScroll();
				}
			}
			if ( !modalChange_open[0].contains(e.target) && !modalChange_inner.contains(e.target) ) { // закрытие формы восстановления пароля
				modalChange.classList.remove('modalChange--open','modal--open');
				if (checkModal(modals)) {
					enableScroll();
				}
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





	// mobile tools ============

	var open_menu = document.querySelectorAll('.open_menu');
	var mob_menu = document.querySelector('.header__innerWrap');
	var open_child = $('.submenu__title');
	var open_cat = $('.header__menu > ul > li.has_child');
	var submenu = $('.submenu');

	for (var i=0;i<open_menu.length;i++) {
		open_menu[i].addEventListener('click', function(){
			this.classList.toggle('header__burger--open');
			mob_menu.classList.toggle('header__innerWrap--open');
		});
	}

	open_child.on('click', function(e){
		e.stopPropagation();
		$(this).next().slideToggle();
	});
	open_cat.on('click', function(e){
		//e.stopPropagation();
		$(this).find('.submenu').slideToggle();
	});
	submenu.on('click', function(e){
		e.stopPropagation();
	});




	// main page ============

	$('.brands .brands__list').slick({
		dots: true,
		infinite: false,
		speed: 300,
		arrows: false,
		//autoplay: true,
		slidesToShow: 7,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 6,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 2,
			}
		}
		]
	});

	// category page ============

	$('.slideshow').slick({
		dots: true,
		infinite: false,
		speed: 300,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});









	
}