// Tablet Menu

$(document).ready(function(){
	if($(window).width() > 480){
		$('nav li:first-child, nav li:last-child').hover(
			function(){
				$('nav ul').stop().animate({marginBottom: '0'});
			}
		)
		$('nav li:first-child').hover(
			function(){
				$('#categories').stop().animate({height: '150px'});
			}
		)
		$('nav li:last-child').hover(
			function(){
				$('.social-nav ul').stop().animate({height: '120px'});
				$('.social-nav a span').stop().animate({opacity: '1'});
			}
		)
		$('nav').on('mouseleave', function(){
			$('nav ul').stop().animate({marginBottom: '17px'});
			$('#categories').stop().animate({height: '0'});
			$('.social-nav a span').stop().animate({opacity: '0'});
			$('.social-nav ul').stop().animate({height: '0'});
		});
	} else {
		$('nav li:first-child').click(
			function(){
				if($('.social-nav ul').hasClass('open')){
					$('.home #content').stop().animate({top: '0'});
					$('.social-nav ul').stop().removeClass('open');
					$('.home #content').stop().animate({top: '30px'});
					$('#categories').stop().toggleClass('open');
				} else if($('#categories').hasClass('open')){
					$('.home #content').stop().animate({top: '0'});
					$('#categories').stop().toggleClass('open');
				} else {
					$('.social-nav ul').stop().removeClass('open');
					$('.home #content').stop().animate({top: '30px'});
					$('#categories').stop().toggleClass('open');
				}
			});
		$('nav li:last-child').click(
			function(){
				if($('#categories').hasClass('open')){
					$('.home #content').stop().animate({top: '0'});
					$('#categories').stop().removeClass('open');
					$('.home #content').stop().animate({top: '30px'});
					$('.social-nav ul').stop().toggleClass('open');
				} else if($('.social-nav ul').hasClass('open')){
					$('.home #content').stop().animate({top: '0'});
					$('.social-nav ul').stop().toggleClass('open');
				} 
				else {
					$('#categories').stop().removeClass('open');
					$('.home #content').stop().animate({top: '30px'});
					$('.social-nav ul').stop().toggleClass('open');
				}
			});
	}
	if($(window).width() < 769 && $(window).width() >480){
		$('#categories').css({width:$(window).width() * 80/100});
		$('.social-nav').css({width:$(window).width() * 80/100});
	} else {
		$('#categories').css({width: $('header').width()});
		$('.social-nav').css({width: $('header').width()});
	}
});

$(window).resize(function(){
	if($(window).width() < 768 && $(window).width() >480){
		$('#categories').css({width:$(window).width() * 80/100});
		$('.social-nav').css({width:$(window).width() * 80/100});
	} else {
		$('#categories').css({width: $('header').width()});
		$('.social-nav').css({width: $('header').width()});
	}
	if($(window).width() > 480){
		$('nav li:first-child').click(
			function(){
					$('.social-nav ul').removeClass('open');
					$('.home #content').css({top: '0'});
					$('#categories').removeClass('open');
			});
		$('nav li:last-child').click(
			function(){
					$('#categories').removeClass('open');
					$('.home #content').css({top: '0'});
					$('.social-nav ul').removeClass('open');
			});
	}

});

// Initialize MixItUp

$(document).ready(function(){
	$(function(){
	    $('#Grid').mixitup();  
	});
	$('#list-trigger').click(function(e){
		e.preventDefault();
		$('#Grid').mixitup('toList');
		$('#Grid .mix').addClass('list');
		$('.overbox').addClass('list');
		$('.par-wrap').addClass('list');
	});
	$('#grid-trigger').click(function(e){
		e.preventDefault();
		$('#Grid').mixitup('toGrid');
		$('.overbox').removeClass('list');
		$('#Grid .mix').removeClass('list');
		('.par-wrap').removeClass('list');
	});
})

// Post hover

$(document).ready(function(){
	$('.mix').hover(
		function(){
			$(this).find('.icon-cube').stop().animate({'font-size':'1em'}, 500);
			$(this).find('.overbox').stop().animate({opacity: '1'});
			$(this).find('.overbox.list').stop().animate({opacity: '1'});
		},
		function(){
			$(this).find('.icon-cube').animate({'font-size':'0'});
			$(this).find('.overbox').stop().animate({opacity: '0'});
			$('.overbox.list').stop().animate({opacity: '1'});
		}
	);
});

$(window).resize(function(){
	$('#Grid .mix').css({height: $('#Grid .mix').width()});
});