// menu.js - Handles mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.navigator-header');
    const overlay = document.querySelector('.menu-overlay');
    const closeLinks = document.querySelectorAll('[data-close-menu]');

    // Toggle menu and overlay when hamburger clicked
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    // Clicking overlay closes menu
    overlay.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Clicking any nav link with data-close-menu closes menu
    closeLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
});