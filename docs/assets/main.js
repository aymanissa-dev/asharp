// Theme: load saved preference, default to dark
(function initTheme() {
  const saved = localStorage.getItem("asharp-theme");
  const theme = saved || "dark";
  document.documentElement.setAttribute("data-theme", theme);
})();

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("asharp-theme", next);
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) toggleBtn.addEventListener("click", toggleTheme);
});

// Scroll-reveal
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 },
);
revealEls.forEach((el) => revealObserver.observe(el));

// Hero glow follows cursor
const glow = document.getElementById("glow");
const hero = document.querySelector(".hero");
if (glow && hero) {
  hero.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    glow.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// Docs dropdown (if present on a page)
document.querySelectorAll(".dropdown > button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const dropdown = btn.parentElement;
    document.querySelectorAll(".dropdown.open").forEach((d) => {
      if (d !== dropdown) d.classList.remove("open");
    });
    dropdown.classList.toggle("open");
  });
});
document.addEventListener("click", () => {
  document
    .querySelectorAll(".dropdown.open")
    .forEach((d) => d.classList.remove("open"));
});
