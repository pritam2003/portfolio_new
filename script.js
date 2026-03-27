const yearEl = document.querySelector("#year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const toggleBtn = document.querySelector("#theme-toggle");
const storageKey = "pritam-theme";
const prefersDark = window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedTheme = localStorage.getItem(storageKey);
const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

const applyTheme = (theme) => {
  document.body.dataset.theme = theme;
  if (toggleBtn) {
    const isDark = theme === "dark";
    toggleBtn.setAttribute("aria-pressed", String(isDark));
    toggleBtn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  }
};

applyTheme(initialTheme);

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
  });
}
