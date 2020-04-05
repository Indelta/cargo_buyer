export default function calcManager() {
  const btnNext = document.querySelector(".calc__next");
  const formTop = document.querySelector(".calc__top");
  const formBottom = document.querySelector(".calc__bottom");
  const calcPage = document.querySelector(".calc");
  const mainBtn = document.querySelector(".thanks__back");
  const thanksPage = document.querySelector(".thanks");

  btnNext.addEventListener("click", () => {
    formTop.style.display = "none";
    formBottom.style.display = "flex";
  });

  mainBtn.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      formBottom.style.display = "none";
    }
    formTop.style.display = "block";
    calcPage.classList.remove("show");
  });
}
