
$(document).ready(function() {

  $(window).scroll(function() {
      if ($(window).scrollTop() >= ($(document).height() - $(window).height())) {
        $('.popup').css( "left", "20px" )
        $('.arrow').hide();
      }else{
        $('.popup').css( "left", "-380px" );
        $('.arrow').show();
    }
  });

  $('.close').click(function(){
    $('.popup').hide();
  });

});
