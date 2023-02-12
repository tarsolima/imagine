import ScrollSuave from './modules/scroll-suave.js';
import Dropdown from './modules/dropdown.js';
import Modal from './modules/modal.js';
import MenuMobile from './modules/menu-mobile.js';

const scrollSuave = new ScrollSuave('[data-scroll]');
scrollSuave.init();

const dropdown = new Dropdown('[data-dropdown]');
dropdown.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init()

const menuMobile = new MenuMobile('[data-menu]', '[data-menuList]');
menuMobile.init();