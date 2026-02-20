/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

/* ================= NAVBAR SCROLL EFFECT ================= */
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("nav-scrolled");
    } else {
        header.classList.remove("nav-scrolled");
    }
});

/* ================= FADE IN ON LOAD ================= */
window.addEventListener("load", () => {
    document.body.classList.add("fade-in");
});
