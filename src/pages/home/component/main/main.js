import React from "react";
import style from "./main.module.css";
import Carrosel from "./carroselCards/carroselCards";

const Main = () =>{
    return(
        <div className={style.secao}>
            <div className={style.main}>
                <Carrosel />
            </div>
        </div>
    )
}

export default Main