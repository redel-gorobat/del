// Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Scroll Animation Observer (AOS-like functionality)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, observerOptions);

// Observe all elements with data-aos attribute
document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// Skills Progress Animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Run skill animation if on skills page
if (document.querySelector('.skill-progress')) {
    animateSkillBars();
}

// Project Gallery Functionality
const projectFolders = document.querySelectorAll('.project-folder');
const projectGallery = document.getElementById('project-gallery');
const projectFoldersContainer = document.getElementById('project-folders');
const closeGalleryBtn = document.getElementById('close-gallery');
const galleryTitle = document.getElementById('gallery-title');
const galleryGrid = document.getElementById('gallery-grid');
const categoryButtons = document.querySelectorAll('.category-btn');

// Folder click handler - Shows full gallery with images
projectFolders.forEach(folder => {
    folder.addEventListener('click', () => {
        const category = folder.getAttribute('data-folder');
        showGallery(category);
    });
});

// Category button handler
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-category');
        
        // Update active button
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter gallery items
        if (category === 'all') {
            document.querySelectorAll('.gallery-item').forEach(item => {
                item.style.display = 'block';
            });
        } else {
            document.querySelectorAll('.gallery-item').forEach(item => {
                if (item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    });
});

function showGallery(category) {
    // Hide folders, show gallery
    projectFoldersContainer.style.display = 'none';
    projectGallery.style.display = 'block';
    
    // Update title
    const titles = {
        'gui-ux': 'UI/UX Designs',
        'tshirt': 'T-shirt Designs',
        'graphic': 'Graphic Designs',
        'logo': 'Logo Designs'
    };
    galleryTitle.textContent = titles[category] || 'Projects';
    
    // Show only items from selected category
    document.querySelectorAll('.gallery-item').forEach(item => {
        if (item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
    // Scroll to gallery smoothly
    setTimeout(() => {
        projectGallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Close gallery handler
if (closeGalleryBtn) {
    closeGalleryBtn.addEventListener('click', () => {
        projectGallery.style.display = 'none';
        projectFoldersContainer.style.display = 'grid';
        
        // Reset category filter
        categoryButtons.forEach(btn => {
            if (btn.getAttribute('data-category') === 'all') {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Scroll back to folders
        window.scrollTo({ behavior: 'smooth', top: projectFoldersContainer.offsetTop - 100 });
    });
}

// Image lightbox/modal functionality - Click on image to view full size
document.querySelectorAll('.gallery-item .image-placeholder').forEach(placeholder => {
    placeholder.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (img && img.src && !img.src.includes('undefined')) {
            openImageModal(img.src, img.alt);
        }
    });
});

// Create and show image modal for full-size viewing
function openImageModal(imageSrc, imageAlt) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('image-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-modal';
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-backdrop"></div>
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <img src="" alt="" class="modal-image">
                <div class="modal-caption"></div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Close modal on backdrop click
        modal.querySelector('.modal-backdrop').addEventListener('click', closeImageModal);
        modal.querySelector('.modal-close').addEventListener('click', closeImageModal);
        
        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeImageModal();
            }
        });
    }
    
    // Set image and show modal
    const modalImg = modal.querySelector('.modal-image');
    const modalCaption = modal.querySelector('.modal-caption');
    modalImg.src = imageSrc;
    modalImg.alt = imageAlt;
    modalCaption.textContent = imageAlt;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    }
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Simulate form submission
        // In a real application, you would send this to a server
        console.log('Form submitted:', data);
        
        // Show success message
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
            formMessage.textContent = '';
        }, 5000);
        
        // In a real application, you might want to integrate with a service like:
        // - EmailJS
        // - Formspree
        // - Your own backend API
        /*
        // Example with EmailJS:
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data)
            .then(() => {
                formMessage.className = 'form-message success';
                formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
                contactForm.reset();
            })
            .catch(() => {
                formMessage.className = 'form-message error';
                formMessage.textContent = 'Sorry, there was an error sending your message. Please try again.';
            });
        */
    });
}

// Smooth scroll for anchor links
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

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
    }
    
    lastScroll = currentScroll;
});

// Profile image error handling
const profileImg = document.getElementById('profile-img');
if (profileImg) {
    profileImg.addEventListener('error', function() {
        this.style.display = 'none';
    });
    
    // Check if image src is set and valid
    if (!profileImg.src || profileImg.src.includes('undefined')) {
        profileImg.style.display = 'none';
    }
}

// Initialize animations on page load
window.addEventListener('load', () => {
    // Add animation class to elements that should animate on load
    document.querySelectorAll('[data-aos]').forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('aos-animate');
        }
    });
});

// Lazy load images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// Console welcome message
console.log('%c👋 Welcome to my portfolio!', 'font-size: 20px; font-weight: bold; color: #D97757;');
console.log('%cInterested in the code? Check out the source!', 'font-size: 14px; color: #666;');

// Prevent console errors for missing images
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.log('Image failed to load:', e.target.src);
        // Optionally set a placeholder
        // e.target.src = 'path/to/placeholder.jpg';
    }
}, true);

// Certificate Gallery Functionality
const certificateFolders = document.querySelectorAll('.certificate-folder');
const certificateGallery = document.getElementById('certificate-gallery');
const certificateFoldersContainer = document.getElementById('certificates-folders');
const closeCertificateGalleryBtn = document.getElementById('close-certificate-gallery');
const certificateGalleryTitle = document.getElementById('certificate-gallery-title');

// Folder click handler - Shows certificate gallery
if (certificateFolders.length > 0) {
    certificateFolders.forEach(folder => {
        folder.addEventListener('click', () => {
            const category = folder.getAttribute('data-folder');
            showCertificateGallery(category);
        });
    });
}

function showCertificateGallery(category) {
    if (!certificateGallery || !certificateFoldersContainer) return;
    
    // Hide folders, show gallery
    certificateFoldersContainer.style.display = 'none';
    certificateGallery.style.display = 'block';
    
    // Update title
    const titles = {
        'technical': 'Technical Certifications',
        'design': 'Design Certifications',
        'academic': 'Academic Achievements',
        'training': 'Professional Training',
        'work': 'Work Experience',
        'other': 'Other Achievements'
    };
    certificateGalleryTitle.textContent = titles[category] || 'Certificates';
    
    // Show only items from selected category
    document.querySelectorAll('.certificate-item').forEach(item => {
        if (item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
    // Scroll to gallery smoothly
    setTimeout(() => {
        certificateGallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Close certificate gallery handler
if (closeCertificateGalleryBtn) {
    closeCertificateGalleryBtn.addEventListener('click', () => {
        certificateGallery.style.display = 'none';
        certificateFoldersContainer.style.display = 'grid';
        
        // Scroll back to folders
        window.scrollTo({ behavior: 'smooth', top: certificateFoldersContainer.offsetTop - 100 });
    });
}

// Certificate image lightbox - Click on certificate to view full size
document.querySelectorAll('.certificate-item .certificate-image-wrapper').forEach(wrapper => {
    wrapper.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (img && img.src && !img.src.includes('undefined')) {
            openImageModal(img.src, img.alt);
        }
    });
});
