//  $(document).ready(function(){
//    $('.slideshow').slick({
//      infinite: true,
//      autoplay: true,
//      autoplaySpeed: 5000,
//      slidesToShow: 1,
//      variableWidth: true,
//      slidesToScroll: 1
//       });
//     });


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


// $(function(){
//   var timeSlide;
//   function goSlide() {
//       $(".slideshow__item").animate({marginLeft:'-300'},2500,function(){
//         $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
//       })

//   }
//   timeSlide = setInterval(goSlide, 5000);
  
//   $('.slideshow__item').on('mouseenter', function(){
//     // stop animation
//     clearInterval(timeSlide);
//   }).on('mouseleave', function(){
//     // play animation
//     timeSlide = setInterval(goSlide, 3500);
//   });
// });