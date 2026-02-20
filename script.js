// =============================
// MENU RESPONSIVE (Toggle)
// =============================

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}


// =============================
// ACTIVAR LINK ACTUAL
// =============================

document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "#00b4d8";
            link.style.fontWeight = "700";
        }
    });

});


// =============================
// SCROLL SUAVE
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// =============================
// ANIMACIÓN AL HACER SCROLL
// =============================

window.addEventListener("scroll", function () {

    const elements = document.querySelectorAll("section");

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });

});

// Estilo inicial para animación
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    sections.forEach(sec => {
        sec.style.opacity = "0";
        sec.style.transform = "translateY(40px)";
        sec.style.transition = "all 0.6s ease";
    });
});
