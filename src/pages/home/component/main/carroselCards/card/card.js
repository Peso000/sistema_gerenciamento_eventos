import React from "react";
import style from "./card.module.css";

const Card = (props) =>{
    return(
        <div className={`${style.card} ${props.estaEmFoco ? style.foco : style.foraFoco}`}>
            <img src={props.caminho} alt={props.alt}></img>
            <h4>{props.titulo}</h4>
            <p>{props.local}</p>
        </div>
    )
}

export default Card;