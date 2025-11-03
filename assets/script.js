// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (navToggle && navList) {
  navToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Active link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const setActive = () => {
  let current = '';
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    const offsetTop = rect.top + window.scrollY - 120; // header offset
    if (window.scrollY >= offsetTop && window.scrollY < offsetTop + sec.offsetHeight) {
      current = sec.id;
    }
  });
  navLinks.forEach((l) => {
    l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
  });
};
window.addEventListener('scroll', setActive);
window.addEventListener('load', setActive);

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal-up');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  },
  { threshold: 0.15 }
);
revealEls.forEach((el) => io.observe(el));

// Show more/less for projects (static HTML version)
const toggleBtn = document.getElementById('toggle-projects');
if (toggleBtn) {
  const extras = Array.from(document.querySelectorAll('.project-extra'));
  toggleBtn.addEventListener('click', () => {
    const anyHidden = extras.some((el) => el.classList.contains('hidden'));
    extras.forEach((el) => el.classList.toggle('hidden', !anyHidden ? true : false));
    toggleBtn.textContent = anyHidden ? 'Show less' : 'Show more';
  });
}


