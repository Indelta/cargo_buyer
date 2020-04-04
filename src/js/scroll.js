export default function scrollManager() {
    const btns = document.querySelectorAll('[data-scroll]');

    btns.forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const selector = el.dataset.scroll;
            const block = document.getElementById(selector);
            scrollBlock(block)
        })
    })
}

function scrollBlock(block) {
    block.scrollIntoView({block: "center", behavior: "smooth"});
 }