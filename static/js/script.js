// ===============================
// ANIMACIÓN FADE IN AL HACER SCROLL
// ===============================

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


// ===============================
// NAVBAR EFECTO SCROLL
// ===============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-black/80", "backdrop-blur-md", "shadow-lg");
  } else {
    navbar.classList.remove("bg-black/80", "backdrop-blur-md", "shadow-lg");
  }
});


// ===============================
// SCROLL SUAVE PARA LINKS INTERNOS
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ===============================
// BOTÓN WHATSAPP FLOTANTE
// ===============================

const whatsappBtn = document.createElement("a");
whatsappBtn.href = "https://wa.me/51999999999"; // CAMBIA POR TU NÚMERO
whatsappBtn.target = "_blank";
whatsappBtn.innerHTML = "💬";
whatsappBtn.style.position = "fixed";
whatsappBtn.style.bottom = "20px";
whatsappBtn.style.right = "20px";
whatsappBtn.style.width = "60px";
whatsappBtn.style.height = "60px";
whatsappBtn.style.borderRadius = "50%";
whatsappBtn.style.background = "linear-gradient(45deg, #25D366, #128C7E)";
whatsappBtn.style.color = "white";
whatsappBtn.style.fontSize = "28px";
whatsappBtn.style.display = "flex";
whatsappBtn.style.alignItems = "center";
whatsappBtn.style.justifyContent = "center";
whatsappBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
whatsappBtn.style.zIndex = "999";
whatsappBtn.style.transition = "all 0.3s ease";

whatsappBtn.addEventListener("mouseenter", () => {
  whatsappBtn.style.transform = "scale(1.1)";
});

whatsappBtn.addEventListener("mouseleave", () => {
  whatsappBtn.style.transform = "scale(1)";
});

document.body.appendChild(whatsappBtn);


// ===============================
// EFECTO CONTADOR (SI LO USAS)
// ===============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 100;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
