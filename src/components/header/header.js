import React, { useEffect } from "react";

import Pesquisa from "./pesquisa/pesquisa";
import Navegacao from "./botaoLogin/botaoLogin";
import style from "./header.module.css";

const Header = ({ titulo }) =>{
    useEffect(() =>{
        document.title = titulo
    }, [titulo])

    return(
        <div className={style.header}>
            <h1 className={style.logo}>eventos</h1>
            <Pesquisa />
            <Navegacao logado={true} />
        </div>
    )
}

export default Header;