// ===== SCROLL HEADER EFFECT =====
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.classList.add("shadow-2xl");
    } else {
        header.classList.remove("shadow-2xl");
    }
});

// ===== SMOOTH SCROLL FOR BUTTONS =====
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===== HERO BUTTONS ACTION =====
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.boxShadow = "0 0 25px rgba(0,210,255,0.4)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.boxShadow = "none";
    });
});
