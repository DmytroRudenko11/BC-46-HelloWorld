(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-buy-open]"),
    closeModalBtn: document.querySelector("[data-modal-buy-close]"),
    modal: document.querySelector("[data-modal-buy]"),
  };

  for (item of refs.openModalBtns) {
  item.addEventListener("click", toggleModal);
  }
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("is-scroll");
  }
})();