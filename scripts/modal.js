// Получаем элементы
const requestButton = document.getElementById('request-button');
const closeModalButton = document.getElementById('close-modal-button');
const modal = document.getElementById('request-modal');

requestButton.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
});

closeModalButton.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex'); 
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const modalButtons = document.querySelectorAll("[data-modal-target]");
    const closeButton = document.querySelectorAll("[data-modal-hide]");
    const body = document.body;

    modalButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const targetModal = button.dataset.modalTarget;
            const modal = document.getElementById(targetModal);
            if (modal) {
                modal.classList.remove("hidden");
                modal.setAttribute("aria-hidden", "false");
                body.classList.add("body-scroll-lock");
            }
        });
    });

    closeButton.forEach((button) => {
        button.addEventListener("click", () => {
            const targetModal = button.dataset.modalHide;
            const modal = document.getElementById(targetModal);
            if (modal) {
                modal.classList.add("hidden");
                modal.setAttribute("aria-hidden", "true");
                body.classList.remove("body-scroll-lock");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const openModalButton2 = document.getElementById("openModal2");
    const closeModalButton2 = document.getElementById("closeModal2");
    const modal2 = document.getElementById("myModal2");
    const body = document.body;

    openModalButton2.addEventListener("click", function () {
        modal2.classList.remove("hidden");
        body.classList.add("no-scroll");
    });

    closeModalButton2.addEventListener("click", function () {
        modal2.classList.add("hidden");
        body.classList.remove("no-scroll");
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal2) {
            modal2.classList.add("hidden");
            body.classList.remove("no-scroll");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const openModalButton = document.getElementById("openModal");
    const closeModalButton = document.getElementById("closeModal");
    const modal = document.getElementById("myModal");
    const body = document.body;

    openModalButton.addEventListener("click", function () {
        modal.classList.remove("hidden");
        body.classList.add("no-scroll");
    });

    closeModalButton.addEventListener("click", function () {
        modal.classList.add("hidden");
        body.classList.remove("no-scroll");
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.add("hidden");
            body.classList.remove("no-scroll");
        }
    });
});
