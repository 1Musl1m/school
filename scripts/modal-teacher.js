const modalTeacherButtons = document.querySelectorAll('.modal-teacher-button');
    const modalCloseButtons = document.querySelectorAll('.modal-close');

    modalTeacherButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.classList.remove('hidden');
            }
        });
    });

    modalCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.classList.add('hidden');
            }
        });
    });