$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
  .fadeOut(3000)
  .next()
  .fadeIn(4800)
  .end()
  .appendTo('#slideshow');
}, 4000);


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