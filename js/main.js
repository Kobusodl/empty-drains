const body = document.body;
const header = document.querySelector('[data-header]');
const toggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');

function closeMenu() {
  body.classList.remove('menu-open');
  if (toggle) toggle.setAttribute('aria-expanded', 'false');
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMenu();
});

function updateHeaderShadow() {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 8);
}

updateHeaderShadow();
window.addEventListener('scroll', updateHeaderShadow, { passive: true });
