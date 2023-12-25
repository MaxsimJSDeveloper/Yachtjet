const cssClasses = {
    burgerButton: 'burger-menu',
    modal: 'modal-window',
    closeButton: 'modal-menu-close-btn',
    toggleClass: 'is-open'
};

const burgerMenu = document.querySelector(`.${cssClasses.burgerButton}`);
const modal = document.querySelector(`.${cssClasses.modal}`);
const closeButton = document.querySelector(`.${cssClasses.closeButton}`);

const toggle = () => modal.classList.toggle(cssClasses.toggleClass);

burgerMenu.addEventListener('click', toggle);
closeButton.addEventListener('click', toggle);
