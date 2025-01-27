import React, { useContext } from "react";
import style from "./botaoLogin.module.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import api from "axios";

const Logado = () =>{
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const logout = () =>{
        api.post("usuarios/logout", {id: user.id});
        sessionStorage.clear();
        window.location.reload();
    }

    return(
        <ul className={style.navegacao}>
            <li><p>Perfil</p></li>
            <li><p onClick={logout}>Logout</p></li>
            <li><p>Contate-nos</p></li>
        </ul>
    )
}

const Deslogado = () =>{
    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/login");
    }

    return(
        <ul className={style.navegacao}>
            <li><p onClick={handleClick}>Login</p></li>
            <li><p>Contate-nos</p></li>
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