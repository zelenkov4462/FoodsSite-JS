function modal() {
  // Modal

  const modalTriger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal");

  function showModal() {
    // modal.style.display = "block";
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    // modal.style.display = "none";
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
    clearInterval(modalTimerId);
  }

  modalTriger.forEach((btn) => {
    btn.addEventListener("click", showModal);
  });

  modal.addEventListener("click", (e) => {
    if (e.target == modal || e.target.getAttribute("data-close") == "") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(showModal, 50000);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      showModal();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }

  window.addEventListener("scroll", showModalByScroll);
}

module.exports = modal;
