export default function calcManager() {
  const btnNext = document.querySelector('.calc__next');
  const formTop = document.querySelector('.calc__top');
  const formBottom = document.querySelector('.calc__bottom');

  btnNext.addEventListener('click', () => {
    formTop.style.display = 'none';
    formBottom.style.display = 'block';
  })
} 