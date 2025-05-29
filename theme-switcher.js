/**
 * Webflow Dark/Light Theme Switcher
 * -----------------------------------
 * Automatically sets theme based on user or system preference.
 * Supports toggle button, direct theme buttons, custom text, background, link, icon, and image styles.
 *
 * ✅ HOW TO USE — Custom Attributes:
 * -----------------------------------
 * [data-theme-toggle]       → Toggle button
 * [data-set-theme="dark"]   → Directly switch to dark theme
 * [data-set-theme="light"]  → Directly switch to light theme
 * [data-theme-text]         → Dynamic text color; optional: use [data-dark="#fff"] / [data-light="#000"]
 * [data-theme-bg]           → Dynamic background color; optional: use [data-dark="#000"] / [data-light="#fff"]
 * [data-theme-link]         → Dynamic link color; optional: use [data-dark="#ccc"] / [data-light="#333"]
 * [data-icon="dark"]        → Show in dark mode only
 * [data-icon="light"]       → Show in light mode only
 * [data-theme-img="dark"]   → Show image in dark mode only
 * [data-theme-img="light"]  → Show image in light mode only
 */

Webflow.push(function () {
  const root = document.body;

  const userPref = localStorage.getItem("theme");
  const systemPref = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = userPref || (systemPref ? "dark" : "light");
  root.setAttribute("data-theme", theme);

  applyTheme(theme);

  // Listen for system theme changes (if no manual override is set)
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    if (!localStorage.getItem("theme")) {
      const newTheme = e.matches ? "dark" : "light";
      root.setAttribute("data-theme", newTheme);
      applyTheme(newTheme);
    }
  });

  function toggleTheme() {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  }

  function applyTheme(theme) {
    updateIcons(theme);
    updateTextColors(theme);
    updateBackgrounds(theme);
    updateLinkColors(theme);
    updateImages(theme);
    updateActiveButtons(theme);
  }

  function updateIcons(theme) {
    const darkIcons = document.querySelectorAll("[data-icon='dark']");
    const lightIcons = document.querySelectorAll("[data-icon='light']");

    darkIcons.forEach(icon => {
      icon.style.opacity = theme === "dark" ? "1" : "0";
      icon.style.transform = theme === "dark" ? "scale(1)" : "scale(0.8)";
      icon.style.pointerEvents = theme === "dark" ? "auto" : "none";
    });

    lightIcons.forEach(icon => {
      icon.style.opacity = theme === "light" ? "1" : "0";
      icon.style.transform = theme === "light" ? "scale(1)" : "scale(0.8)";
      icon.style.pointerEvents = theme === "light" ? "auto" : "none";
    });
  }

  function applyColor(el, theme, type) {
    const customColor = el.getAttribute(`data-${theme}`);
    if (customColor) {
      el.style[type] = customColor;
    } else {
      if (type === "color") el.style.color = theme === "dark" ? "#ffffff" : "#000000";
      if (type === "backgroundColor") el.style.backgroundColor = theme === "dark" ? "#000000" : "#ffffff";
    }
    el.style.transition = `${type} 0.3s ease`;
  }

  function updateTextColors(theme) {
    document.querySelectorAll("[data-theme-text]").forEach(el => applyColor(el, theme, "color"));
  }

  function updateBackgrounds(theme) {
    document.querySelectorAll("[data-theme-bg]").forEach(el => applyColor(el, theme, "backgroundColor"));
  }

  function updateLinkColors(theme) {
    document.querySelectorAll("[data-theme-link]").forEach(el => applyColor(el, theme, "color"));
  }

  function updateImages(theme) {
    const darkImages = document.querySelectorAll('[data-theme-img="dark"]');
    const lightImages = document.querySelectorAll('[data-theme-img="light"]');

    darkImages.forEach(img => {
      img.style.display = theme === "dark" ? "block" : "none";
      img.setAttribute("aria-hidden", theme === "dark" ? "false" : "true");
    });

    lightImages.forEach(img => {
      img.style.display = theme === "light" ? "block" : "none";
      img.setAttribute("aria-hidden", theme === "light" ? "false" : "true");
    });
  }

  function updateActiveButtons(theme) {
    document.querySelectorAll("[data-set-theme]").forEach(el => {
      const isActive = el.getAttribute("data-set-theme") === theme;
      el.classList.toggle("active-theme", isActive);
      el.style.opacity = isActive ? "0.5" : "1";
      el.style.transition = "opacity 0.3s ease";
    });
  }

  // [data-theme-toggle] support
  const toggle = document.querySelector("[data-theme-toggle]");
  if (toggle) {
    toggle.addEventListener("click", toggleTheme);
  }

  // [data-set-theme] support
  const setThemeButtons = document.querySelectorAll("[data-set-theme]");
  setThemeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const newTheme = btn.getAttribute("data-set-theme");
      root.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      applyTheme(newTheme);
    });
  });
});