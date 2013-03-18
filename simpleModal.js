/*
 * jQuery simplemodal Plugin
 *
 * Copyright 2013, Teena Thomas
 * 
 */

(function($){
  $.fn.modal = function(options){
    // Default configuration properties.
         var defaults = {
                  width               : '500px',
                  height              : '385px',
                  backgroundColor     : '#000000',                  
                  opacity             : '1', 
                  marginLeft          : '100px',  
                  color               : '#FFFFFF',
                  borderColor         : '#000000',
                  border              : '1px solid #000000',
                  zIndex              : '1000',
                  speed               : 'fast',                  
                  position            : 'fixed', // relative, absolute, fixed
                  autohide            : false
         }
         

        var options = $.extend( defaults, options );  
         
        return this.each(function() {
          $(this).css({'position': options.position, 'top': '150px', 'border-color': options.borderColor, 'z-index': options.zIndex, 'opacity': options.opacity,'margin-left': options.marginLeft });          
           $('body').css({ 'background-color': '#444',
             '-ms-filter' : 'progid:DXImageTransform.Microsoft.Alpha(Opacity=80)', 'filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=80)'  });
           $(this).find('#second').css({ 'background-color':options.backgroundColor, 'border': options.border, 'width': options.width,'height': options.height });
           $(this).find('.text_field').show();
           $(this).find('#email_button').show();
           $(this).find('label').show();
           $(this).find('textarea').show();
           $(this).find('#close').show();
           
           $(this).find('#close').click(function(){
                $(this).parents().find('#modal-div').slideUp(options.speed);
                $('body').css({ 'background-color': 'ecebe8'  });  
                             
           });             
        });
  };
})(jQuery);
