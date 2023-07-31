import debounce from "./debounce";

export default class AnimaScroll {
    constructor(scroll) {
        this.scrollSuave = document.querySelectorAll(scroll);
        this.windowMetade = window.innerHeight * .8;
        this.eventClass = 'ativo';
        this.startScroll = debounce(this.startScroll.bind(this), 100);
    }

    startScroll() {
        const cabecalho = document.querySelector('.nav-header');
        const comunicate = document.querySelector('.box2');
        const comunicateT = document.querySelector('.box3');
        if(comunicate.classList.contains('ativo')) {
            cabecalho.classList.add('ativo');
        }
        this.scrollSuave.forEach((event) => {
            const scroller = event.getBoundingClientRect().top;
            const conta = (scroller - this.windowMetade) < 0;
            if(conta) {
                event.classList.add(this.eventClass);
            }
        });
    }

    addEvent() {
        this.startScroll();
        window.addEventListener('scroll', this.startScroll);
    }

    init() {
        if (this.scrollSuave.length) {
            this.addEvent();
        }
        return this;
    }
}