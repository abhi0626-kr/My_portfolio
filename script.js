document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Mouse move effect
    document.addEventListener('mousemove', function(e) {
        const images = document.querySelectorAll('.popup-image');
        
        images.forEach(img => {
            img.classList.remove('active');
        });
        
        const randomImg = images[Math.floor(Math.random() * images.length)];
        randomImg.style.left = (e.clientX - 75) + 'px';
        randomImg.style.top = (e.clientY - 75) + 'px';
        randomImg.classList.add('active');
        
        setTimeout(() => {
            randomImg.classList.remove('active');
        }, 1000);
    });
    
    // Sticky Header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
    
    // Portfolio Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                item.style.display = (filter === 'all' || item.getAttribute('data-category') === filter) 
                    ? 'block' 
                    : 'none';
            });
        });
    });

    // Scroll Animation System
    function initScrollAnimations() {
        const animatableElements = document.querySelectorAll(
            '.section-title, .about-content, .service-card, .certificate-card, .portfolio-item, .contact-content'
        );

        function checkScroll() {
            animatableElements.forEach(el => {
                const elTop = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elTop < windowHeight - 100) {
                    el.classList.add('animate');
                }
            });
        }

        // Run on load and scroll
        window.addEventListener('load', checkScroll);
        window.addEventListener('scroll', checkScroll);
        checkScroll(); // Run immediately
    }

    // Initialize the animations
    initScrollAnimations();

    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = {
                name: this.querySelector('input[type="text"]').value,
                email: this.querySelector('input[type="email"]').value,
                subject: this.querySelector('input[type="text"]').value,
                message: this.querySelector('textarea').value
            };
            console.log(formData);
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});