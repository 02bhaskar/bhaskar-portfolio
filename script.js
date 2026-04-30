// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or default to 'light' mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        updateThemeIcon('dark');
    } else {
        body.classList.remove('dark');
        updateThemeIcon('light');
    }
    
    // Add click event listener to toggle dark class on body
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        
        // Save theme preference
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            updateThemeIcon('dark');
        } else {
            localStorage.setItem('theme', 'light');
            updateThemeIcon('light');
        }
    });
    
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
    
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
    
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
        
        // Navbar background on scroll
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px var(--shadow-md)';
        } else {
            navbar.style.boxShadow = '0 2px 10px var(--shadow)';
        }
    });
    
    // Contact Form Handling - Using Formspree
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Let the form submit naturally to Formspree
            console.log('Form submitted to Formspree!');
        });
    }
    
    // Download Resume Functionality
    const downloadResumeBtn = document.getElementById('downloadResume');
    
    downloadResumeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Open resume PDF
window.open('assets/Bhaskar_resume.pdf', '_blank');
    });
    
    // Profile Photo Error Handling
    const profilePhoto = document.getElementById('profilePhoto');
    
    profilePhoto.addEventListener('error', function() {
        // If image fails to load, show a placeholder
        this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect fill="%232563eb" width="400" height="400"/%3E%3Ctext fill="%23ffffff" font-family="Arial, sans-serif" font-size="120" text-anchor="middle" x="200" y="240"%3EBG%3C/text%3E%3C/svg%3E';
        this.alt = 'Bhaskar G - Placeholder';
    });
    
    console.log('Portfolio initialized successfully!');
});
