// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Parallax Effect for Video
window.addEventListener('scroll', function() {
    const video = document.getElementById('hero-video');
    const scrollPosition = window.scrollY;
    video.style.transform = `scale(1.1) translateY(${scrollPosition * 0.2}px)`;
});

// Fade-in Animation for Hero Content
document.addEventListener('DOMContentLoaded', function() {
    const heroElements = document.querySelectorAll('.hero-content h1, .hero-content p, .hero .buttons');
    heroElements.forEach(element => {
        element.classList.add('visible');
    });
});

// Scroll Animation for About Section
window.addEventListener('scroll', function() {
    const aboutElements = document.querySelectorAll('.about h2, .about p');
    aboutElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if (elementPosition < screenPosition - 100) {
            element.classList.add('visible');
        }
    });
});


//Recruitment
// JavaScript cho hiệu ứng cuộn
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.recruitment-card');

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
                }, index * 200); // Delay mỗi card để tạo hiệu ứng tuần tự
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});
// View More Button Hover Effect
document.addEventListener('DOMContentLoaded', function () {
    const viewMoreBtn = document.querySelector('.btn-view-more');
    if (viewMoreBtn) {
      // Khi di chuột vào nút, phóng to
      viewMoreBtn.addEventListener('mouseover', function () {
        viewMoreBtn.style.transform = 'scale(1.1)';
        viewMoreBtn.style.transition = 'transform 0.3s ease';
      });
  
      // Khi di chuột ra, trở về kích thước ban đầu
      viewMoreBtn.addEventListener('mouseout', function () {
        viewMoreBtn.style.transform = 'scale(1)';
      });
    }
  });