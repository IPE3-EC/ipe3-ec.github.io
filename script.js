// Simple script for navbar toggle (mobile)
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav-links");
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "☰";
  toggleBtn.classList.add("toggle-btn");
  document.querySelector(".navbar").prepend(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
