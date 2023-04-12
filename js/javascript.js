import AnimaScroll from './modules/anima-scroll.js';
import Dropdown from './modules/dropdown.js';
import Modal from './modules/modal.js';
import MenuMobile from './modules/menu-mobile.js';
import ScrollSuave from './modules/scroll-suave.js';

const animaScroll = new AnimaScroll('[data-scroll]');
animaScroll.init();

const dropdown = new Dropdown('[data-dropdown]');
dropdown.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init()

const menuMobile = new MenuMobile('[data-menu]', '[data-menuList]');
menuMobile.init();

const scrollSuave = new ScrollSuave('[data-menulist] a[href^="#"]');
scrollSuave.init();