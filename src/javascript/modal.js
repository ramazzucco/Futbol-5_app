const close = () => {

    const bodyHTML = window.document.querySelector("body");
    const card = window.document.querySelector(".modal-info");
    const header = window.document.querySelector(".modal-info .card-header");
    const body = window.document.querySelector(".modal-info .card-body");
    const footer = window.document.querySelector(".modal-info .card-footer");

    if(card){

        bodyHTML.classList.remove("overflow-hidden");
        bodyHTML.classList.add("overflow-auto");
        card.setAttribute("modal-id","default");
        card.classList.value = "card modal-info mb-3";
        header.classList.value = "card-header";
        body.classList.value = "card-body p-5";
        footer.classList.value = "card-footer";
        body.innerHTML = "";
    }

}

const color = {
    primary: "rgba(0, 123, 255)",
    secondary: "rgba(108, 117, 125)",
    success: "rgba(40, 167, 69)",
    danger: "rgba(220, 53, 69)",
    warning: "rgba(255, 193, 7)",
    info: "rgba(23, 162, 184)",
    light: "rgba(248, 249, 250)",
    dark: "rgba(52, 58, 64)"
}

const cardcontainer = {
    display: "",
    minWidth: "100%",
    minHeight: window.screen.height,
    overflow: "hidden",
    position: "absolute",
    top: "0",
    left: "0",
    backgroundColor: "rgba(0,0,0,.7)",
    zIndex: "5"
}

const modalPosition = {
    minWidth: "50%",
    maxWidth: "90%",
    position: "absolute",
    top: "50%",
    left:"50%",
    transform: "translate(-50%,-75%)",
    zIndex: "10"
}

const rowItemsCenter = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
}

const textheader = {
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    letterSpacing: "3px",
}

const textbody = {
    padding: "16px",
    textAlign: "center",
    fontWeight: "bold"
}

const styleByDefault = {
    id: "default",
    buttonClass: {
        secondaryButton: "light",
        cancelButton: "light"
    },
    card: {
        ...modalPosition,
        display: "none",
        border: "none",
        boxShadow: "6px 6px 6px 1px gray"
    },
    header: {
        display: "",
        color: color.light
    },
    body: {
        backgroundColor: color.light,
        borderRadius: "5px 5px 0 0",
    },
    footer: {
        border: "none",
        borderRadius: "0 0 5px 5px",
        color: color.light
    },
    secondaryButton: {
        color: "light",
    },
    cancelButton: {
        color: "light",
        marginLeft: "48px",
    },
    hover: {
        secondaryButton: {
            backgroundColor: color.light,
            color: color.danger
        },
        cancelButton: {
            backgroundColor: color.light,
            color: color.danger
        }
    }
}

const cardsuccessligth = {
    id: "cardsuccessligth",
    cardcontainer: cardcontainer,
    card: {
        ...modalPosition,
        display: "",
        border: "none",
        boxShadow: `6px 6px 6px 1px ${color.dark}`
    },
    header: {
        display: "none"
    },
    body: {
        backgroundColor: color.success,
        borderRadius: "5px 5px 0 0",
        textTransform: "capitalize",
        color: color.light,
        ...textbody
    },
    footer: {
        backgroundColor: color.success,
        border: "none",
        borderRadius: "0 0 5px 5px",
        ...rowItemsCenter
    },
    secondaryButton: {
        display: "none"
    },
    cancelButton: {
        border: `1px solid ${color.light}`,
        color: color.light,
    },
    hover: {
        cancelButton: {
            backgroundColor: color.light,
            color: color.success,
            fontWeight: "bold"
        }
    }
}

const cardsuccessdark = {
    id: "cardsuccessdark",
    cardcontainer: cardcontainer,
    card: {
        ...modalPosition,
        display: "",
        border: `1px solid ${color.success}`,
        borderRadius: "7px",
        boxShadow: `6px 6px 6px 1px ${color.dark}`
    },
    header: {
        display: "none"
    },
    body: {
        backgroundColor: color.dark,
        borderRadius: "5px 5px 0 0",
        textTransform: "capitalize",
        color: color.success,
        ...textbody
    },
    footer: {
        backgroundColor: color.dark,
        border: "none",
        borderRadius: "0 0 5px 5px",
        ...rowItemsCenter
    },
    secondaryButton: {
        display: "none"
    },
    cancelButton: {
        border: `1px solid ${color.success}`,
        color: color.success,
    },
    hover: {
        cancelButton: {
            backgroundColor: color.success,
            color: color.dark,
            fontWeight: "bold"
        }
    }
}

