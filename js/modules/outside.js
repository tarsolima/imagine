export default function handleOutside(element, itens ,callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    function handleOutsideClick(event) {
        if(!element.contains(event.target)) {
            itens.forEach((userEvent) => {
                html.removeEventListener(userEvent, handleOutsideClick);
            });
            element.removeAttribute(outside);
            callback()
        }
    }

    if(!element.hasAttribute(outside)) {
        itens.forEach((userEvent) => {
            setTimeout(() =>{
                html.addEventListener(userEvent, handleOutsideClick);
            }) ;
            

        });
        element.setAttribute(outside, '');
    }
}