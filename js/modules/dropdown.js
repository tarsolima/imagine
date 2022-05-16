import handleOutside from './outside.js';
export default function initdropdown() {
    const dropdown = document.querySelectorAll('[data-dropdown]');

    dropdown.forEach((itens) => {
        ['touchstart', 'click'].forEach((userEvent) => {
            itens.addEventListener(userEvent, handleClick);
        });
    });

    function handleClick(event) {
        event.preventDefault();
        this.classList.add('active');
        handleOutside(this, ['touchstart', 'click'] ,() => {
            this.classList.remove('active');
        });
    }
}