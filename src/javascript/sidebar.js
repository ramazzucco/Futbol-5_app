const showSubMenu = (e) => {
    const buttonClass = e.target.classList.value;

    if (e.target.classList.value.includes("clicked")) {
        e.target.classList.replace("clicked", "uncliked");
    } else {
        e.target.classList.value = buttonClass + " clicked";
    }

    const buttonId = e.target.attributes[2].value;

    const subMenu = window.document.querySelector(`.subMenu.${buttonId}`);

    subMenu.classList.toggle("d-none");
};

const hideSubMenu = (e) => {

    const elementId = e.target.getAttribute("mainButton");
    const mainButton = window.document.querySelector(`.mainButtons.${elementId}`);
    const subMenu = window.document.querySelector(`.subMenu.${elementId}`);

    mainButton.classList.toggle("clicked");
    subMenu.classList.toggle("d-none");

};

export { showSubMenu, hideSubMenu };
