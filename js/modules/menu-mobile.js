import handleOutside from './outside.js';

export default class MenuMobile {
    constructor(menu, menuList, event) {
        this.menu = document.querySelector(menu);
        this.menuList = document.querySelector(menuList);
        this.activeClass = 'active';

        if (this.events === undefined) this.events = ['touchstart', 'click'];
        else this.events = event;

        this.startMenu = this.startMenu.bind(this);
    }
    
    startMenu() {
        this.menu.classList.add(this.activeClass);
        this.menuList.classList.add(this.activeClass);
        handleOutside(this.menuList, this.events, () => {
            this.menu.classList.remove(this.activeClass);
            this.menuList.classList.remove(this.activeClass);
        })
    }

    addEvent() {
        this.events.forEach((userEvent) => {
            this.menu.addEventListener(userEvent, this.startMenu);
        });
    }

    init() {
        if(this.menu && this.menuList) {
            this.addEvent();
        }
    }
}