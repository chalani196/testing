// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// ===== Project Card Hover Animation =====
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = "0 6px 15px rgba(0, 204, 102, 0.4)";
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    });
});
