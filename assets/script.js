// script.js

// Ensure the "READ MORE" button redirects to a new page
const readMoreButton = document.querySelector('.hero-content button');

if (readMoreButton) {
    readMoreButton.addEventListener('click', function() {
        window.location.href = 'blog-ai.html';
    });
}

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function () {
            nav.classList.toggle("active");
        });
    }
});
