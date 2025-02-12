// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check if user has a saved theme preference
if (localStorage.getItem("theme") ==="dark") {
    body.classList.add("dark-mode");
} 

//Toggle Dark Mode and Save Preference
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save to LocalStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Back to Top Button
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }
    });

    // Smooth Scroll to Top
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});