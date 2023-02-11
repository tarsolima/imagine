import handleOutside from './outside.js';

export default class Dropdown {
    constructor(drop, element) {
        this.dropdown = document.querySelectorAll(drop);
        if (this.element === undefined) this.element = ['touchstart', 'click'];
        else this.element = element;
        this.activeClass = 'active';
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        const element = event.currentTarget;
        element.classList.add(this.activeClass);
        handleOutside(element, this.element , () => {
            element.classList.remove(this.activeClass)
        });
    }

    addEvent() {
        this.dropdown.forEach((itens) => {
            this.element.forEach((userEvent) => itens.addEventListener(userEvent, this.handleClick));
        });
    }

    init() {
        if (this.dropdown.length) {
            this.addEvent();
        }
        return this;
    }
}