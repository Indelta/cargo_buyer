export default function tabManager() {
    const titleLeft = document.querySelector('.format__subtitle-left');
    const titleRight = document.querySelector('.format__subtitle-right');
    const contentLeft = document.querySelector('.format__left');
    const contentRight = document.querySelector('.format__right');

    titleLeft.addEventListener('click', () => {
        remove(titleRight);
        remove(contentRight);
        add(titleLeft);
        add(contentLeft);
    })

    titleRight.addEventListener('click', () => {
        remove(titleLeft);
        remove(contentLeft);
        add(titleRight);
        add(contentRight);
    })

} 

function add(element) {
    element.classList.add('active');
}

function remove(element) {
    element.classList.remove('active');
}