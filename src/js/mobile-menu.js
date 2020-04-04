export default function mobileMenu() {
  const openBtn = document.querySelector('.header__wrapper-menu');
  const closeBtn = document.querySelector('.header__close');
  const menu = document.querySelector('.header__navigation');
  
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