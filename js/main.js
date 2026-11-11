document.documentElement.classList.add("has-js");

const menuButton = document.querySelector(".menu-toggle");
const siteHeader = document.querySelector(".site-header");
const navigationLinks = document.querySelectorAll(".site-nav a");

function closeMenu() {
  siteHeader.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "פתיחת תפריט");
}

menuButton.addEventListener("click", () => {
  const isOpen = siteHeader.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "סגירת תפריט" : "פתיחת תפריט",
  );
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
