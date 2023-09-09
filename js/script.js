"use strict";
const modal = document.querySelector(".modal"),
  overlay = document.querySelector(".overlay"),
  btnCloseModal = document.querySelector(".close-modal"),
  btnsOpenModal = document.querySelector(".banner-btn");

let switchModal = true;

const closeModal = () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};
btnsOpenModal.addEventListener("click", function () {
  if (switchModal) {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    switchModal = false;
  } else {
    alert("Hello, World");
    switchModal = true;
  }
});
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (!modal.classList.contains("hidden") && e.key === "Escape") closeModal();
});
