const handleMenu = () => {

    const menu = window.document.querySelector(".sidebarcontent");

    if(menu){

        menu.classList.toggle("hide");

        menu.classList.toggle("menu");

        menu.onmouseup = (e) => {
            const submenu = e.target.getAttribute("data-subMenu");

            if(submenu === "false" || submenu === null){
                menu.classList.toggle("hide");
            }

        }

    }

}

export {
    handleMenu,
}