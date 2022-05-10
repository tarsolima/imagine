function initScroll() {
    const scrollSuave = document.querySelectorAll('[data-scroll]');
    const windowMetade = window.innerHeight * .8;

    if(scrollSuave.length) {
        function startScroll() {
            scrollSuave.forEach((event) => {
                const scroller = event.getBoundingClientRect().top;
                const conta = (scroller - windowMetade) < 0;

                if(conta) {
                    event.classList.add('ativo');
                }
            })
        }
    }

    startScroll();

    window.addEventListener('scroll', startScroll);
}

initScroll();



function initdropdown() {
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
        })
    }
}
initdropdown();

function handleOutside(element, itens ,callback) {
    const html = document.documentElement;
    const outside = 'data-outside';
    if(!element.hasAttribute(outside)) {
        itens.forEach((userEvent) => {
            setTimeout(() =>{
                html.addEventListener(userEvent, handleOutsideClick);
            }) ;
            

        });
        element.setAttribute(outside, '');
    }

    function handleOutsideClick(event) {
        if(!element.contains(event.target)) {
            itens.forEach((userEvent) => {
                html.removeEventListener(userEvent, handleOutsideClick);
            });
            element.removeAttribute(outside);
            callback()
        }
    }
}

function startModal() {
    const abrirModal = document.querySelector('[data-modal="abrir"]');
    const fecharModal = document.querySelector('[data-modal="fechar"]');
    const modalContainer = document.querySelector('[data-modal="container"]');

    function initModal(event) {
        event.preventDefault();
        modalContainer.classList.toggle('active');
    }

    function closeModal(event){ 
        event.preventDefault();
        if(event.target === this) {
            initModal(event);
        }
    }

    abrirModal.addEventListener('click', initModal);
    fecharModal.addEventListener('click', initModal);
    modalContainer.addEventListener('click', closeModal);
}

startModal();


function initMenuMobile() {
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

initMenuMobile();