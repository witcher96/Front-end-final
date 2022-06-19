
 const navigation = document.querySelector(".navigation");
 const menu = document.querySelector(".navigation__content__menu-list");
 const menubtn = document.querySelector(".menu-btn");
 const cancelbtn = document.querySelector(".cancel-btn");
  menubtn.onclick = () => {
    menu.classList.add("active");
    menubtn.classList.add("hide");
  };
 cancelbtn.onclick = () => {
   menu.classList.remove("active");
   menubtn.classList.remove("hide");
 };

 window.onscroll = () => {
   this.scrollY > 20
     ? navigation.classList.add("sticky")
     : navigation.classList.remove("sticky");
 };
/////////////////////////////////////////////////////////////////////////////////////
const num = document.getElementById("number");
const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");

function numbers(num,start,end,duration){
  let startTimestamp=null;
  const change =(timestamp)=>{
    if(!startTimestamp) startTimestamp = timestamp;
    const calc = Math.min((timestamp - startTimestamp) / duration, 1);
    num.innerHTML=Math.floor(calc * (end-start) + start);
    if(calc<1){
      window.requestAnimationFrame(change);
    }

  }
  window.requestAnimationFrame(change)
}
numbers(num,0,220,1500);
numbers(num1,0,25,1500);
numbers(num2,0.1,3.0,1500);
/////////////////////////////////////////////////////////////////////////////////////
 document.querySelectorAll(".countries-circle").forEach((circle) => {
   circle.addEventListener("mouseleave", function () {
     document.querySelector(circle.getAttribute("data-id")).style.fill =
       "#E5E9F4";
   });
 });
 document.querySelectorAll(".countries-circle-orange").forEach((circle) => {
   circle.addEventListener("mouseenter", function () {
     document.querySelector(circle.getAttribute("data-id")).style.fill =
       "#FF931E";
   });
 });
 document.querySelectorAll(".countries-circle-orange").forEach((circle) => {
   circle.addEventListener("mouseleave", function () {
     document.querySelector(circle.getAttribute("data-id")).style.fill =
       "#E5E9F4";
   });
 });
/////////////////////////////////////////////////////////////////////////////////////
function Baku() {
    var html3 = "baku@simbrella.com";
    var html = "Main Operations Office";
    var html2 = "Jalil Mammadguluzadeh st. 102 A, City Point Business Centre, AZ1022, Baku, Azerbaijan";
    document.getElementsByClassName("baku")[0].innerHTML = html;
    document.getElementsByClassName(
      "contact-footer__first__paragraph"
    )[0].innerHTML = html2;
    document.getElementsByClassName("about")[0].innerHTML = html3
    document.querySelector("#amsterdam").style.color = "#999999";
    document.querySelector("#singapore").style.color = "#999999";
    document.querySelector("#baku").style.color = "#FF931E";
}
/////////////////////////////////////////////////////////////////////////////////////
function Singapore() {
    var html3 = "singapore@simbrella.com";
    var html = "APAC Region Office";
    var html2 = "1163 Tras Street, #07-02, Lian Huat Building, 079024, Singapore";
    document.getElementsByClassName("baku")[0].innerHTML = html;
    document.getElementsByClassName(
      "contact-footer__first__paragraph"
    )[0].innerHTML = html2;
    document.getElementsByClassName("about")[0].innerHTML = html3
    document.querySelector("#amsterdam").style.color = "#999999";
    document.querySelector("#singapore").style.color = "#FF931E";
    document.querySelector("#baku").style.color = "#999999";
   
}
/////////////////////////////////////////////////////////////////////////////////////
function Amsterdam() {
    var html3 = "amsterdam@simbrella.com";
    var html = "Headquarters";
    var html2 = "Teleportboulevard 130, Scalehub, Unit number 1.08, 1043 EJ Amsterdam, Netherlands";
    document.getElementsByClassName("baku")[0].innerHTML = html;
    document.getElementsByClassName(
      "contact-footer__first__paragraph"
    )[0].innerHTML = html2;
    document.getElementsByClassName("about")[0].innerHTML = html3
    document.querySelector("#amsterdam").style.color = "#FF931E";
    document.querySelector("#singapore").style.color = "#999999";
    document.querySelector("#baku").style.color = "#999999";}
/////////////////////////////////////////////////////////////////////////////////////


const content_for_path = [
  "Data as a Service (DaaS) is a complex approach aimed at monetization of MNO’s Big Data relying on advanced techniques in analyzing telco usage. A user-friendly and fast ecosystem is built for various providers of goods and services be equipped with access to valuable data for making lending decisions.",
  "Using variety of accessible data, decision is made on eligibility of any given individual independent on whether they have or not credit history. Complex product system is built with scoring engine and loan management platform as core components.",
  "Enabling embedded finance to all credit-invisible customer segments of a bank – via using sophisticated scoring engine and state-of-the-art loan management platform. Our solution greatly reduces cost of the lending process as well as efficiently managing risks of the same.",
  "Enabling embedded finance to all customer segments of a mobile wallet passing through creditworthiness assessment based on AI/ML driven scoring algorithms. Loan servicing module presents as well.",
  "Buy Now Pay Later solution technically integrated into any ecosystem featuring e-commerce, marketplace etc. for transparent access allowing the end-users to take advantage of making installment-based purchases.",
  "Lending an airtime to MNO customers on the premise that they will pay back with a bit of premium. Built-in machine learning system provides for maximum profitability of the business model.",
  "While scoring engine and set of algorithms are core of all Simbrella’s solutions, it is possible to implement scoring as a standalone component should such a need arise at any of our potential clients – banks, MNO’s, mobile wallets etc.",
  "Worried about protection of sensitive data? We created data anonymizer solution for this particular purpose – it’ll help to carry on all scoring and lending activities in any customer base without disclosing actual customer information.",
];
let all_products = document.querySelectorAll(
  ".products__wrapper__rounds__item"
);
let product_wrapper_a = document.querySelectorAll(
  ".products__wrapper__rounds__item__link"
);
let text = document.querySelector(
  ".products__wrapper__rounds__p-box__content-of-product"
);
all_products.forEach((item, index, array) => {
  item.addEventListener("mouseenter", (e) => {
    text.innerText = content_for_path[index];
    all_products.forEach((item, otherIndex, array) => {
      if (otherIndex != index) {
        product_wrapper_a[index].classList.add("color-hover");
        item.classList.add("for-hover");
      }
    });
  });
  item.addEventListener("mouseleave", (e) => {
    text.innerText = "";
    all_products.forEach((item, otherIndex, array) => {
      if (otherIndex != index) {
        product_wrapper_a[index].classList.remove("color-hover");
        item.classList.remove("for-hover");
      }
    });
  });
});

