jQuery(document).ready(function($){
	$('a[href^="#"]').click(function(){
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        	|| location.hostname == this.hostname) 
    	{
		var target = $(this.hash),
		headerHeight = $(".primary-header").height() + 65; // Get fixed header height
            
		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              
		if (target.length){
        	$('html,body').animate({
				scrollTop: target.offset().top - headerHeight
			}, 1000);
        return false;
      }
    }
  });
});
