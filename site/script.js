/* ---------- Theme: light / dark / system ---------- */
const THEME_KEY = "asharp-theme-preference";

function resolveTheme(pref) {
  if (pref === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return pref;
}

function applyTheme(pref) {
  const resolved = resolveTheme(pref);
  document.documentElement.setAttribute("data-theme", resolved);
  document.documentElement.setAttribute("data-theme-pref", pref);
}

(function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || "system";
  applyTheme(saved);
})();

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    const pref = localStorage.getItem(THEME_KEY) || "system";
    if (pref === "system") applyTheme("system");
  });

function cycleTheme() {
  const order = ["light", "dark", "system"];
  const current = localStorage.getItem(THEME_KEY) || "system";
  const next = order[(order.indexOf(current) + 1) % order.length];
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
  updateThemeIcon(next);
}

function updateThemeIcon(pref) {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  btn.querySelectorAll("svg").forEach((s) => (s.style.display = "none"));
  const icon = btn.querySelector(`[data-icon="${pref}"]`);
  if (icon) icon.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const pref = localStorage.getItem(THEME_KEY) || "system";
  updateThemeIcon(pref);
  const themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) themeBtn.addEventListener("click", cycleTheme);
});

/* ---------- Centered pill menu + compact dropdown panel ---------- */
const menuToggle = document.getElementById("menu-toggle");
const navOverlay = document.getElementById("nav-overlay");
const navBackdrop = document.getElementById("nav-backdrop");

function closeMenu() {
  navOverlay.classList.remove("open");
  menuToggle.classList.remove("open");
  navBackdrop.classList.remove("open");
}

function openMenu() {
  navOverlay.classList.add("open");
  menuToggle.classList.add("open");
  navBackdrop.classList.add("open");
}

if (menuToggle && navOverlay && navBackdrop) {
  menuToggle.addEventListener("click", () => {
    navOverlay.classList.contains("open") ? closeMenu() : openMenu();
  });
  navBackdrop.addEventListener("click", closeMenu);
  navOverlay.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

/* ---------- Scroll-reveal ---------- */
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
  { threshold: 0.15 },
);
revealEls.forEach((el) => revealObserver.observe(el));

/* ---------- Terminal typing animation ---------- */
function typeInto(el, lines, speed = 18) {
  let text = "";
  let lineIndex = 0;
  let charIndex = 0;
  function step() {
    if (lineIndex >= lines.length) return;
    const currentLine = lines[lineIndex];
    if (charIndex < currentLine.length) {
      text += currentLine[charIndex];
      el.textContent = text;
      charIndex++;
      setTimeout(step, speed);
    } else {
      text += "\n";
      el.textContent = text;
      lineIndex++;
      charIndex = 0;
      setTimeout(step, speed * 4);
    }
  }
  step();
}

const createLines = [
  "$ asharp create",
  "A# Create",
  "Project name",
  "> my-app",
  "",
  "Creating my-app...",
  "✓ Created project",
  "✓ Installed dependencies",
  "✓ Initialized Git",
  "",
  "Ready.",
];
const devLines = [
  "$ asharp dev",
  "A# 0.1.0",
  "✓ Application loaded",
  "✓ 3 routes",
  "✓ 4 components",
  "",
  "Local: http://localhost:9999",
  "ready in 142ms",
];

const termCreate = document.getElementById("term-create");
const termDev = document.getElementById("term-dev");
if (termCreate || termDev) {
  const terminalObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (termCreate) typeInto(termCreate, createLines);
          if (termDev) typeInto(termDev, devLines, 20);
          terminalObserver.disconnect();
        }
      });
    },
    { threshold: 0.3 },
  );
  terminalObserver.observe(termCreate || termDev);
}

/* ---------- Copy hex to clipboard (Brand page) ---------- */
document.querySelectorAll(".copy-hex").forEach((btn) => {
  btn.addEventListener("click", () => {
    const hex = btn.dataset.hex;
    navigator.clipboard.writeText(hex).then(() => {
      const original = btn.textContent;
      btn.textContent = "Copied";
      setTimeout(() => (btn.textContent = original), 1200);
    });
  });
});
