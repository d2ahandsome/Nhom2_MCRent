// Remove this from sample.js
window.addEventListener('scroll', function() {
    const aboutElements = document.querySelectorAll('.about h2:not(.visible), .about p:not(.visible)');
    aboutElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;
        if (elementPosition < screenPosition - 100) {
            element.classList.add('visible');
        }
    });
});