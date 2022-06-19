const nav = document.querySelector("#navbar");
// const topOfNavbar=nav.element.offsetTop;
function fixedNavbar() {
  if (window.scrollY > 100) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
}
window.addEventListener("scroll", fixedNavbar);
