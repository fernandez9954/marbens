// ========================
// Custom Cursor
// ========================
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animate cursor
function animateCursor() {
    // Smooth cursor following
    const speed = 0.2;

    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    if (cursor && cursorFollower) {
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';

        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
    }

    requestAnimationFrame(animateCursor);
}

animateCursor();

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .work-item-image');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursorFollower.classList.add('hover');
    });

    element.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('hover');
    });
});

// ========================
// Navigation
// ========================
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Animate hamburger
        const spans = navToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ========================
// Smooth Scroll
// ========================
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

// ========================
// Intersection Observer for Animations
// ========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe work items
const workItems = document.querySelectorAll('.work-item');
workItems.forEach(item => {
    observer.observe(item);
});

// Observe capability items
const capabilityItems = document.querySelectorAll('.capability-item');
capabilityItems.forEach(item => {
    observer.observe(item);
});

// ========================
// Lightbox Functionality
// ========================
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('.lightbox-image');
const lightboxTitle = lightbox.querySelector('.lightbox-title');
const lightboxCategory = lightbox.querySelector('.lightbox-category');
const lightboxClose = lightbox.querySelector('.lightbox-close');
const lightboxPrev = lightbox.querySelector('.lightbox-prev');
const lightboxNext = lightbox.querySelector('.lightbox-next');

let currentImageIndex = 0;
let imagesData = [];

// Collect all work items data
workItems.forEach((item, index) => {
    const img = item.querySelector('.work-item-image img');
    const title = item.querySelector('.work-item-title').textContent;
    const category = item.querySelector('.work-item-category').textContent;

    imagesData.push({
        src: img.src,
        alt: img.alt,
        title: title,
        category: category
    });

    // Add click event to open lightbox
    item.querySelector('.work-item-image').addEventListener('click', () => {
        openLightbox(index);
    });
});

function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightboxContent() {
    const data = imagesData[currentImageIndex];
    lightboxImage.src = data.src;
    lightboxImage.alt = data.alt;
    lightboxTitle.textContent = data.title;
    lightboxCategory.textContent = data.category;
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + imagesData.length) % imagesData.length;
    updateLightboxContent();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % imagesData.length;
    updateLightboxContent();
}

// Event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrevImage);
lightboxNext.addEventListener('click', showNextImage);

// Close on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        showPrevImage();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    }
});

// ========================
// Parallax Effect
// ========================
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;

    if (hero) {
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        hero.style.opacity = 1 - (scrolled / 800);
    }
});

// ========================
// Number Counter Animation
// ========================
const statNumbers = document.querySelectorAll('.stat-number');

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const text = target.textContent;
            const number = parseInt(text);

            if (isNaN(number)) return;

            let current = 0;
            const increment = number / 50;
            const duration = 1500;
            const stepTime = duration / 50;

            const timer = setInterval(() => {
                current += increment;
                if (current >= number) {
                    target.textContent = text;
                    clearInterval(timer);
                } else {
                    target.textContent = Math.floor(current) + text.replace(number, '');
                }
            }, stepTime);

            counterObserver.unobserve(target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    counterObserver.observe(stat);
});

// ========================
// Image Lazy Loading
// ========================
const images = document.querySelectorAll('img[src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;

            // Only fade in if image hasn't loaded yet
            if (!img.complete) {
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';

                img.onload = () => {
                    img.style.opacity = '1';
                };
            } else {
                // Image already loaded, ensure it's visible
                img.style.opacity = '1';
            }

            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// ========================
// Capability Cards Stagger Animation
// ========================
const capabilityCards = document.querySelectorAll('.capability-item');

capabilityCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
});

const capabilityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

capabilityCards.forEach(card => {
    capabilityObserver.observe(card);
});

// ========================
// Magnetic Button Effect
// ========================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) translateY(-3px)`;
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
    });
});

// ========================
// Performance Optimization
// ========================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ========================
// Loading Animation
// ========================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Trigger hero animations
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
});

// ========================
// Enhanced Scroll Progress Indicator
// ========================
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #2962ff, #00bcd4);
    z-index: 9999;
    transform-origin: left;
    transition: transform 0.1s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', debounce(() => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    scrollProgress.style.transform = `scaleX(${scrollPercent / 100})`;
}, 10));

// ========================
// Console Easter Egg
// ========================
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #2962ff;');
console.log('%cLooking for a designer? Let\'s talk!', 'font-size: 14px; color: #666;');
console.log('%c📧 marbensalexandre@gmail.com', 'font-size: 14px; color: #2962ff;');
console.log('%cMade by Franklin Fernandez', 'font-size: 14px; color: rgba(255, 41, 41, 1);');
