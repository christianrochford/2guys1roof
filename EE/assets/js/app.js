// Tablet Menu

var menuFunction = function(){
	if($(window).width() > 768){
		$('#categories').css({width: $('header').width()});
		$('.social-nav').css({width: $('header').width()});
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
	} else if($(window).width() > 480){
		$('#categories').css({width:$(window).width() * 80/100});
		$('.social-nav').css({width:$(window).width() * 80/100});
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
	} else if($(window).width() <= 480){
		$('#categories').css({width: $('header').width()});
		$('.social-nav').css({width: $('header').width()});
		$('#categories').hide();
		$('a#roof').click(function(){
			$('#categories').hide();
		});		
		$('a#social').click(function(){
			$('.social-nav ul').toggleClass('down');
			$('.social-nav span').toggleClass('on');
			$('#wrapper').toggleClass('down');
		});	
	}
}

$(document).ready(menuFunction);

$(window).resize(menuFunction);

// Initialize MixItUp

$(document).ready(function(){
	$(function(){
		$('#rooms').mixitup({
			effects: ['fade','scale'],
			multiFilter: false,
			showOnLoad: 'living-room kitchen bathroom bedroom study garden exterior',
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
		$('#article-content').slideUp(500);
		$('#article-content').empty();
	});
	$('#grid-trigger').click(function(e){
		e.preventDefault();
		$('#rooms').mixitup('toGrid');
		$('#rooms .mix').removeClass('list');
		$('#article-content').slideUp(500);
		$('#article-content').empty();
	});
});

// Show titles

$(document).ready(function(){
	$('.mix').hover(function(){
		$(this).toggleClass('on');
	})
});

// Initialize flexslider

$(document).ready(function() {
	$('.flexslider').flexslider();
});

// Set div size for guys images

$(document).ready(function(){
	$('#major').css({ width: $('#wrapper').width() * 0.7 - 20 });
});

$(window).resize(function(){
	$('#major').css({ width: $('#wrapper').width() * 0.7 - 20 });
})





