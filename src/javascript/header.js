const handleMenu = () => {

    const menu = window.document.querySelector(".sidebarcontent");

    if(menu){

        menu.classList.toggle("hide");

        menu.classList.toggle("menu");

        const buttons = window.document.querySelectorAll(".sidebarcontent button");

        buttons.forEach( btn => {

            const hasSubMenu = btn.getAttribute("data-subMenu");

            btn.onclick = () => {
                if(hasSubMenu === true){
                    menu.classList.toggle("hide");
                }
            }
        })

    }

}

export {
    handleMenu,
}