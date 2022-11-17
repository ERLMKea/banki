const out = (...str) => console.log(...str)

out("im in script")

pbOpenModal = document.querySelector(".btn--show-modal")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")

function openModal() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

pbOpenModal.addEventListener('click', openModal)

