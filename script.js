const form = document.querySelector('form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    form.reset();
  });
}

const animatedElements = document.querySelectorAll('.card, .feature, .member');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach((element) => observer.observe(element));
}
