const out = (...str) => console.log(...str)

out("im in script")

pbOpenModal = document.querySelector(".btn--show-modal")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
pbCloseModal = document.querySelector(".btn--close-modal")

function openModal() {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

pbOpenModal.addEventListener('click', openModal)
pbCloseModal.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});


