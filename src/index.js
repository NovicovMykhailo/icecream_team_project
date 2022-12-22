// gallery Script
$(function(){
    setInterval(function(){
       $(".slideshow ul").animate({marginLeft:-1013},2500,function(){
          $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
       })
    }, 5000);
 });