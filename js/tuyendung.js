// sample.js

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.job-listing');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 200);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    cards.forEach(card => observer.observe(card));
  });


  