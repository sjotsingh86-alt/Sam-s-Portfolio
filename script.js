const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  nav.style.display = open ? 'flex' : '';
  nav.style.position = open ? 'absolute' : '';
  nav.style.top = open ? '72px' : '';
  nav.style.left = open ? '18px' : '';
  nav.style.right = open ? '18px' : '';
  nav.style.padding = open ? '18px' : '';
  nav.style.background = open ? '#101216' : '';
  nav.style.border = open ? '1px solid rgba(255,255,255,.1)' : '';
  nav.style.borderRadius = open ? '14px' : '';
  nav.style.flexDirection = open ? 'column' : '';
});

document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => {
  if (window.innerWidth <= 850) nav.style.display = '';
}));

// Small tilt interaction for the profile card.
const card = document.querySelector('.profile-card');
document.querySelector('.hero-visual')?.addEventListener('pointermove', e => {
  if (!card || window.innerWidth < 850) return;
  const r = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX-r.left)/r.width-.5;
  const y = (e.clientY-r.top)/r.height-.5;
  card.style.transform = `rotate(${2+x*4}deg) rotateX(${-y*4}deg) rotateY(${x*4}deg)`;
});
document.querySelector('.hero-visual')?.addEventListener('pointerleave', () => {
  if (card) card.style.transform = 'rotate(2deg)';
});
