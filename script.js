let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const themeToggle = document.getElementById('theme-toggle');
const quoteBtns = document.querySelectorAll('#quote-btn, #quote-btn2');
const contactForm = document.getElementById('contact-form');

function showSlide(index) {
    slides.forEach((s, i) => {
        s.classList.toggle('active', i === index);
    });
}
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}
setInterval(nextSlide, 5000);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

quoteBtns.forEach(btn => btn.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
}));

contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks! We will get back to you soon.');
    contactForm.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
