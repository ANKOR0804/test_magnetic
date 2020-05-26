$(window).scroll(function() {
  var top = $(document).scrollTop();
  	if($(window).width() > 768) {
  	if (top < 530) $(".header__menu").removeClass('menu__scroll');
  	else $(".header__menu").addClass('menu__scroll');
  	}
});

$(document).ready(function(){

	$("#mobmenu").click(function() {
	$(".header__menu").toggleClass("responsive");
	});

	$('.slider-item').slick({
	  autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:'<span class="arrow arrow_prev arrow_lg"></span>',
	  nextArrow:'<span class="arrow arrow_next arrow_lg"></span>',
	  responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		      }
		    }
		 ]
	});

	$('.slider-comments').slick({
			slidesToShow: 2,
			arrows: false,
	  	dots: true,
	  	 responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		      }
		    }
		 ]
		});
})
