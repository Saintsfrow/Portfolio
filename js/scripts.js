document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const navList = document.getElementById('navList');
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    const header = document.querySelector('header');
    
    // Toggle mobile menu
    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    // Show or hide the scroll to top button
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
        
        // Keep header fixed when scrolling
        if (window.scrollY > 0) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }

        // Highlight active section
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < 100) {
                const id = section.getAttribute('id');
                document.querySelectorAll('nav ul li a').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Intersection Observer to add fade-in effect
    const fadeElements = document.querySelectorAll('.fade-in');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // Dynamic Text Effect
    const words = ["a Mechatronics Engineer", "a Programmer", "a Gamer", "a Tech Enthusiast", "a Photographer"];
    let index = 0;
    const dynamicText = document.querySelector(".dynamic-text");

    function updateText() {
        dynamicText.textContent = words[index];
        index = (index + 1) % words.length; // Loop back to the first word
    }

    setInterval(updateText, 2000); // Change text every 2 seconds
    updateText(); // Initialize text immediately
});
