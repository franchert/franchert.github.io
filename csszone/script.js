$(document).ready(function () {
	//when i click an <a> tag in the fixed nav
	$('#nav a[href^="#"]').on('click', function(event) {
		//get the object we're going to
		var target = $( $(this).attr('href') );
		//if it exists, scroll there.
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top+1
			}, 1000);
		}
	});
	//when we scroll to something (hit a waypoint)
	$('#content li').waypoint(function(direction){
		//remove all active classes from the fixed nav
		$('#nav a').each(function(index){
			$(this).removeClass('active');
		});
		//get the scrolled to items ID #
		var target_id = $(this).attr('id').substring(1);
		//modify it if we're scrolling up
		if(direction == 'up' && target_id > 1){
			target_id--;
		}
		//build the selector to activate
		var selector = '#nav li.a' + target_id + ' a';
		$(selector).addClass('active');
	});
	$('.options li').on('click', function(event){
		//remove all active classes from the options
		$('.options li').each(function(index){
			$(this).removeClass('active');
		});
		$(this).addClass('active');
		//remove all classes from the nav
		$('#nav').removeClass();
		//get the ID of the option selected
		var target_id = $(this).attr('id');
		$('#nav').addClass(target_id);
	});
});