/* ===== Navbar & Mobile Menu ===== */
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = menuToggle.querySelector('i');
  
  if (navLinks.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close menu when clicking a link
navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

/* ===== Scroll Active State ===== */
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    // Offset for better user experience
    if (pageYOffset >= (sectionTop - 250)) {
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
    btn.style.background = '#00f2ea'; 
    btn.style.color = '#000';
    formMessage.innerText = "Thanks! I'll get back to you soon.";
    formMessage.style.color = '#00f2ea';
    contactForm.reset();
    
    setTimeout(() => {
      btn.innerText = initialText;
      btn.style.background = '';
      btn.style.color = '';
      btn.style.opacity = '1';
      formMessage.innerText = '';
    }, 4000);
  }, 1500);
});