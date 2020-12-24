window.onload = function () {


	// base ============

	var body = document.querySelector('body');
	var quant = document.querySelectorAll('.quantly');
	var drop_open = $('.dropdown__title');

	if (drop_open) { // default drop
		drop_open.on('click', function(){
			$(this).next().slideToggle(200);
			$(this).toggleClass('dropdown__title--open');
		});
	}

	

	function disableScroll() { // отключить скролл при открытии модалок
		body.classList.add('no_scroll');
	}
	function enableScroll() { // включить скролл при закрытии модалок
		body.classList.remove('no_scroll');
	}

	function checkModal($modals) { // проверить есть ли в данный момент открытые модалки
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

	if (quant) { // кнопки + - добавить/вычесть единицу товара
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

	for (var i=0;i<open_menu.length;i++) { // открыть моб меню
		open_menu[i].addEventListener('click', function(){
			this.classList.toggle('header__burger--open');
			mob_menu.classList.toggle('header__innerWrap--open');
		});
	}

	open_child.on('click', function(e){ // открыть подменю
		e.stopPropagation();
		$(this).next().slideToggle();
	});
	open_cat.on('click', function(e){ // открыть подменю
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

	

	var slideshow = document.querySelector('.slideshow');
	var category = document.querySelector('.category');
	var filter = document.querySelector('.filter');
	var filter_btn_showAll = document.querySelectorAll('.filter__all');
	var open_filter = document.querySelectorAll('.open_filter');
	var open_sort = document.querySelectorAll('.open_sort');

	if (slideshow) {
		$('.slideshow').slick({
			dots: true,
			infinite: false,
			fade: true,
			speed: 300,
			arrows: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	}

	if (category) {
		for(var i=0;i<filter_btn_showAll.length;i++) {
		filter_btn_showAll[i].addEventListener('click', function(e){ // открыть остальные пункты
			var others = this.parentNode.querySelectorAll('.filter__row--more')
			for(var i=0;i<others.length;i++) {
				others[i].classList.toggle('filter__row--open');
			}
		});
	}

	

	if (filter) {

		// range фильтр на странице категории
		$(function () { 
			var min_val = $("input#priceMin").data('min');
			var max_val = $("input#priceMax").data('max');
			$("#filter__range").slider({
				min: min_val,
				max: max_val,
				values: [min_val,max_val],
				range: true,
				stop: function(event, ui) {
					$("input#priceMin").val($("#filter__range").slider("values",0));
					$("input#priceMax").val($("#filter__range").slider("values",1));

					$('.price-range-min.value').html($("#filter__range").slider("values",0));
					$('.price-range-max.value').html($("#filter__range").slider("values",1));
				},
				slide: function(event, ui){
					$("input#priceMin").val($("#filter__range").slider("values",0));
					$("input#priceMax").val($("#filter__range").slider("values",1));

					$('.price-range-min.value').html($("#filter__range").slider("values",0));
					$('.price-range-max.value').html($("#filter__range").slider("values",1));
				}
			});

			$("input#priceMin").on('change', function(){
				var value1=$("input#priceMin").val();
				var value2=$("input#priceMax").val();
				if(parseInt(value1) > parseInt(value2)){
					value1 = value2;
					$("input#priceMin").val(value1);
					$('.price-range-min.value').html(value1);
				}
				$("#filter__range").slider("values", 0, value1);
				$('.price-range-min.value').html(value1);
			});

			$("input#priceMax").on('change', function(){
				var value1=$("input#priceMin").val();
				var value2=$("input#priceMax").val();
				if (value2 > max_val) { 
					value2 = max_val; 
					$("input#priceMax").val(max_val)
				}
				if(parseInt(value1) > parseInt(value2)){
					value2 = value1;
					$("input#priceMax").val(value2);
					$('.price-range-max.value').html(value2);
				}
				$("#filter__range").slider("values",1,value2);
				$('.price-range-max.value').html(value2);
			});

			$('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('#filter__range').slider('values', 0 ) + '</span>');
			$('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('#filter__range').slider('values', 1 ) + '</span>');
		});
	}

	// открыть фильтр/сортировку на моб
	for(var i=0;i<open_filter.length;i++) {
		open_filter[i].addEventListener('click', function(e){
			filter.classList.toggle('filter--open');
			this.classList.toggle('filterMob--active');
		});
	}
	for(var i=0;i<open_sort.length;i++) {
		open_sort[i].addEventListener('click', function(e){
			console.log('open_sort');
		});
	}

}

	

	









	
}