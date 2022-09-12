$(document).ready(function(){
$('.nex').click(function(){


var currentImage = $('.active');
var nextImage=currentImage.next();

if (nextImage.length){
currentImage.removeClass('active').css('z-index',-10);
//remove the active class from the current image

nextImage.addClass('active').css('z-index', 10);
//add the active class to the next image on roll
}

else{ $('#fi').first().addClass('active')};


var currentI =$('.i');
  var nextI=currentI.next();
  
  if(nextI.length)
  
  {currentI.removeClass('i');
  $(nextI).addClass('i') }
  
  else {// $(currentI).removeClass('i');
  
  $('#ij').first().addClass('i')};
  });
 



$('.prev').click( function(){ 
var currentImg = $('.active');
var prevImg = currentImg.prev();
//previous image

if (prevImg.length){
 currentImg.removeClass('active')
$(prevImg).addClass('active');
 }
else{ $('.slide-inner').addClass('active')
};


var currentI =$('.i');
  var prevI=currentI.prev();
  
  if(prevI.length)
  
  {currentI.removeClass('i');
  $(prevI).addClass('i') }
  
  else {// $(currentI).removeClass('i');
  
  $('#ij').first().addClass('i')};
  });
 

});





ScrollReveal({ distance: '60px',
    reset:true,
    viewFactor: 0.3});
    
    ScrollReveal().reveal('.g', {
     duration: 5000,
    origin:'right',
   rotate: {
   x: 989,
   y: 782,
   z:910
   }
    });
    
   
    ScrollReveal().reveal('.widget', {
    interval:200,
    duration:2000,
   origin:'left',
   });
   
   ScrollReveal().reveal('.s1', {
   duration:900,
   origin:'right',
   });
   
   ScrollReveal().reveal('.s2', {
   duration:900,
   origin:'left',
   });
   
   ScrollReveal().reveal('.s3', {
   duration:900,
   origin:'left',
   });
   ScrollReveal().reveal('.s4', {
   duration:900,
   origin:'right',
   });
   ScrollReveal().reveal('.s5', {
   duration:900,
   origin:'left',
   });
   
  ScrollReveal().reveal('.s6', {
  duration:900,
  origin:'right',
  });
  ScrollReveal().reveal('.s7', {
  duration:900,
  origin:'left',
  });
  ScrollReveal().reveal('.s8', {
  duration:900,
  origin:'right',
  });
  ScrollReveal().reveal('.s9', {
  duration:900,
  origin:'left',
  });
  ScrollReveal().reveal('.s10', {
  duration:900,
  origin:'right',
  });
  
  
  $(window).load(function() {
  $('.flexslider').flexslider();
  });
  