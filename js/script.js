
// --- Mobile menu toggle ---
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle?.addEventListener('click', () => {
  const isOpen = getComputedStyle(navLinks).display !== 'none';
  navLinks.style.display = isOpen ? 'none' : 'flex';
});

// --- Footer year ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Greeting by time of day ---
(function setGreeting() {
  const h = new Date().getHours();
  const greetingEl = document.getElementById('greeting');
  let msg = 'Hello!';
  if (h >= 5 && h < 12) msg = 'Good morning!';
  else if (h >= 12 && h < 17) msg = 'Good afternoon!';
  else if (h >= 17 && h < 22) msg = 'Good evening!';
  else msg = 'Hello, night owl!';
  greetingEl.textContent = msg;
})();

// --- Light/Dark theme toggle (saved in localStorage) ---
const themeToggle = document.getElementById('themeToggle');
const THEME_KEY = 'pref-theme';

// set initial theme from saved value or system preference
(function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'light') document.body.classList.add('light');
  if (!saved) {
    // Try system preference
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    if (prefersLight) document.body.classList.add('light');
  }
})();

themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark');
});

// --- Contact form demo handler (no backend) ---
document.getElementById('sendBtn')?.addEventListener('click', () => {
  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const message = document.getElementById('message')?.value.trim();
  const status = document.getElementById('formStatus');

  if (!name || !email || !message) {
    status.textContent = 'Please fill all fields.';
    return;
  }
  // Very simple email check
  if (!email.includes('@') || !email.includes('.')) {
    status.textContent = 'Please enter a valid email.';
    return;
  }
  status.textContent = 'Thanks! (Demo only, no backend yet.)';
});
