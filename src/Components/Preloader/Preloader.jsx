import React from "react";
import preloader from "../../assets/images/preloader.svg"
import classes from "./preloader.module.css"

function Preloader() {
    return (
        <span>
        <img src={preloader} alt=""/>
    </span>
    )
}

export default Preloader;