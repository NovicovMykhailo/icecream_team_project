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
})();