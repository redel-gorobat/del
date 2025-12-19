// ===========================
// Navigation Menu Toggle
// ===========================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on nav links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ===========================
// Smart Scroll Navigation
// ===========================
const navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Prevent negative scrolling (mobile bounce)
    if (scrollTop < 0) return;

    if (scrollTop > lastScrollTop && scrollTop > 50) {
        // SCROLLING DOWN -> HIDE Navbar
        navbar.classList.add('nav-hidden');
    } else {
        // SCROLLING UP -> SHOW Navbar
        navbar.classList.remove('nav-hidden');
    }
    
    // Optional: Add background if not at the very top
    if (scrollTop > 50) {
        navbar.classList.add('scrolled-bg');
    } else {
        navbar.classList.remove('scrolled-bg');
    }

    lastScrollTop = scrollTop;
});

// ===========================
// Back to Top Button
// ===========================
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===========================
// Smooth Scrolling for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Project Filter Functionality
// ===========================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    if (card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// ===========================
// Contact Form Handling
// ===========================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitButton.innerHTML;
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

        // Get form data
        const formData = new FormData(contactForm);
        
        // Send to Formspree
        fetch('https://formspree.io/f/xjgbblwq', {  // <--- PASTE YOUR LINK HERE
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showFormMessage('Thank you! Your message has been sent successfully.', 'success');
                contactForm.reset();
            } else {
                return response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        showFormMessage(data["errors"].map(error => error["message"]).join(", "), 'error');
                    } else {
                        showFormMessage('Oops! There was a problem submitting your form.', 'error');
                    }
                });
            }
        })
        .catch(error => {
            showFormMessage('Oops! There was a problem submitting your form.', 'error');
        })
        .finally(() => {
            // Reset button
            submitButton.disabled = false;
            submitButton.innerHTML = originalBtnText;
        });
    });
}

function showFormMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
            formMessage.className = 'form-message';
        }, 5000);
    }
}

// ===========================
// Scroll Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-card, .project-card, .certificate-card, .education-card, .achievement-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// ===========================
// Progress Bar Animation
// ===========================
const progressBars = document.querySelectorAll('.progress-fill');

if (progressBars.length > 0) {
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                progressObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

// ===========================
// Dynamic Year in Footer
// ===========================
const updateYear = () => {
    const yearElements = document.querySelectorAll('.footer p');
    const currentYear = new Date().getFullYear();
    
    yearElements.forEach(el => {
        if (el.textContent.includes('2024')) {
            el.textContent = el.textContent.replace('2024', currentYear);
        }
    });
};

updateYear();

// ===========================
// Parallax Effect for Hero Section
// ===========================
const heroSection = document.querySelector('.hero');

if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = heroSection.querySelector('.hero-content');
        
        if (parallax && scrolled < window.innerHeight) {
            parallax.style.transform = `translateY(${scrolled * 0.4}px)`;
            parallax.style.opacity = 1 - (scrolled / 500);
        }
    });
}

// ===========================
// Typing Effect for Hero Title (Optional)
// ===========================
const heroTitle = document.querySelector('.hero-title');

if (heroTitle && heroTitle.hasAttribute('data-typing')) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    typeWriter();
}

// ===========================
// Active Navigation Link Highlighting
// ===========================
const sections = document.querySelectorAll('section[id]');

const highlightNav = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightNav);

// ===========================
// Loading Animation
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Console Message
// ===========================
console.log('%cWelcome to my Portfolio!', 'color: #8b5cf6; font-size: 20px; font-weight: bold;');
console.log('%cDesigned and Developed by Redel Gorobat', 'color: #a78bfa; font-size: 14px;');
console.log('%cEmail: redelgorobat@gmail.com', 'color: #b8b8b8; font-size: 12px;');