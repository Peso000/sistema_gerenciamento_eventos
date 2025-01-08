import React from "react"
import style from "./botaoLogin.module.css"

const Logado = () =>{
    return(
        <ul className={style.navegacao}>
            <li><a href="teste.js">Perfil</a></li>
            <li>|</li>
            <li><a href="teste.js">About</a></li>
            <li>|</li>
            <li><a href="teste.js">Contate-nos</a></li>
        </ul>
    )
}

const Deslogado = () =>{
    return(
        <ul className={style.navegacao}>
            <li><a href="teste.js">Login</a></li>
            <li>|</li>
            <li><a href="teste.js">Contate-nos</a></li>
        </ul>
    )
}

const Navegacao = (props) =>{
    if(props.logado){
        return <Logado />
    }
    return <Deslogado />
}

export default Navegacao