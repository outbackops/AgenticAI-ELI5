// ========================================
// Navigation and Smooth Scrolling
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeMermaid();
    initializeSmoothScrolling();
    highlightActiveSection();
});

/**
 * Initialize navigation functionality
 */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Scroll to section
            if (targetSection) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Initialize Mermaid diagrams
 */
function initializeMermaid() {
    if (typeof mermaid !== 'undefined') {
        mermaid.initialize({
            startOnLoad: true,
            theme: 'default',
            themeVariables: {
                primaryColor: '#0078d4',
                primaryTextColor: '#fff',
                primaryBorderColor: '#005a9e',
                lineColor: '#005a9e',
                secondaryColor: '#00c853',
                tertiaryColor: '#f5f5f5',
                fontSize: '16px'
            },
            flowchart: {
                curve: 'basis',
                padding: 20
            },
            securityLevel: 'loose'
        });
    }
}

/**
 * Initialize smooth scrolling for all anchor links
 */
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        // Skip if already has click handler
        if (link.classList.contains('nav-links')) return;
        
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = target.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/**
 * Highlight active section in navigation based on scroll position
 */
function highlightActiveSection() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const navHeight = document.querySelector('nav').offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Add animation on scroll for module cards
 */
function addScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    const cards = document.querySelectorAll('.module-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', addScrollAnimations);

/**
 * Copy code to clipboard functionality
 */
function addCopyCodeButtons() {
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        const wrapper = block.parentElement;
        const button = document.createElement('button');
        button.className = 'copy-button';
        button.textContent = '📋 Copy';
        button.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 5px 10px;
            background: #0078d4;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9rem;
        `;
        
        wrapper.style.position = 'relative';
        wrapper.appendChild(button);
        
        button.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent).then(() => {
                button.textContent = '✅ Copied!';
                setTimeout(() => {
                    button.textContent = '📋 Copy';
                }, 2000);
            });
        });
    });
}

// Add copy buttons after DOM is loaded
document.addEventListener('DOMContentLoaded', addCopyCodeButtons);

/**
 * Mobile menu toggle (if needed for smaller screens)
 */
function initializeMobileMenu() {
    const nav = document.querySelector('nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            return;
        }
        
        if (currentScroll > lastScroll) {
            // Scrolling down
            nav.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            nav.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });
}

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', initializeMobileMenu);

/**
 * Add loading state for diagrams
 */
function handleDiagramLoading() {
    const diagrams = document.querySelectorAll('.mermaid');
    
    diagrams.forEach(diagram => {
        diagram.style.minHeight = '200px';
        diagram.style.display = 'flex';
        diagram.style.alignItems = 'center';
        diagram.style.justifyContent = 'center';
    });
}

document.addEventListener('DOMContentLoaded', handleDiagramLoading);

/**
 * Print page functionality
 */
function printPage() {
    window.print();
}

/**
 * Scroll to top button
 */
function addScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #0078d4;
        color: white;
        border: none;
        font-size: 24px;
        cursor: pointer;
        display: none;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
}

document.addEventListener('DOMContentLoaded', addScrollToTopButton);
