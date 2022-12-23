(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
  
    const toggleMenu = () => {
      const isMenuOpen =
        openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
  
      const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
      bodyScrollLock[scrollLockMethod](document.body);
    };
  
    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);
  
    // Close the mobile menu on wider screens if the device orientation changes
    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      openMenuBtn.setAttribute('aria-expanded', false);
      bodyScrollLock.enableBodyScroll(document.body);
    });
  })();
// gallery Script
$(function(){
   setInterval(function(){
      $(".slideshow-mobile ul").animate({marginLeft:-280},2500,function(){
         $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
      })
   }, 5000);
});

 $(function(){
   setInterval(function(){
      $(".slideshow-tablet ul").animate({marginLeft:-704},2500,function(){
         $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
      })
   }, 5000);
});

$(function(){
   setInterval(function(){
      $(".slideshow-desktop ul").animate({marginLeft:-1013},2500,function(){
         $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
      })
   }, 5000);
});