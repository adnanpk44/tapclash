// ============================================
// SMOOTH SCROLLING AND NAVIGATION
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// BUTTON CLICK HANDLERS
// ============================================

const downloadButtons = document.querySelectorAll('.btn-primary, .btn-apple, .btn-google');

downloadButtons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        if (buttonText.includes('App Store')) {
            window.open('https://apps.apple.com', '_blank');
        } else if (buttonText.includes('Google Play') || buttonText.includes('Google')) {
            window.open('https://play.google.com', '_blank');
        } else {
            console.log('Download button clicked');
        }
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards, game mode cards, and tech items
document.querySelectorAll('.feature-card, .mode-card, .tech-item, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// NAVIGATION BAR STYLING ON SCROLL
// ============================================

const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        navbar.style.borderBottomColor = 'rgba(0, 180, 255, 0.3)';
    } else {
        navbar.style.borderBottomColor = 'var(--border-color)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============================================
// COUNTER ANIMATION
// ============================================

function animateCounters() {
    const counterElements = document.querySelectorAll('.taps');
    
    counterElements.forEach(element => {
        const target = parseInt(element.textContent);
        let current = 0;
        const increment = Math.ceil(target / 50);
        
        const counter = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(counter);
            } else {
                element.textContent = current;
            }
        }, 20);
    });
}

// Trigger animation when hero section is in view
window.addEventListener('load', function() {
    const hero = document.querySelector('.hero');
    if (hero) {
        observer.observe(hero);
    }
    animateCounters();
});

// ============================================
// HOVER EFFECTS
// ============================================

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ============================================
// RESPONSIVE NAVIGATION TOGGLE
// ============================================

// Add mobile menu toggle if needed
const navLinks = document.querySelector('.nav-links');
if (window.innerWidth <= 768 && navLinks) {
    navLinks.style.display = 'none';
}

window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        if (navLinks) navLinks.style.display = 'none';
    } else {
        if (navLinks) navLinks.style.display = 'flex';
    }
});

// ============================================
// PARALLAX EFFECT (Optional)
// ============================================

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroGraphic = document.querySelector('.hero-graphic');
    
    if (heroGraphic) {
        heroGraphic.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ============================================
// FORM VALIDATION (if contact form is added)
// ============================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.type === 'email' && !validateEmail(input.value)) {
            isValid = false;
            input.style.borderColor = 'var(--primary-red)';
        } else if (input.value.trim() === '') {
            isValid = false;
            input.style.borderColor = 'var(--primary-red)';
        } else {
            input.style.borderColor = 'transparent';
        }
    });
    
    return isValid;
}

// ============================================
// SMOOTH PAGE LOAD
// ============================================

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', function(event) {
    // Press 'H' to scroll to home
    if (event.key === 'h' || event.key === 'H') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Press 'F' to scroll to features
    if (event.key === 'f' || event.key === 'F') {
        const features = document.querySelector('#features');
        if (features) {
            features.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});

// ============================================
// DYNAMIC YEAR IN FOOTER
// ============================================

const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText && footerText.textContent.includes('2026')) {
    footerText.textContent = `© ${currentYear} TapClash. All rights reserved.`;
}
