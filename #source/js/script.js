//====================  SCROLL ========================//
$(window).scroll(function (event) {
	var scr = $(this).scrollTop();
	sectors(scr);
});
function sectors(scr) {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	if (scr > 0) {
		$('.header').addClass('scroll');
	} else {
		$('.header').removeClass('scroll');
	}
}
//====================  <!-- SCROLL --> ========================//
//====================  UP ========================//
$(window).scroll(function () {
	var w = $(window).width();
	if ($(window).scrollTop() > 50) {
		$('#up').fadeIn(300);
	} else {
		$('#up').fadeOut(300);
	}
});
$('#up').click(function (event) {
	$('body,html').animate({ scrollTop: 0 }, 300);
});
//==================== <!-- UP --> ========================//
//====================  ImageBg ========================//
function ibg() {
	function isIE() {
		let ibg = document.querySelectorAll(".ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();
//====================  <!-- ImageBg -->  ========================//

//====================   GoTO -->  ========================//
$('.goto').click(function () {
	var el = $(this).attr('href').replace('#', '');

	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.header-menu').hasClass('active')) {
		$('.header-menu,.header-menu__icon').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});
//====================  <!-- GoTO -->  ========================//

//====================  Active-Menu  ========================//
$('.header-menu__link').click(function () {
	$('.header-menu__link').removeClass('active');
	$(this).addClass('active');
});
//====================  <!-- Active-Menu  -->  ========================//
$('.main-slider').slick({
	infinite: false,
	arrows: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	nextArrow: '<button type="button" class="slick-btn-next  slick-next slick-btn"><i class="fas fa-chevron-right"></i></button>',
	prevArrow: '<button type="button" class="slick-btn-prev slick-prev slick-btn"><i class="fas fa-chevron-left"></i></button>',
	responsive: [
		{
			breakpoint: 650,
			settings: {
				dots: true,
				arrows: false,
			}
		}
	]
});

$('.clients-slider').slick({
	infinite: false,
	arrows: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true
});


$('.blog-article__clider').slick({
	infinite: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	vertical: true,
	verticalSwiping: true,
	dots: false,
	arrows: true,

});

