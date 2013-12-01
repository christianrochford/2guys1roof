// Intro

$(document).ready(function(){
	$('.page').height($('.page-wrap').height() - 20);
})


$(document).ready(function(){
  $('.icon-arrow-down').click(function(e){
    e.preventDefault();
    $('#title-page').animate({height: 0},'slow');
    $('.intro #content').animate({top: 0},'slow');
  });
});

$(window).resize(function(){
	$('.page').height($('.page-wrap').height() - 20);
})

// Menu

$(document).ready(function(){
	$('a#roof, a#food').click(
		function(){
			$('#categories').slideToggle(500);
			$('#categories').toggleClass('on');
		}
	);
	$('.icon-menu').click(function(e){
		e.preventDefault();
		$('#menus').toggleClass('open');
	})
	$('#menus .close').click(function(){
		$('#categories').slideUp(500);
		$('#categories').removeClass('on');
		$('#menus').removeClass('open');
	})
});

$(window).load(function(){
	$('#menus').height($(window).height() * 2);
})

$(window).resize(function(){
	if($(window).width() > 767){
		$('#menus').removeClass('open');
		$('#wrapper').removeClass('menu-open');
	}
})

$(window).scroll(function(){
	if($(window).scrollTop() > 20){
		$('.logo, #menus').addClass('minimal');
	} else {
		$('.logo, #menus').removeClass('minimal');
	}
})


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
	});
	$('#grid-trigger').click(function(e){
		e.preventDefault();
		$('#rooms').mixitup('toGrid');
		$('#rooms .mix').removeClass('list');
	});
});

// Show titles

$(document).ready(function(){
	$('.mix').hover(function(){
		$(this).toggleClass('on');
	})
	$('.post-link').hover(
		function(){
			$(this).closest('.overbox').addClass('list-hover');
		},
		function(){
			$(this).closest('.overbox').removeClass('list-hover');
		}
	)
});



// Initialize flexslider

$(document).ready(function() {
	$('.flexslider').flexslider();
});

// Social Shares

$(document).ready(function(){
	$('.icon-social').hover(
		function(){
			$('#popup-view').addClass('open');
		},
		function(){
			$('#popup-view').removeClass('open');
		}
	);
})


