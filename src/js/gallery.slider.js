
$(function(){
   setInterval(function(){
      $(".slideshow-mobile ul").animate({marginLeft:'-100%'},2500,function(){
         $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
      })
   }, 5000);
});

 $(function(){
   setInterval(function(){
      $(".slideshow-tablet ul").animate({marginLeft:'-100%'},2500,function(){
         $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
      })
   }, 5000);
});

$(function(){
   setInterval(function(){
      $(".slideshow-desktop ul").animate({marginLeft:'-100%'},2500,function(){
         $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
      })
      
   }, 5000);
   
});
