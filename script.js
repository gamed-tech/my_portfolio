// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Highlight the nav link for the section in view
const links = document.querySelectorAll('.nav nav a');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href')));
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    links.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + entry.target.id));
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => s && observer.observe(s));

// Copy email to the clipboard
const copyBtn = document.getElementById('copy');
const status = document.getElementById('status');
copyBtn.addEventListener('click', async () => {
  const email = copyBtn.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    status.textContent = 'Email address copied.';
  } catch {
    status.textContent = 'Copy failed. My email is ' + email;
  }
});
