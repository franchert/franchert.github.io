$(document).ready(function () {
	$('a[href^="#"]').on('click', function(event) {
		$('.nav a').each(function(index){
			$(this).removeClass('active');
		});
		$(this).toggleClass('active');
		var target = $( $(this).attr('href') );
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
});