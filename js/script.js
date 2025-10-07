document.getElementById("currentYear").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu");
  const navigatorNav = document.querySelector(".navigator-nav");

  // when menu is clicked, toggle class "active" + aria-expanded
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !expanded);
    navigatorNav.classList.toggle("active");
  });

  // close menu if clicked outside of it
  document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !navigatorNav.contains(e.target)) {
      navigatorNav.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  // close menu if esc is pressed
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navigatorNav.classList.contains("active")) {
      navigatorNav.classList.remove("active");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.focus();
    }
  });
});
