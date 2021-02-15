// JavaScript Document
$(document).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>300){
			$('.backtotop').fadeIn(250);
		}else{
			$('.backtotop').fadeOut(250);
		}
	});
	$('.backtotop').click(function(){
		$('html,body').animate(
			{scrollTop:0},400);
		
	});
});