
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Close menu");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open menu");
    }
});

document.querySelectorAll(".navbar a").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open menu");
    });
});

document.getElementById("year").textContent = new Date().getFullYear();
