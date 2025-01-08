import React from "react";
import style from "./pesquisa.module.css"

const Pesquisa = () =>{
    return(
        <div className={style.pesquisa}>
            <form>
                <div>
                    <input type="text" placeholder="Pesquise" id={style.barraPesquisa}></input>
                    <button type="submit" id={style.btnEnviar}><img src="/img/lupa.png" className={style.lupa} alt="Icone-lupa"></img></button>
                </div>
            </form>
        </div>
    )
}

export default Pesquisa