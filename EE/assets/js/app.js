// Tablet Menu

var menuFunction = function(){
	if($(window).width() > 768){
		$('#categories').css({width: $('header').width()});
		$('a#roof').click(
			function(){
				$('#categories').slideToggle(500);
				$('#categories').toggleClass('on');
			}
		);
	} else if($(window).width() > 480){
		$('#categories').css({width:$(window).width() * 80/100});
		$('a#roof').click(
			function(){
				$('#categories').slideToggle(500);
				$('#categories').toggleClass('on');
			}
		);
	} else if($(window).width() <= 480){
		$('#categories').css({width: $('header').width()});
		$('#categories').hide();
		$('a#roof').click(function(){
			$('#categories').hide();
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
			showOnLoad: 'livingroom kitchen bathroom bedroom study garden exterior',
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





