$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(5000)
  .next()
  .fadeIn(7000)
  .end()
  .appendTo('#slideshow');
}, 9000);


$(document).ready(function(){
$('#menu').click(function(){

$('.menu').animate({width:'370px',
height:'600px'
});
});


$('#x').click(function(){

$('.menu').animate({width:'0px'
});
});

});
