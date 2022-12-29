(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    openModalBtn2: document.querySelector(".data-modal-open2"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
 
  


  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();


document.querySelector("[data-modal-open]").addEventListener('click', function() {
  document.querySelector("[data-modal]").style.display = 'flex';
  document.querySelector("body").style.overflowY = 'hidden';
});

document.querySelector(".data-modal-open2").addEventListener('click', function() {
  document.querySelector("[data-modal]").style.display = 'flex';
  document.querySelector("body").style.overflowY = 'hidden';
});


/* when modal is closed */
document.querySelector("[data-modal-close]").addEventListener('click', function() {
  document.querySelector("[data-modal]").style.display = 'is-hidden';
  document.querySelector("body").style.overflowY = 'visible';
});

