console.log("JS is running");

document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navLinks = document.querySelector(".nav-links");

    if (navbarToggler && navLinks) {
        navbarToggler.addEventListener("click", function () {
            navLinks.classList.toggle("show");
            navbarToggler.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("show");
                navbarToggler.classList.remove("active");
            });
        });
    }
});

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
