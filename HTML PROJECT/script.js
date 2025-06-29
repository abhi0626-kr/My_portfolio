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
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Smooth Scrolling for Anchor Links
   // Animation on Scroll with Popup
function animateOnScroll() {
    const elements = document.querySelectorAll('.about-content, .service-card, .portfolio-item, .contact-content');
    const popup = document.getElementById('scroll-popup'); // Make sure you have this element in your HTML
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });

    // Show popup after scrolling 60% of page height
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / pageHeight) * 100;

    if (scrollPercentage > 60 && !localStorage.getItem('popupShown')) {
        popup.style.display = 'block';
        localStorage.setItem('popupShown', 'true');
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            popup.style.display = 'none';
        }, 5000);
    }
}

// Initialize event listeners
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Close popup functionality (add this to your HTML)
document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.getElementById('close-popup');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            document.getElementById('scroll-popup').style.display = 'none';
        });
    }
});

document.addEventListener('mousemove', function(e) {
  const images = document.querySelectorAll('.popup-image');
  
  // Reset all images
  images.forEach(img => {
    img.classList.remove('active');
  });
  
  // Randomly select an image to activate
  const randomImg = images[Math.floor(Math.random() * images.length)];
  
  // Position and activate the image
  randomImg.style.left = (e.clientX - 75) + 'px'; // Center on cursor
  randomImg.style.top = (e.clientY - 75) + 'px';
  randomImg.classList.add('active');
  
  // Auto-hide after 1 second
  setTimeout(() => {
    randomImg.classList.remove('active');
  }, 1000);
});

    // Form Submission
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const subject = this.querySelector('input[type="text"]').value;
            const message = this.querySelector('textarea').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just log it and show an alert
            console.log({ name, email, subject, message });
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset the form
            this.reset();
        });
    }
    
    // Animation on Scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.about-content, .service-card, .portfolio-item, .contact-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for animation
    document.querySelectorAll('.about-content, .service-card, .portfolio-item, .contact-content').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});