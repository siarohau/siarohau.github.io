(function($) {
    
    jQuery.fn.dwParalaxImages = function(options) {
      
        var options = $.extend({
      		paralaxItemClassName: ".paralaxItem",
      		maxChangePositionY: 5,
      		maxChangePositionX: 5
        }, options);
        
        // jquery vars
        var $this = $(this);
        var $paralaxItems = $this.find(options.paralaxItemClassName);
		
        //plugin global wars
        var startMousePosition = false;
        var maxChangePositionX = 100 - options.maxChangePositionX;
        var maxChangePositionY = 100 - options.maxChangePositionY;

        //functions
        var mouseMoveTask = function(event){

        	//current page scroll position
        	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        	// current browser window width
        	var windowWidth = window.innerWidth;
  	
  	        // current browser window height
        	var windowHeight = window.innerHeight;

  			//set start mouse position
  			if(startMousePosition == false){
  				startMousePosition = {
  					pageX: event.pageX,
  					pageY: event.pageY - scrollTop
  				};
  			}
  			
  			// x controls
  			var shiftPercentX = event.pageX * 100 / windowWidth;
  			var shiftPercentXfromWindow = (windowWidth * shiftPercentX / 100);

  			// y controls
  			var shiftPercentY = (event.pageY - scrollTop) * 100 / windowHeight;
  			var shiftPercentYfromWindow = (windowHeight * shiftPercentY / 100);

  			$paralaxItems.each(function(i, nextElement){
  				
  				//get jquery object
  				var $nextElement = $(nextElement);

  				// set element vector
  				var itemVectror = ($nextElement.data("vector") == "positive" || $nextElement.data("vector") == undefined) ? "" : "-";

  				//set max change position X 
  				var maxChangePositionXNow = $nextElement.data("max-change-position-x") != undefined ? (100 - $nextElement.data("max-change-position-x")) : maxChangePositionX;
  				var shiftPercentXfromWindowNow = shiftPercentXfromWindow / maxChangePositionXNow;

  				//set max change position Y 
  				var maxChangePositionYNow = $nextElement.data("max-change-position-y") != undefined ? (100 - $nextElement.data("max-change-position-y")) : maxChangePositionY;
  				var shiftPercentYfromWindowNow = shiftPercentYfromWindow / maxChangePositionYNow;

  				//disable null x items 
  				if(maxChangePositionXNow == 100){
  					shiftPercentXfromWindowNow = 0;
  				}
				
				//disable null y items 
  				if(maxChangePositionYNow == 100){
  					shiftPercentYfromWindowNow = 0;
  				}
		  		
		  		$nextElement.css({
	  				transform: 'translateX(' + itemVectror + shiftPercentXfromWindowNow + 'px) translateY('+ itemVectror + shiftPercentYfromWindowNow + 'px)'
	  			});

  			});

        }

        //events
        $(window).on("mousemove", mouseMoveTask);

    };

})(jQuery);