// Simple form validation and confirmation
document.getElementById('applyForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    // Check if name and email are filled
    if (!name || !email) {
        alert('Please fill in all required fields.');
    } else {
        alert('Thank you for applying, ' + name + '! We will get in touch with you soon.');
        document.getElementById('applyForm').reset();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navLinks = document.querySelector(".nav-links");  // This targets the nav links (corrected selector)

    // Toggle the mobile menu
    navbarToggler.addEventListener("click", function () {
        navLinks.classList.toggle("show");  // Toggle the visibility of the nav links
        navbarToggler.classList.toggle("active");  // Toggle the button's active state (show close icon)
    });

    // Close the mobile menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(item => {
        item.addEventListener("click", function () {
            if (navLinks.classList.contains("show")) {
                navLinks.classList.remove("show");
                navbarToggler.classList.remove("active");  // Reset hamburger to its original state
            }
        });
    });
});