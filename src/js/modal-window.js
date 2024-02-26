
      const cssClasses = {
        burgerButton: 'burger-menu',
        modal: 'modal-window',
        closeButton: 'modal-menu-close-btn',
        toggleClass: 'is-open',
        menuButtons: 'modal-menu-item',
      };

      const burgerMenu = document.querySelector(`.${cssClasses.burgerButton}`);
      const modal = document.querySelector(`.${cssClasses.modal}`);
      const closeButton = document.querySelector(`.${cssClasses.closeButton}`);
      const menuButtons = document.querySelectorAll(".modal-menu-item")

      function toggle (event) {       
        modal.classList.toggle(cssClasses.toggleClass);
      };

      burgerMenu.addEventListener('click', toggle);
      closeButton.addEventListener('click', toggle);
      menuButtons.forEach(button => button.addEventListener('click', toggle));
    