document.addEventListener('DOMContentLoaded', function () {
    // Menu toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    // Toggle mobile menu
    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // Scroll to top button functionality
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Fade-in effect using Intersection Observer
    const fadeElements = document.querySelectorAll('.fade-in');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Dynamic text effect
    const words = ["a Mechatronics Engineer", "a Programmer", "a Gamer", "a Tech Enthusiast", "a Photographer"];
    let index = 0;
    const dynamicText = document.querySelector(".dynamic-text");

    function updateText() {
        dynamicText.textContent = words[index];
        index = (index + 1) % words.length;
    }

    setInterval(updateText, 2000);
    updateText();
});
