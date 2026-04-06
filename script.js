// =============================================
// NAV SCROLL
// =============================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// =============================================
// MOBILE MENU
// =============================================
const burger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('navMobile');

burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// =============================================
// THEME TOGGLE
// =============================================
const themeToggle = document.getElementById('themeToggle');
const iconSun  = document.getElementById('iconSun');
const iconMoon = document.getElementById('iconMoon');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (theme === 'light') {
    iconSun.style.display = 'none';
    iconMoon.style.display = '';
  } else {
    iconSun.style.display = '';
    iconMoon.style.display = 'none';
  }
}

applyTheme(localStorage.getItem('theme') || 'dark');

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// =============================================
// TYPING EFFECT
// =============================================
const words = [
  'AI Systems Builder',
  'RAG Pipeline Engineer',
  'Agentic Workflow Designer',
  'Deep Learning Practitioner',
  'Business Analytics Specialist',
];

let wIdx = 0, cIdx = 0, deleting = false;
const typingEl = document.getElementById('typingText');

function type() {
  const word = words[wIdx];
  if (deleting) {
    typingEl.textContent = word.slice(0, --cIdx);
    if (cIdx === 0) { deleting = false; wIdx = (wIdx + 1) % words.length; setTimeout(type, 350); return; }
    setTimeout(type, 42);
  } else {
    typingEl.textContent = word.slice(0, ++cIdx);
    if (cIdx === word.length) { deleting = true; setTimeout(type, 2000); return; }
    setTimeout(type, 68);
  }
}
setTimeout(type, 900);

// =============================================
// SCROLL REVEAL
// =============================================
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
