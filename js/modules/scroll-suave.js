export default function initScroll() {
    const scrollSuave = document.querySelectorAll('[data-scroll]');
    const windowMetade = window.innerHeight * .8;

    function startScroll() {
        scrollSuave.forEach((event) => {
            const scroller = event.getBoundingClientRect().top;
            const conta = (scroller - windowMetade) < 0;
            if(conta) {
                event.classList.add('ativo');
            }
        });
    }

    startScroll();

    window.addEventListener('scroll', startScroll);
}