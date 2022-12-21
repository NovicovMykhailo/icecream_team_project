// gallery Script
$(function(){
    setInterval(function(){
       $(".slideshow ul").animate({marginTop:-422},600,function(){
          $(this).css({marginTop:0}).find("li:last").after($(this).find("li:first"));
       })
    }, 3500);
 });