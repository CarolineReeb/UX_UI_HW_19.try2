$(document).ready(function() {
    $('.darken-on-hover').hover().click(function() 
    {
      
      $(this).toggleClass('clicked');

    if ($(this).hasClass('clicked')) {
        $(this).text('carolinereeb4@gmail.com');
      } else {
        $(this).text('Contact Me');
      }
    });
  });