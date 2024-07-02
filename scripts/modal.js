document.addEventListener('DOMContentLoaded', () => {
  const toggleButtons = document.querySelectorAll('[data-modal-toggle]');
  const hideButtons = document.querySelectorAll('[data-modal-hide]');

  toggleButtons.forEach(button => {
      button.addEventListener('click', () => {
          const modalId = button.getAttribute('data-modal-target');
          const modal = document.getElementById(modalId);
          modal.classList.remove('hidden');
      });
  });

  hideButtons.forEach(button => {
      button.addEventListener('click', () => {
          const modalId = button.getAttribute('data-modal-hide');
          const modal = document.getElementById(modalId);
          modal.classList.add('hidden');
      });
  });

  window.addEventListener('click', (event) => {
      const modals = document.querySelectorAll('[id^="modal-"]');
      modals.forEach(modal => {
          if (event.target === modal) {
              modal.classList.add('hidden');
          }
      });
  });
});