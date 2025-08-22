const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const cancel = document.querySelector(".cancel");
const mobileLinks = document.querySelectorAll(".mobile-menu .nav-link a");

hamburger.addEventListener("click", () => {
  mobileMenu.style.transform = "translateY(0)";
  hamburger.style.display = "none";
});

cancel.addEventListener("click", () => {
  mobileMenu.style.transform = "translateY(-100%)"; // ✅ hide fully
  hamburger.style.display = "block";
});

// Optional: close menu when a link is tapped
mobileLinks.forEach((link) => {
  // Touch/mouse press visual feedback
  const pressStart = () => link.classList.add("is-pressed");
  const pressEnd = () => link.classList.remove("is-pressed");
  link.addEventListener("touchstart", pressStart, { passive: true });
  link.addEventListener("touchend", pressEnd, { passive: true });
  link.addEventListener("mousedown", pressStart);
  link.addEventListener("mouseup", pressEnd);

  link.addEventListener("click", () => {
    mobileMenu.style.transform = "translateY(-100%)";
    hamburger.style.display = "block";
  });
});

function handleResize() {
  if (window.innerWidth <= 780) {
    hamburger.style.display = "block";
  } else {
    hamburger.style.display = "none";
    mobileMenu.style.transform = "translateY(-100%)"; // ✅ reset
  }
}
window.addEventListener("resize", handleResize);
handleResize();
