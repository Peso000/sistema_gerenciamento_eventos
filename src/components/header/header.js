import React, { useEffect } from "react";
import { useContext } from "react";

import Pesquisa from "./pesquisa/pesquisa";
import Navegacao from "./botaoLogin/botaoLogin";
import style from "./header.module.css";
import { UserContext } from "../../context/userContext";

const Header = ({ titulo }) =>{
    const { user } = useContext(UserContext);

    useEffect(() =>{
        document.title = titulo
    }, [titulo])

    return(
        <div className={style.header}>
            <h1 className={style.logo}>eventos</h1>
            <Pesquisa />
            <Navegacao logado={user.logado} />
        </div>
    )
}

export default Header;