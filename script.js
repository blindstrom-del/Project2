const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const hairMenu = document.querySelector('.hair-menu');

if (hairMenu) {
  hairMenu.querySelectorAll('.hair-menu-list a').forEach((link) => {
    link.addEventListener('click', () => {
      hairMenu.open = false;
    });
  });

  document.addEventListener('click', (event) => {
    if (!hairMenu.contains(event.target)) hairMenu.open = false;
  });

  hairMenu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      hairMenu.open = false;
      hairMenu.querySelector('summary').focus();
    }
  });
}

document.querySelectorAll('.routine').forEach((routine) => {
  const buttonImage = routine.querySelector('.mine-button img');
  routine.addEventListener('toggle', () => {
    buttonImage.src = routine.open ? 'designs/SVG/After Button.svg' : 'designs/SVG/before button.svg';
    if (!reducedMotion) {
      buttonImage.animate(
        [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }],
        { duration: 650, easing: 'ease-out' }
      );
    }
  });
});

document.querySelectorAll('.cart-button, .bundle-button').forEach((button) => {
  button.addEventListener('click', () => {
    if (button.dataset.added === 'true') return;
    button.dataset.added = 'true';
    button.textContent = button.classList.contains('bundle-button') ? 'routine added! 20% off' : 'added!';
    button.setAttribute('aria-live', 'polite');
  });
});
