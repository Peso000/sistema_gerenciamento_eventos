import React, { useState, useContext } from "react";
import style from "./login.module.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import api from "../../api";

const Login = () =>{
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msgErro, setMsgErro] = useState();
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();

        setMsgErro(null);

        try{
            const response = await api.post('usuarios/login', { email, senha });
            setUser({id: response.data.id, nome: response.data.nome, logado: response.data.logado});
            navigate("/");
        }catch(erro){
            if(erro.response?.status === 401){
                setMsgErro("Email ou senha inválido");
            }else{
                setMsgErro("Erro ao fazer login, tente novamente mais tarde");
            }
        }
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
                    <div className={style.cadastroTrocarSenha}>
                        <p onClick={() => navigate("/recuperacao")}>Esqueceu sua senha?</p>
                        <p onClick={() => navigate("/cadastro")}>Cadastre-se</p>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Login;