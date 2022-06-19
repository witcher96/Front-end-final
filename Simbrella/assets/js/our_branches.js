//our-branches
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

let form = document.getElementsByClassName("form");
let inputs = document.querySelectorAll(".form .form_inp");
let subbtn = document.getElementById("submit_btn");
subbtn.addEventListener("click", (e) => {
  e.preventDefault();
  inputs.forEach((item) => {
    if (item.value.trim() == "") {
      item.classList.add("err_input");
    }
  });
});
