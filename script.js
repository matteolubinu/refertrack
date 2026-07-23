// ============================================================================
// IMPORTANTE: incolla qui il link pubblico TestFlight non appena lo crei su
// App Store Connect (App → TestFlight → Test pubblico → Link pubblico).
// Finché resta "#" tutti i bottoni "Scarica la beta" restano disattivi.
// ============================================================================
const TESTFLIGHT_URL = "#";

document.querySelectorAll('[data-tf]').forEach((el) => {
  if (TESTFLIGHT_URL === "#") {
    el.setAttribute('aria-disabled', 'true');
    el.style.opacity = '0.55';
    el.style.cursor = 'not-allowed';
    el.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Il link pubblico TestFlight non è ancora stato pubblicato. Torna presto!');
    });
  } else {
    el.href = TESTFLIGHT_URL;
    el.target = '_blank';
    el.rel = 'noopener';
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

// ------------------------------------------------------------- Tema chiaro/scuro
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
themeToggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('refertrack-theme', next); } catch (e) {}
});

// ------------------------------------------------------------------ Reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach((el) => io.observe(el));

// -------------------------------------------------------------------- FAQ
document.querySelectorAll('.faq-q').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.getAttribute('data-open') === 'true';
    document.querySelectorAll('.faq-item').forEach((i) => {
      i.setAttribute('data-open', 'false');
      i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      item.setAttribute('data-open', 'true');
      btn.setAttribute('aria-expanded', 'true');
    }
  });
});

// ----------------------------------------------------------- Menu mobile
const navToggle = document.getElementById('navToggle');
navToggle?.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  document.querySelector('.nav-links')?.classList.toggle('open');
});
