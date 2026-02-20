// Configuración de Tailwind extendida
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#00d2ff",
                "accent-blue": "#0072ff",
                "deep-charcoal": "#0a0c10",
                "slate-dark": "#1a1f2e",
                "safety-yellow": "#facc15",
                "whatsapp": "#25D366"
            },
            fontFamily: {
                "display": ["Space Grotesk"]
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px"
            },
            animation: {
                marquee: "marquee 25s linear infinite",
                "ken-burns": "kenburns 20s ease infinite alternate",
                "pulse-soft": "pulse-soft 2s infinite"
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-50%)" }
                },
                kenburns: {
                    "0%": { transform: "scale(1) translate(0, 0)" },
                    "100%": { transform: "scale(1.1) translate(-2%, -2%)" }
                },
                "pulse-soft": {
                    "0%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.4)" },
                    "70%": { boxShadow: "0 0 0 15px rgba(37, 211, 102, 0)" },
                    "100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0)" }
                }
            }
        }
    }
};
document.addEventListener("DOMContentLoaded", function () {

    // ===== ANIMACIÓN SCROLL =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-show');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });


    // ===== ESTRELLAS TECNOLOGÍA AVANZADA =====
const canvas = document.getElementById("stars-canvas");
if (!canvas) return;

const ctx = canvas.getContext("2d");

let stars = [];
let mouse = { x: null, y: null };
const STAR_COUNT = 55; // menos carga
const CONNECT_DISTANCE = 140;
const MOUSE_RADIUS = 160;

function resizeCanvas() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
}

function createStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 1.2 + 0.4
        });
    }
}

canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});

canvas.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
});

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > canvas.width) star.vx *= -1;
        if (star.y < 0 || star.y > canvas.height) star.vy *= -1;

        // brillo sutil
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 210, 255, 0.6)";
        ctx.fill();
    });

    // conexiones entre estrellas
    for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
            let dx = stars[i].x - stars[j].x;
            let dy = stars[i].y - stars[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < CONNECT_DISTANCE) {
                ctx.beginPath();
                ctx.moveTo(stars[i].x, stars[i].y);
                ctx.lineTo(stars[j].x, stars[j].y);
                ctx.strokeStyle = `rgba(0, 210, 255, ${0.15 - distance / 900})`;
                ctx.lineWidth = 0.6;
                ctx.stroke();
            }
        }

        // conexión con el mouse
        if (mouse.x !== null) {
            let dx = stars[i].x - mouse.x;
            let dy = stars[i].y - mouse.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < MOUSE_RADIUS) {
                ctx.beginPath();
                ctx.moveTo(stars[i].x, stars[i].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = `rgba(0, 210, 255, ${0.3 - distance / 500})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(drawStars);
}

window.addEventListener("resize", () => {
    resizeCanvas();
    createStars();
});

resizeCanvas();
createStars();
drawStars();
