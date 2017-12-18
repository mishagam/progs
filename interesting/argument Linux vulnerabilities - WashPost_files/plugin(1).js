(function($) 
{
  $(document).ready(function()
  {  
    $(document).on('click', '.wapo-footnote', function(event)
    {
      event.preventDefault();

      $(this).toggleClass('wapo-footnote-active');
      
      var index = $('.wapo-footnote').index($(this)),
        active = $(this).hasClass('wapo-footnote-active');
      
      $('.wapo-footnote-content:eq(' + index + ')')
        .slideToggle({
          duration: 'fast',
          start: function()
          {
            $(this).css('display', 'block');
          }
        });
    });
  });
})(jQuery);