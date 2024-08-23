const modal = document.querySelector(".add-cat-form");
const openButton = document.querySelector(".add-note-btn");
const closeButtton = document.querySelector(".close-btn");

const openModal = () => {
    modal.classList.remove("hidden");
}

openButton.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hidden");
}

closeButtton.addEventListener("click", closeModal);