const handleMenu = () => {

    const menu = window.document.querySelector(".sidebarcontent");

    if(menu){

        menu.classList.toggle("hide");

        menu.classList.toggle("menu");

        const buttons = window.document.querySelectorAll(".sidebarcontent button");

        buttons.forEach( btn => {

            const hasSubMenu = btn.getAttribute("data-submenu");

            btn.onclick = () => {
                console.log(hasSubMenu)
                if(hasSubMenu === "false"){
                    menu.classList.toggle("hide");
                }
            }
        })

    }

}

export {
    handleMenu,
}