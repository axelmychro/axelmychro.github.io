// the menu in question
const navigatorNav = document.querySelector(".navigator-nav");

// when menu is clicked, toggle class "active"
document.querySelector("#menu").onclick = () => {
  navigatorNav.classList.toggle("active");
};

// close menu event if clicked outside of it
const closeMenu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!closeMenu.contains(e.target) && !navigatorNav.contains(e.target)) {
    navigatorNav.classList.remove("active");
  }
});
