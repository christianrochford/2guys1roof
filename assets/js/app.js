// Tablet Menu

menuFunction = function(){
	if($(window).width() > 480){
		$('a#roof').click(
			function(){
				$('.social-nav span').removeClass('on');
				$('.social-nav ul').hide();
				$('#categories').slideToggle(500);
				$('#categories').toggleClass('on');
			}
		);
		$('a#social').click(
			function(){
				$('#categories').removeClass('on');
				$('#categories').hide();
				$('.social-nav ul').slideToggle(500);
				$('.social-nav span').toggleClass('on');
			}
		);
	} else {
			$('a#roof').click(function(){
				if($('.social-nav ul').hasClass('down')){
					$('.social-nav span').removeClass('on');
					$('.social-nav ul').removeClass('down');
					$('#categories').toggleClass('down');
				} else {
					$('.social-nav span').removeClass('on');
					$('.social-nav ul').removeClass('down');
					$('#categories').toggleClass('down');
					$('.wrapper').toggleClass('down');
				}
			});
			$('a#social').click(function(){
				if($('#categories').hasClass('down')){
					$('#categories').removeClass('down');
					$('.social-nav ul').toggleClass('down');
					$('.social-nav span').toggleClass('on');
				} else {
					$('#categories').removeClass('down');
					$('.social-nav ul').toggleClass('down');
					$('.social-nav span').toggleClass('on');
					$('.wrapper').toggleClass('down');
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
}

$(document).ready(menuFunction());

$(window).resize(function(){

	if($(window).width() < 768 && $(window).width() >480){
		$('#categories').css({width:$(window).width() * 80/100});
		$('.social-nav').css({width:$(window).width() * 80/100});
	} else {
		$('#categories').css({width: $('header').width()});
		$('.social-nav').css({width: $('header').width()});
	}
	if($(window).width() >480){
		$('#categories').removeClass('down');
		$('.social-nav ul').removeClass('down');
		$('.wrapper').removeClass('down');
	}
});

// Initialize MixItUp

$(document).ready(function(){
	$(function(){
		$('#rooms').mixitup({
			effects: ['fade','scale'],
			multiFilter: true,
			showOnLoad: 'kitchen bedroom bathroom garden living-room study',
		    easing: 'smooth',
		    layoutMode: 'grid',
		    targetDisplayGrid: 'inline-block',
		    targetDisplayList: 'block',
		    transitionSpeed: 600,
		    resizeContainer: true,
		    minHeight: 0,
		    perspectiveDistance: '3000',
		    perspectiveOrigin: '50% 50%',
		    animateGridList: true
		});
	});
	$('#list-trigger').click(function(e){
		e.preventDefault();
		$('#rooms').mixitup('toList');
		$('#rooms .mix').addClass('list');
	});
	$('#grid-trigger').click(function(e){
		e.preventDefault();
		$('#rooms').mixitup('toGrid');
		$('#rooms .mix').removeClass('list');
	});
});
