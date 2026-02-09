// scroll.js - Handles smooth scrolling to sections
document.addEventListener('DOMContentLoaded', () => {
    // All elements with a data-scroll-to attribute
    const scrollElements = document.querySelectorAll('[data-scroll-to]');
    
    scrollElements.forEach(el => {
        el.addEventListener('click', event => {
            event.preventDefault(); // prevent default anchor behavior if any
            
            let targetId = el.dataset.scrollTo; // get the target id
            let targetElement;
            
            if (targetId) {
                targetElement = document.getElementById(targetId);
            } else if (el.getAttribute('href')) {
                targetElement = document.querySelector(el.getAttribute('href'));
            }
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});