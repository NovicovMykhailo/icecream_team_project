(() => {
	const refs = {
		openModalBtn: document.querySelector(".ingredients-modal-open"),
		closeModalBtn: document.querySelector(".ingredients-modal-close"),
		modal: document.querySelector(".ingredients-modal"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		document.body.classList.toggle("modal-open");
		refs.modal.classList.toggle("is-hidden");
	}

	
	document.querySelector(".ingredients-modal-open").addEventListener('click', function() {
		document.querySelector(".ingredients-modal").style.display = 'flex';
		document.querySelector("body").style.overflowY = 'hidden';
	  });
	  
	
	  
	  /* when modal is closed */
	  document.querySelector(".ingredients-modal-close").addEventListener('click', function() {
		document.querySelector(".ingredients-modal").style.display = 'is-hidden';
		document.querySelector("body").style.overflowY = 'visible';
	  });

})();


(() => {
	const refs = {
		openModalBtn: document.querySelector(".ingredients-modal-open2"),
		closeModalBtn: document.querySelector(".ingredients-modal-close2"),
		modal: document.querySelector(".ingredients-modal2"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		document.body.classList.toggle("modal-open");
		refs.modal.classList.toggle("is-hidden");
	}

	document.querySelector(".ingredients-modal-open2").addEventListener('click', function() {
		document.querySelector(".ingredients-modal2").style.display = 'flex';
		document.querySelector("body").style.overflowY = 'hidden';
	  });
	  
	
	  
	  /* when modal is closed */
	  document.querySelector(".ingredients-modal-close2").addEventListener('click', function() {
		document.querySelector(".ingredients-modal2").style.display = 'is-hidden';
		document.querySelector("body").style.overflowY = 'visible';
	  });

})();


(() => {
	const refs = {
		openModalBtn: document.querySelector(".ingredients-modal-open3"),
		closeModalBtn: document.querySelector(".ingredients-modal-close3"),
		modal: document.querySelector(".ingredients-modal3"),
	};

	refs.openModalBtn.addEventListener("click", toggleModal);
	refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal() {
		document.body.classList.toggle("modal-open");
		refs.modal.classList.toggle("is-hidden");
	}

	document.querySelector(".ingredients-modal-open3").addEventListener('click', function() {
		document.querySelector(".ingredients-modal3").style.display = 'flex';
		document.querySelector("body").style.overflowY = 'hidden';
	  });
	  
	
	  
	  /* when modal is closed */
	  document.querySelector(".ingredients-modal-close3").addEventListener('click', function() {
		document.querySelector(".ingredients-modal3").style.display = 'is-hidden';
		document.querySelector("body").style.overflowY = 'visible';
	  });

})();