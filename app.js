// Navbar mobile toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simple client-side feedback
    document.getElementById('formMessage').textContent = "Thank you! We'll get in touch soon.";
    this.reset();
});