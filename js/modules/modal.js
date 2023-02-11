export default class Modal {
    constructor(open, close, container) {
        this.abrirModal = document.querySelector(open);
        this.fecharModal = document.querySelector(close);
        this.modalContainer = document.querySelector(container);
        
        this.eventContainer = this.eventContainer.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    initModal() {
        this.modalContainer.classList.toggle('active');
    }

    eventContainer(event) {
        event.preventDefault();
        this.initModal();
    }

    closeModal(event){ 
        event.preventDefault();
        if (event.target === this.modalContainer) {
            this.initModal(event);
        }
    }

    addEvent() {
        this.abrirModal.addEventListener('click', this.eventContainer);
        this.fecharModal.addEventListener('click', this.eventContainer);
        this.modalContainer.addEventListener('click', this.closeModal);    
    }

    init() {
        if (this.abrirModal && this.fecharModal && this.modalContainer) {
            this.addEvent();
        }
        return this;
    }
}