const rowClick = (setIds, ids, selectRows) => {

    const rows = document.querySelectorAll(".rows");

    if(rows){

        rows.forEach( row => {


            row.onclick = () => {
                if(selectRows){

                    const id = row.firstChild.innerHTML;
                    const icons = row.querySelectorAll(".check i");

                    row.classList.toggle("bg-secondary");
                    row.classList.toggle("delete");

                    icons.forEach( icon => {
                        icon.classList.toggle("d-none");
                    })

                    if(row.className.includes("delete")){
                        setIds([...ids,id]);
                    } else {
                        const newArreyIds = ids.filter( x => x !== id );
                        setIds(newArreyIds);
                    }

                }
            }
        })

    }

}

const cancelSelectRows = (setIds, setSelectRows, selectRows) => {

    const rows = document.querySelectorAll(".rows");

    if(rows){

        rows.forEach( row => {

            if(row.className.includes("delete")){

                row.classList.toggle("bg-secondary");
                row.classList.toggle("delete");

                const icons = row.querySelectorAll(".check i");

                icons.forEach( icon => {
                    icon.classList.toggle("d-none")
                })

            }

        })

    }

    setIds([]);
    setSelectRows(!selectRows);
}

const selectAll = (setIds) => {

    const rows = document.querySelectorAll(".rows");

    const arreyIds = [];

    if(rows){

        rows.forEach( row => {

            const id = row.firstChild.innerHTML;

            arreyIds.push(id);

            const icons = row.querySelectorAll(".check i");

            row.classList.toggle("bg-secondary");
            row.classList.toggle("delete");

            icons.forEach( icon => {
                icon.classList.toggle("d-none");
            })

        })

        setIds(arreyIds);

    }
}

export {
    rowClick,
    cancelSelectRows,
    selectAll,
}