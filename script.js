// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));

    // Add animation classes to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.classList.add('fade-in');
        section.style.animationDelay = `${index * 0.1}s`;
    });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});

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

// Form validation (for contact forms)
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
            
            // Remove error class on input
            field.addEventListener('input', () => {
                field.classList.remove('error');
            });
        }
    });
    
    return isValid;
}

// Email validation helper
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add loading states for buttons (skip buttons inside forms that submit to an external service)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Skip submit buttons inside forms with an action (e.g. Formspree)
        const parentForm = this.closest('form');
        if (parentForm && parentForm.getAttribute('action')) return;

        if (this.tagName === 'BUTTON' || this.getAttribute('type') === 'submit') {
            if (!this.classList.contains('no-loading')) {
                this.classList.add('loading');
                this.disabled = true;
                
                setTimeout(() => {
                    this.classList.remove('loading');
                    this.disabled = false;
                }, 3000);
            }
        }
    });
});

// Parallax effect for hero section (optional)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent && heroImage) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Counter animation for statistics (if needed)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Initialize counters when they come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

// Observe counter elements
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => counterObserver.observe(counter));
});

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add hover effects for cards
document.querySelectorAll('.card, .challenge-card, .pillar-card, .learning-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Hero Image Slideshow
(function() {
    const slideshow = document.querySelector('.hero-slideshow');
    if (!slideshow) return;
    const slides = slideshow.querySelectorAll('img');
    if (slides.length <= 1) return;
    let current = 0;
    setInterval(() => {
        slides[current].classList.remove('slide-active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('slide-active');
    }, 4000);
})();

// Search Bar — slide down below nav
(function() {
    var searchToggle = document.getElementById('searchToggle');
    var searchBar = document.getElementById('searchBar');
    var searchInput = document.getElementById('searchInput');
    var searchDropdown = document.getElementById('searchDropdown');
    if (!searchToggle || !searchBar || !searchInput || !searchDropdown) return;

    var pages = [
        { title: 'Home', url: 'index.html', keywords: 'home education regenerative agriculture natural building cultural wisdom wellbeing bhutan school' },
        { title: 'About Jamyang Ecoversity', url: 'about.html', keywords: 'about story vision mission values founder regeneration rootedness community stewardship approach' },
        { title: 'Learning & Programs', url: 'programs.html', keywords: 'programs learning areas agriculture food systems natural building traditional knowledge holistic wellbeing livelihoods enterprise stewardship technology leadership foundational certificate' },
        { title: 'Campus & Model', url: 'campus.html', keywords: 'campus infrastructure farm garden building workshop accommodation kitchen governance phases design' },
        { title: 'Impact', url: 'impact.html', keywords: 'impact outcomes stories measurement growing' },
        { title: 'Get Involved', url: 'get-involved.html', keywords: 'get involved learner support donate partner volunteer expertise contribute scholarship' },
        { title: 'Contact', url: 'contact.html', keywords: 'contact email phone address message form reach' }
    ];

    var isOpen = false;

    function openSearch() {
        if (isOpen) return;
        isOpen = true;
        searchBar.classList.add('open');
        // After slide animation, allow dropdown to overflow
        setTimeout(function() {
            searchBar.classList.add('show-dropdown');
            searchInput.focus();
        }, 320);
    }

    function closeSearch() {
        if (!isOpen) return;
        isOpen = false;
        searchBar.classList.remove('show-dropdown');
        searchDropdown.classList.remove('visible');
        searchDropdown.innerHTML = '';
        searchInput.value = '';
        searchInput.blur();
        // Small delay so overflow:hidden kicks in before slide closes
        setTimeout(function() {
            searchBar.classList.remove('open');
        }, 10);
    }

    // Toggle bar
    searchToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        if (isOpen) {
            closeSearch();
        } else {
            openSearch();
        }
    });

    // Filter on typing
    searchInput.addEventListener('input', function() {
        var query = this.value.trim().toLowerCase();
        searchDropdown.innerHTML = '';
        if (query.length < 2) {
            searchDropdown.classList.remove('visible');
            return;
        }
        var matches = pages.filter(function(p) {
            return p.title.toLowerCase().indexOf(query) !== -1 || p.keywords.indexOf(query) !== -1;
        });
        if (matches.length === 0) {
            searchDropdown.innerHTML = '<p class="search-no-results">No results found.</p>';
        } else {
            matches.forEach(function(p) {
                var a = document.createElement('a');
                a.href = p.url;
                a.className = 'search-result-item';
                a.innerHTML = '<h4>' + p.title + '</h4><p>' + p.url + '</p>';
                searchDropdown.appendChild(a);
            });
        }
        searchDropdown.classList.add('visible');
    });

    // Escape to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeSearch();
    });

    // Click outside to close
    document.addEventListener('click', function(e) {
        if (isOpen && !searchBar.contains(e.target) && e.target !== searchToggle && !searchToggle.contains(e.target)) {
            closeSearch();
        }
    });
})();

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Add active state to current page navigation
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });
    
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = `all 0.6s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100);
    });
});
