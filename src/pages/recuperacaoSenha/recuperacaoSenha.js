import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./recuperacao.module.css";
import axios from "axios";

const RecuperacaoSenha = () =>{
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msgErro, setMsgErro] = useState();
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
     
    }
    return(
        <div className={style.container}>
            <div className={style.caixaLogin}>
                <div className={style.titulo}>
                    <h1 className={style.logo}>Eventos</h1>
                </div>
                <div className={`${msgErro ? style.erro: style.semErro}`}>
                    <p>{msgErro}</p>
                </div>
                <form onSubmit={handleSubmit} className={style.login}>
                    <div className={style.inputs}>
                        <div>
                            <p>E-mail:</p>
                            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div>
                            <p>Senha:</p>
                            <input type="text" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
                        </div>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default RecuperacaoSenha;