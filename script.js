// CURSOR GLOW
const cursorGlow = document.getElementById('cursorGlow');
let glowX = 0, glowY = 0, curX = 0, curY = 0;
document.addEventListener('mousemove', e => { curX = e.clientX; curY = e.clientY; });
(function animGlow() {
  glowX += (curX - glowX) * 0.08;
  glowY += (curY - glowY) * 0.08;
  cursorGlow.style.transform = `translate(${glowX}px,${glowY}px)`;
  requestAnimationFrame(animGlow);
})();

// NAV
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 10), { passive: true });

// MOBILE NAV
const burger = document.getElementById('navBurger');
const drawer = document.getElementById('navDrawer');
burger.addEventListener('click', () => drawer.classList.toggle('open'));
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => drawer.classList.remove('open')));

// THEME
const themeBtn = document.getElementById('themeToggle');
const sun = themeBtn.querySelector('.icon-sun');
const moon = themeBtn.querySelector('.icon-moon');

function setTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  localStorage.setItem('theme', t);
  sun.style.display  = t === 'dark'  ? '' : 'none';
  moon.style.display = t === 'light' ? '' : 'none';
}
setTheme(localStorage.getItem('theme') || 'dark');
themeBtn.addEventListener('click', () =>
  setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')
);

// TYPING
const words = ['Agentic AI Developer','AI Systems Builder','Deep Learning Engineer','AI & Business Analyst','Generative AI Engineer'];
let wi = 0, ci = 0, del = false;
const el = document.getElementById('typingText');
function type() {
  const w = words[wi];
  if (del) { el.textContent = w.slice(0, --ci); if (!ci) { del=false; wi=(wi+1)%words.length; setTimeout(type,350); return; } setTimeout(type,38); }
  else      { el.textContent = w.slice(0, ++ci); if (ci===w.length) { del=true; setTimeout(type,2200); return; } setTimeout(type,65); }
}
setTimeout(type, 900);

// SCROLL REVEAL
const ro = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); ro.unobserve(e.target); } });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

// STAT COUNTERS
function animateCount(el, target, duration = 1400) {
  const start = performance.now();
  const update = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.floor(ease * target);
    if (p < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}

const statObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-count]').forEach(n => {
        animateCount(n, parseInt(n.dataset.count));
      });
      statObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

const statGrid = document.querySelector('.stats-grid');
if (statGrid) statObs.observe(statGrid);

// Broken image fallback: hide img, show text sibling if it exists
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function () { this.style.display = 'none'; });
});
