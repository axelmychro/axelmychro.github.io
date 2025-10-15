document.addEventListener("DOMContentLoaded", () => {
  // cache DOM queries
  const menuBtn = document.getElementById("menu");
  const navigatorNav = document.querySelector(".navigator-nav");
  const langSwitch = document.getElementById("lang-switch");
  const yearElement = document.getElementById("currentYear");

  yearElement.textContent = new Date().getFullYear();

  // menu toggle handler
  const toggleMenu = (show) => {
    const isActive =
      show !== undefined ? show : !navigatorNav.classList.contains("active");
    navigatorNav.classList.toggle("active", isActive);
    menuBtn.setAttribute("aria-expanded", isActive);
  };

  // open/close menu on button click
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // outside click close menu
  document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !navigatorNav.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // esc close menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navigatorNav.classList.contains("active")) {
      toggleMenu(false);
      menuBtn.focus();
    }
  });

  // internationalization
  async function loadLang(lang) {
    try {
      const res = await fetch(`./lang/${lang}.json`);
      const data = await res.json();

      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (data[key]) el.innerHTML = data[key];
      });
    } catch (error) {
      console.error("Failed to load language file:", error);
    }
  }

  function setLang(lang) {
    loadLang(lang);
    localStorage.setItem("lang", lang);
    langSwitch.textContent = lang;
  }

  // language switch handler
  langSwitch.addEventListener("click", () => {
    const current = localStorage.getItem("lang") || "en";
    const next = current === "en" ? "id" : "en";
    setLang(next);
  });

  // load saved language
  const savedLang = localStorage.getItem("lang") || "en";
  setLang(savedLang);
});
