// Intro

$(document).ready(function(){
	$('.page').height($('.page-wrap').height() - 20);
  $('#title-wrap h1').fitText();
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
	$('a#roof-link, a#food-link').click(
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
	$('#food').on('hover','.element',function(){
		$(this).toggleClass('on');
	})
});


// Initialize flexslider

$(document).ready(function() {
	$('.flexslider').flexslider();
});

// Social Shares

$(document).ready(function(){
	$('.icon-social').on('click',	function(){
			$('#popup-view').toggleClass('open');
		});
})

// Isotope 

$(window).load(function(){    
  var $container = $('#wrapper'),filters = {};
  $container.imagesLoaded( function(){
    if ($("body").hasClass('food')) { 
      $container.isotope({
        itemSelector : '.element',
        // disable resizing
        resizable: false,
        // set columnWidth to a percentage of container width
        masonry: {
          columnWidth: $container.width() / 33
        }
      });
      $(window).smartresize(function(){
        $container.isotope({
          // set columnWidth to a percentage of container width
          masonry: {
            columnWidth: $container.width() / 33
          }
        });
     });
     $('.element img').each(function(i) {
      $(this).delay((i++) * 500).fadeTo(1000, 1); })   
     }
  });

  // filter buttons
  $('.food .filter a').click(function(){
    var $this = $(this);
    // don't proceed if already selected
    if ( $this.hasClass('selected') ) {
      return;
    }
    var $optionSet = $this.parents('.option-set');
    // change selected class
    $('.filter').find('.selected').removeClass('selected');
    $this.addClass('selected');  
    // store filter value in object
    var group = $optionSet.attr('data-filter-group');
    filters[ group ] = $this.attr('data-filter-value');
    // convert object into array
    var isoFilters = [];
    for ( var prop in filters ) {
      isoFilters.push( filters[ prop ] )
    }
    var selector = isoFilters.join('');
    $container.isotope({ filter: selector });
    return false;
  });  
});

// Initialize MixItUp
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

// Instagram Feed

    $(document).ready(function() {
      function createPhotoElement(photo) {
          var innerHtml = $('<img>')
            .addClass('instagram-image')
            .attr('src', photo.images.thumbnail.url);

          innerHtml = $('<a>')
            .attr('target', '_blank')
            .attr('href', photo.link)
            .append(innerHtml);

          return $('<li class="photo">')
            .addClass('instagram-placeholder')
            .attr('id', photo.id)
            .append(innerHtml);
        }

        function didLoadInstagram(event, response) {
          var that = this;
          $.each(response.data, function(i, photo) {
            $(that).append(createPhotoElement(photo));
          });
        }
        $('.instagram').on('didLoadInstagram', didLoadInstagram);
        $('.instagram').instagram({
          userId: '13031664',
          count: '33',
          accessToken: '13031664.4964a39.6eb59a3f9ddf4574a50d7ac6a98b0bea',
          image_size: 'standard_resolution'
        });
    });

     
$(window).load(function(){
$('#wrapper img').each(function(i) {
  $(this).delay((i++) * 500).fadeTo(1000, 1); })
});


