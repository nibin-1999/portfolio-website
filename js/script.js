const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const cancel = document.querySelector(".cancel");
const mobileLinks = document.querySelectorAll(".mobile-menu .nav-link a");
const contactLinks = document.querySelectorAll(".contact-btn a");

function handleContactClick(event) {
  if (event && typeof event.preventDefault === "function") {
    event.preventDefault();
  }
  console.log("Contact button clicked");
  alert("Contact button clicked");
}
window.handleContactClick = handleContactClick;

hamburger.addEventListener("click", () => {
  mobileMenu.style.transform = "translateY(0)";
  hamburger.style.display = "none";
});

cancel.addEventListener("click", () => {
  mobileMenu.style.transform = "translateY(-100%)";
  hamburger.style.display = "block";
});

mobileLinks.forEach((link) => {
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

contactLinks.forEach((link) => {
  link.addEventListener("click", handleContactClick);
});

function handleResize() {
  if (window.innerWidth <= 780) {
    hamburger.style.display = "block";
  } else {
    hamburger.style.display = "none";
    mobileMenu.style.transform = "translateY(-100%)";
  }
}
window.addEventListener("resize", handleResize);
handleResize();
