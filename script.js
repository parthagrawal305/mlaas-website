/**
 * MLAAS - Premier Asset Restructuring Services
 * Interactive functionality
 */

document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initNavigation();
    initMobileMenu();
    initParticles();
    initScrollAnimations();
    initCounters();
    initFAQ();
    initContactForm();
});

/**
 * Preloader
 */
function initPreloader() {
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.style.overflow = '';
        }, 2000);
    });
    
    // Fallback in case load event already fired
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = '';
    }, 3000);
}

/**
 * Navigation scroll behavior
 */
function initNavigation() {
    const nav = document.getElementById('nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add scrolled class
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                const navToggle = document.getElementById('nav-toggle');
                mobileMenu.classList.remove('active');
                navToggle.classList.remove('active');
                
                // Scroll to target
                const offset = 100;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
}

/**
 * Floating particles in hero section
 */
function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random starting position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    
    // Random size
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random animation duration and delay
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * 10;
    particle.style.animationDuration = duration + 's';
    particle.style.animationDelay = delay + 's';
    
    container.appendChild(particle);
}

/**
 * Scroll-triggered animations
 */
function initScrollAnimations() {
    // Elements to animate
    const animateElements = document.querySelectorAll(
        '.service-card, .process-step, .stat-item, .testimonial-card, .pricing-card, .faq-item, .security-features li'
    );
    
    // Add animation class
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });
    
    // Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    animateElements.forEach(el => observer.observe(el));
}

/**
 * Animated counters
 */
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    const easeOutQuad = t => t * (2 - t);
    
    let frame = 0;
    const counter = setInterval(() => {
        frame++;
        const progress = easeOutQuad(frame / totalFrames);
        const currentCount = Math.round(target * progress);
        
        element.textContent = currentCount.toLocaleString();
        
        if (frame === totalFrames) {
            clearInterval(counter);
            element.textContent = target.toLocaleString();
        }
    }, frameDuration);
}

/**
 * FAQ Accordion
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other items
            faqItems.forEach(other => {
                other.classList.remove('active');
            });
            
            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

/**
 * Contact Form
 */
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = `
            <span>Processing securely...</span>
            <svg class="spinner" width="20" height="20" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="40" stroke-dashoffset="10">
                    <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
                </circle>
            </svg>
        `;
        submitBtn.disabled = true;
        
        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            // Send to Vercel serverless function, which will talk to Notion
            const apiRes = await fetch('/api/notion-submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    volume: data.amount,
                    brief: data.message || ''
                })
            });

            const apiData = await apiRes.json();

            if (!apiRes.ok) {
                console.error('API error:', apiData);
                alert('Something went wrong while securing your inquiry. Please try again or contact us directly.');
            } else {
                // Use short ticket-style reference ID coming from the server, e.g. "#REQ-A12324"
                const refId =
                    apiData.ticketId ||
                    '#REQ-' +
                        String.fromCharCode(65 + Math.floor(Math.random() * 26)) +
                        Math.floor(10000 + Math.random() * 90000);

                // Show success modal
                showModal(refId);

                // Reset form
                form.reset();
            }
        } catch (err) {
            console.error('Unexpected error submitting to Notion:', err);
            alert('Network issue while sending your inquiry. Please try again.');
        } finally {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

/**
 * Show success modal
 */
function showModal(refId) {
    const modal = document.getElementById('success-modal');
    const refIdElement = document.getElementById('ref-id');
    
    if (refIdElement) {
        refIdElement.textContent = refId;
    }
    
    modal.classList.add('active');
    
    // Close modal on overlay click
    const overlay = modal.querySelector('.modal-overlay');
    overlay.addEventListener('click', closeModal);
}

/**
 * Close modal
 */
function closeModal() {
    const modal = document.getElementById('success-modal');
    modal.classList.remove('active');
}

// Make closeModal available globally for onclick handler
window.closeModal = closeModal;

/**
 * Utility: Throttle function
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Utility: Debounce function
 */
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

/**
 * Easter egg: Konami code
 */
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateEasterEgg() {
    document.body.style.transition = 'filter 0.5s ease';
    document.body.style.filter = 'hue-rotate(180deg)';
    
    setTimeout(() => {
        document.body.style.filter = '';
    }, 3000);
    
    console.log('🧼💰 You found the secret! The first rule of MLAAS is: you don\'t talk about MLAAS.');
}

