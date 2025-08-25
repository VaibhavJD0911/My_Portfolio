document.addEventListener('DOMContentLoaded', () => {
  const typingElement = document.querySelector('.typing-text');
  const texts = ["I'm a Full Stack Developer", "Frontend Developer", "Backend Developer"];

  let i = 0, j = 0;
  let currentText = '';
  let isDeleting = false;

  function typeEffect() {
    if (i < texts.length) {
      if (!isDeleting && j <= texts[i].length) currentText = texts[i].substring(0, j++);
      if (isDeleting && j >= 0) currentText = texts[i].substring(0, j--);

      typingElement.textContent = currentText;

      if (j === texts[i].length) { isDeleting = true; setTimeout(typeEffect, 1000); return; }
      if (isDeleting && j === 0) { isDeleting = false; i = (i + 1) % texts.length; }
    }
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
  typeEffect();
});

// Navbar toggle for mobile
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});
