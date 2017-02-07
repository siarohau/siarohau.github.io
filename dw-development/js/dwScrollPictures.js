(function($) {
    
   jQuery.fn.dwScrollPictures = function(options) {
      return this.each(function() {
         var options = $.extend({
            pictureScrollItemClassName: ".pictureScrollItem",
            pictureScrollSpeed: "1s"
         }, options);

         // jquery vars
         var $this = $(this);
         var $pictureScrollItem = $this.find(options.pictureScrollItemClassName);

         // plugin vars
         var pictureContainerHeight = $this.height();
         var pictureItemHeight = $pictureScrollItem.height();

         //set css
         $pictureScrollItem.css({
            transition: "all " + options.pictureScrollSpeed + " ease-in-out",
            opacity: 1
         });

         //functions
         var reBuildParams = function(event){
            pictureContainerHeight = $this.height();
            pictureItemHeight = $pictureScrollItem.height();
         }

         var enterScrollTarget = function(event){
               var translateValue = pictureItemHeight - pictureContainerHeight;
               $pictureScrollItem.stop().css({
                  "transform": "translateY(-" + translateValue + "px)",
                  opacity: 1
               });
         }

         var leaveScrollTarget = function(event){
            $pictureScrollItem.stop().css({
               "transform": "translateY(0px)",
               opacity: 1
            });
         }

         //events
        
         $(document).on("resize", window, reBuildParams);
         
         $this.on("mouseenter", enterScrollTarget);
         $this.on("mouseleave", leaveScrollTarget);

      });
   };

})(jQuery);