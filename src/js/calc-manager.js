export default function calcManager() {
  const btnNext = document.querySelector(".calc__next");
  const formTop = document.querySelector(".calc__top");
  const formBottom = document.querySelector(".calc__bottom");
  const calcPage = document.querySelector(".calc");
  const mainBtn = document.querySelector(".thanks__back");
  const weight = document.querySelector('input[name="weight"]'); 

  btnNext.addEventListener("click", () => {
    if (!weight.value) {
      weight.classList.add("animate");
      setTimeout(() => {
        weight.classList.remove("animate");
      }, 500);
    } else {
      formTop.style.display = "none";
      formBottom.style.display = "flex";
    }
  });

  mainBtn.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      formBottom.style.display = "none";
    }
    formTop.style.display = "block";
    calcPage.classList.remove("show");
  });
}
