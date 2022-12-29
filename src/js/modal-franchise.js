(() => {
    const refs = {
      openModalBtn: document.querySelector(".franchise-modal-open"),
      closeModalBtn: document.querySelector(".franchise-modal-close"),
      modal: document.querySelector(".franchise-modal"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();

  document.querySelector(".franchise-modal-open").addEventListener('click', function() {
    document.querySelector(".franchise-modal").style.display = 'flex';
    document.querySelector("body").style.overflowY = 'hidden';
  });
  

  
  /* when modal is closed */
  document.querySelector(".franchise-modal-close").addEventListener('click', function() {
    document.querySelector(".franchise-modal").style.display = 'is-hidden';
    document.querySelector("body").style.overflowY = 'visible';
  });