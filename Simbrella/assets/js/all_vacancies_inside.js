const nav = document.querySelector("#header__skill");
// const topOfNavbar=nav.element.offsetTop;
function fixedNavbar() {
  if (window.scrollY > 100) {
    nav.classList.add("fix_me");
  } else {
    nav.classList.remove("fix_me");
  }
}
window.addEventListener("scroll", fixedNavbar);
