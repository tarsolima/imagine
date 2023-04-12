export default class AnimaScroll {
    constructor(scroll) {
        this.scrollSuave = document.querySelectorAll(scroll);
        this.windowMetade = window.innerHeight * .8;
        this.eventClass = 'ativo';
        this.startScroll = this.startScroll.bind(this);
    }

    startScroll() {
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