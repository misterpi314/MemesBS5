$(function(){
  $("#navbar").load("nav.html"); 
  $("#footer").load("footer.html"); 
  $('#imgs').find('img').addClass('img-fluid')
  $('.carousel').carousel({
    interval: 3500,
  });
});