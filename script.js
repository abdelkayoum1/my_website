/* ===== Navbar & Mobile Menu ===== */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = menuToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Close menu when clicking a link
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.querySelector('i').classList.add('fa-bars');
    menuToggle.querySelector('i').classList.remove('fa-times');
  });
});

/* ===== Scroll Active State ===== */
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(li => {
    li.classList.remove('active');
    if (li.getAttribute('href').includes(current)) {
      li.classList.add('active');
    }
  });
});

/* ===== Contact Form Handling ===== */
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const btn = contactForm.querySelector('button');
  const initialText = btn.innerText;
  
  btn.innerText = 'Sending...';
  btn.style.opacity = '0.7';
  
  // Simulate sending
  setTimeout(() => {
    btn.innerText = 'Message Sent!';
    btn.style.background = '#00f2ea'; // Success color (Cyan)
    btn.style.color = '#000';
    formMessage.innerText = "Thanks! I'll get back to you soon.";
    formMessage.style.color = '#00f2ea';
    contactForm.reset();
    
    setTimeout(() => {
      btn.innerText = initialText;
      btn.style.background = ''; // Reset to default CSS
      btn.style.color = '';
      btn.style.opacity = '1';
      formMessage.innerText = '';
    }, 4000);
  }, 1500);
});