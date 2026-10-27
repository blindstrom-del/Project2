const heroProducts = [
  { src: 'designs/SVG/Shampoo Straight.svg', alt: 'Being Nourish and Shine shampoo' },
  { src: 'designs/SVG/Dry shampoo tilted.svg', alt: 'Being Instant Refresh dry shampoo' },
  { src: 'designs/SVG/Mousse Curly Hair.svg', alt: 'Being Goodbye Frizz mousse' },
  { src: 'designs/SVG/Shampoo Coiled Hair.svg', alt: 'Being Max Moisture shampoo' },
  { src: 'designs/SVG/leave in moisturizer.svg', alt: 'Being leave-in moisturizer' }
];

const centerProduct = document.querySelector('.orbit-product-center');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (centerProduct && !reducedMotion) {
  let currentProduct = 0;
  window.setInterval(() => {
    currentProduct = (currentProduct + 1) % heroProducts.length;
    centerProduct.style.opacity = '0';
    window.setTimeout(() => {
      centerProduct.src = heroProducts[currentProduct].src;
      centerProduct.alt = heroProducts[currentProduct].alt;
      centerProduct.style.opacity = '1';
    }, 250);
  }, 3200);
}

document.querySelectorAll('.routine').forEach((routine) => {
  const buttonImage = routine.querySelector('.mine-button img');
  routine.addEventListener('toggle', () => {
    buttonImage.src = routine.open ? 'designs/SVG/After Button.svg' : 'designs/SVG/before button.svg';
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
