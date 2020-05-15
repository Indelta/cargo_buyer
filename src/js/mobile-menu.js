export default function mobileMenu() {
  const openBtn = document.querySelector('.header__wrapper-menu');
  const closeBtn = document.querySelector('.header__close');
  const menu = document.querySelector('.header__navigation');
  const closePrice = document.querySelector('.price-list__img');
  const price = document.querySelector('.price-list');
  const body = document.querySelector('body');
  const closeModal = document.querySelector('.modal__close');
  const openModal = document.querySelector('.phone');
  const modal = document.querySelector('.modal');

  openModal.addEventListener('click', () => {
    add(modal)
    add(body);
  })

  closeModal.addEventListener('click', () => {
    remove(modal)
    remove(body);
  })

  closePrice.addEventListener('click', () => {
    remove(price);
    remove(body);
  })
  
  openBtn.addEventListener('click', () => {
    add(menu)
  })

  closeBtn.addEventListener('click', () => {
    remove(menu)
  })

  menu.addEventListener('click', () => {
    remove(menu)
  })
}

function add(element) {
  element.classList.add('active');
}

function remove(element) {
  element.classList.remove('active');
}