const historydeleteoneligth = {
    id: "historydeleteoneligth",
    cardcontainer: cardcontainer,
    card: {
        ...modalPosition,
        display: "",
        boxShadow: `6px 6px 6px 1px ${color.dark}`,
        border: "none"
    },
    header: {
        backgroundColor: color.danger,
        color: color.light,
        ...textheader
    },
    body: {
        backgroundColor: color.light,
        color: color.danger,
        ...textbody
    },
    footer: {
        backgroundColor: color.light,
        border: "none",
        ...rowItemsCenter
    },
    secondaryButton: {
        backgroundColor: color.danger,
        color: color.light,
    },
    cancelButton: {
        backgroundColor: color.info,
        color: color.light,
        marginLeft: "48px",
    },
    hover: {
        secondaryButton: {
            border: `1px solid ${color.danger}`,
            color: color.danger,
            fontWeight: "bold"
        },
        cancelButton: {
            border: `1px solid ${color.info}`,
            color: color.info,
            marginLeft: "48px",
            fontWeight: "bold"
        }
    }
}

const historydeleteonedark = {
    id: "historydeleteonedark",
    cardcontainer: cardcontainer,
    card: {
        ...modalPosition,
        display: "",
        boxShadow: `6px 6px 6px 1px ${color.dark}`,
        border: `2px solid ${color.danger}`,
        borderRadius: "7px"
    },
    header: {
        backgroundColor: color.dark,
        color: color.danger,
        borderBottom: `1px solid ${color.danger}`,
        ...textheader
    },
    body: {
        backgroundColor: color.dark,
        color: color.danger,
        ...textbody
    },
    footer: {
        backgroundColor: color.dark,
        borderTop: `1px solid ${color.danger}`,
        borderRadius: "0 0 5px 5px",
        border: "none",
        ...rowItemsCenter
    },
    secondaryButton: {
        border: `1px solid ${color.info}`,
        color: color.info,
    },
    cancelButton: {
        border: `1px solid ${color.danger}`,
        color: color.danger,
        marginLeft: "48px",
    },
    hover: {
        secondaryButton: {
            backgroundColor: color.info,
            color: color.dark,
            fontWeight: "bold"
        },
        cancelButton: {
            backgroundColor: color.danger,
            color: color.dark,
            marginLeft: "48px",
            fontWeight: "bold"
        }
    }
}

const inforeserveligth = {
    id: "inforeserveligth",
    cardcontainer: cardcontainer,
    card: {
        ...modalPosition,
        display: "",
        boxShadow: `6px 6px 6px 1px ${color.dark}`,
        border: "none",
    },
    header: {
        backgroundColor: color.primary,
        ...textheader
    },
    body: {
        backgroundColor: color.light,
        color: color.dark,
        ...textbody,
    },
    footer: {
        backgroundColor: color.primary,
        border: "none",
        ...rowItemsCenter
    },
    secondaryButton: {
        backgroundColor: color.danger,
        color: color.light,
    },
    cancelButton: {
        backgroundColor: color.primary,
        color: color.light,
        marginLeft: "48px",
        fontWeight: "bold"
    },
    hover: {
        secondaryButton: {
            border: `1px solid ${color.danger}`,
            color: color.danger.replace(")",",.7)"),
            fontWeight: "bold"
        },
        cancelButton: {
            backgroundColor: color.light,
            color: color.primary,
            marginLeft: "48px",
            fontWeight: "bold"
        }
    }
}

const inforeservedark = {
    id: "inforeservedark",
    cardcontainer: cardcontainer,
    card: {
        ...modalPosition,
        display: "",
        boxShadow: `6px 6px 6px 1px ${color.dark}`,
        border: "none"
    },
    header: {
        backgroundColor: color.dark,
        color: color.info,
        ...textheader
    },
    body: {
        backgroundColor: color.dark,
        color: color.info,
        ...textbody
    },
    footer: {
        backgroundColor: color.dark,
        ...rowItemsCenter
    },
    secondaryButton: {
        border: `1px solid ${color.danger}`,
        color: color.danger.replace(")",",.7)"),
    },
    cancelButton: {
        border: `1px solid ${color.info}`,
        color: color.info,
        marginLeft: "48px",
        fontWeight: "bold"
    },
    hover: {
        secondaryButton: {
            backgroundColor: color.danger,
            color: color.dark,
            fontWeight: "bold"
        },
        cancelButton: {
            backgroundColor: color.info,
            color: color.dark,
            marginLeft: "48px",
            fontWeight: "bold"
        }
    }
}

export {
    close,
    styleByDefault,
    cardsuccessligth,
    cardsuccessdark,
    historydeleteoneligth,
    historydeleteonedark,
    inforeserveligth,
    inforeservedark,
}