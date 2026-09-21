document.getElementById('year').textContent = new Date().getFullYear();
const menu = document.querySelector('.menu-button');
const nav = document.getElementById('main-nav');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu?.setAttribute('aria-expanded', 'false'); nav.classList.remove('open');
}));
