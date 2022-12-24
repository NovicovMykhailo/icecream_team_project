// Read More Script
(() => {
  const refs = {
    openModalBtn: document.querySelector('[read-modal-open]'),
    closeModalBtn: document.querySelector('[read-modal-close]'),
    modal: document.querySelector('[read-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

// script close video
(() => {
  const refs = {
    closeModalBtn: document.querySelector('[read-modal-close]'),
    modal: document.querySelector('[video-modal]'),
  };
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.querySelector('[video-modal]').src = '';
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[read-modal-open]'),
    modal: document.querySelector('[video-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.querySelector('[video-modal]').src =
      'https://www.youtube.com/embed/oa_7fArLuLc?modestbranding=1&autohide=1&showinfo=0&controls=1';
  }
})();
