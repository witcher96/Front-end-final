const nav1 = document.querySelector("#header__skill");

function fixedNavbar() {
  if (window.scrollY > 100) {
    nav1.classList.add("fix_me");
  } else {
    nav1.classList.remove("fix_me");
  }
}
window.addEventListener("scroll", fixedNavbar);
