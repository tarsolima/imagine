export default function startModal() {
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