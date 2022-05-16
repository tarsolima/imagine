import handleOutside from './outside.js'
export default function initMenuMobile() {
    const menu = document.querySelector('[data-menu]');
    const menuList = document.querySelector('[data-menuList]');
    const eventos = ['touchstart', 'click'];
    if(menuList) {
        function startMenu() {
            menu.classList.add('active');
            menuList.classList.add('active');
            handleOutside(menuList, ['click', 'touchstart'] ,() => {
                menu.classList.remove('active');
                menuList.classList.remove('active');
            })
        }

        eventos.forEach((userEvent) => {
            menu.addEventListener(userEvent, startMenu);
        });
    }
}