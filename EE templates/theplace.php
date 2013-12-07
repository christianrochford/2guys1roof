{embed="base/_head"}

<body class="place">

{embed="base/_place_header"}

<div id="wrapper">
		<ul id="photos" class="instagram"></ul>
	</div>

	<script src="{site_url}assets/js/jquery-2.0.3.min.js"></script>
	<script src="{site_url}assets/js/jquery.mixitup.min.js"></script>
	<script src="{site_url}assets/js/jquery.flexslider.js"></script>
	<script src="{site_url}assets/js/instagram.min.js"></script>
	<script src="{site_url}assets/js/app.js"></script>
	<script>
		// load Instagram gallery
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
	</script>
</body>
<html>