// Initialize MixItUp

$(document).ready(function(){
	$(function(){
	    $('#Grid').mixitup();  
	});
	$('#list-trigger').click(function(e){
		e.preventDefault();
		$('#Grid').mixitup('toList');
	});
	$('#grid-trigger').click(function(e){
		e.preventDefault();
		$('#Grid').mixitup('toGrid');
	});
})