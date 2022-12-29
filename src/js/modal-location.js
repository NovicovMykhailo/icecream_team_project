(() => {
    const refs = {
      openModalBtn: document.querySelector(".location-modal-open"),
      closeModalBtn: document.querySelector(".location-modal-close"),
      modal: document.querySelector(".location-modal"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  document.querySelector(".location-modal-open").addEventListener('click', function() {
    document.querySelector(".location-modal").style.display = 'flex';
    document.querySelector("body").style.overflowY = 'hidden';
    });
    

  
  /* when modal is closed */
  document.querySelector(".location-modal-close").addEventListener('click', function() {
  document.querySelector(".location-modal").style.display = 'is-hidden';
  document.querySelector("body").style.overflowY = 'visible';
  });