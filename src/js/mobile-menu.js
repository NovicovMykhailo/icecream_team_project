(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const LinkBtn = document.querySelector('.clz-link');
  const LinkBtn2 = document.querySelector('.clz-link2');
  const LinkBtn3 = document.querySelector('.clz-link3');
  const LinkBtn4 = document.querySelector('.clz-link4');
  const LinkBtn5 = document.querySelector('.clz-link5');

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
  LinkBtn.addEventListener('click', toggleMenu);
  LinkBtn2.addEventListener('click', toggleMenu);
  LinkBtn3.addEventListener('click', toggleMenu);
  LinkBtn4.addEventListener('click', toggleMenu);
  LinkBtn5.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
