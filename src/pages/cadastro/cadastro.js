import React, {useState, useEffect} from "react";
import style from "./cadastro.module.css";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import InputCpf from "./components/inputCpf";
import InputTel from "./components/inputTelefone";
import axios from "axios";
import moment from "moment";

const Cadastro = () =>{
    const [msgErro, setMsgErro] = useState([ ]);
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [btnAtivo, setBtnAtivo] = useState(false);
    const [confSenhaVisivel, setConfSenhaVisivel] = useState(false);
    const [campValid, setCampValid] = useState({
        nome: false,
        email: false,
        dtNascimento: false,
        cpf: false,
        telefone: false,
        senha: false,
        confSenha: false
    });
    const [valForm, setValForm] = useState({
        nome: "",
        email: "",
        dtNascimento: "",
        cpf: "",
        telefone: "",
        senha: "",
        confSenha: ""
    });

    const mensagensErro = {
        "Preencha o campo confSenha": "Preencha o campo de confirmação da senha",
        "Preencha o campo dtNascimento": "Preencha a data de nascimento"
    }

    const navigate = useNavigate();

    useEffect(() =>{
        if (campValid && typeof campValid === "object") {
            const allvalid = Object.values(campValid).every((valid) => valid);
            setBtnAtivo(allvalid);
        }
    }, [campValid]);

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setValForm({
            ...valForm,
            [name]: value
            });
    }

    const defineCampos = (valor) =>{
        setValForm({...valForm, ...valor});
    }

    const handleErro = (erro, tirar = false) =>{
        if(!tirar){
            setMsgErro([...msgErro, erro]);
        }else{
            setMsgErro((prev) => (prev.filter(msg => msg !== erro)));
        }
    }

    const visibilideSenhas = (e, value) =>{
        const { name } = e.currentTarget;
   
        if(name === "senha"){
            setSenhaVisivel(value);
        } else{
            setConfSenhaVisivel(value);
        }
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            await axios.post("usuarios/cadastro", valForm);
            navigate("/login");
        }catch(error){
            console.log(error.response.data)
            setMsgErro([...msgErro, error.response.data]);
        }
    }

    const validaIdade = (e) =>{
        const { name } = e.target;
        const nascimento = moment(valForm[name]);
        const diferenca = moment().diff(nascimento, "days", true);

        console.log(diferenca);

        if(diferenca < 4380 && !msgErro.includes("Data de nascimento inválida")){
            setCampValid((prev) => ({...prev, dtNascimento: false}));
            setMsgErro([...msgErro, "Data de nascimento inválida"]);
        }else{
            setCampValid((prev) => ({...prev, dtNascimento: true}));
            setMsgErro((prev) => (prev.filter((msg) => msg !== "Data de nascimento inválida")))
        }
    }

    const validaSenhas = (e) =>{
        const { name } = e.target;
        const { senha, confSenha } = valForm;


        if((name === "senha" || name === "confSenha") && confSenha.length !== 0){
            if(senha.length === 0 || senha !== confSenha){
                if(!msgErro.includes("Senhas incompatíveis")) setMsgErro([...msgErro, "Senhas incompatíveis"]);
                setCampValid((prev) => ({...prev, senha: false, confSenha: false}));
            }else{
                setCampValid((prev) => ({...prev, senha: true, confSenha: true}));
                setMsgErro((prev) => (prev.filter((msg) => msg !== "Senhas incompatíveis")))
            }
        }
    }

    const excluiErro = (e) =>{
        const pai = e.currentTarget.parentNode;
        const erro = pai.querySelector("p").innerText;

        setMsgErro((prev) => (prev.filter((msg) => msg !== erro)))
    }

    const validaEmail = (e) =>{
        const { value } = e.target;
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        if(value.length > 3){
            if(regex.test(value)){
                setCampValid((prev) => ({...prev, email: true}));
                setMsgErro((prev) => (prev.filter((msg) => msg !== "E-mail inválido")))
            }else{
                setCampValid((prev) => ({...prev, email: false}));
                if(!msgErro.includes("E-mail inválido")) setMsgErro([...msgErro, "E-mail inválido"]);
            }
        }
    }

    const validaCampos = (e) =>{
        const { name } = e.target;
        const value = valForm[name];

        setCampValid((prev) =>{
            const updated = { ...prev };
            
            if(!value || value.trim().length === 0){
                updated[name] = false;

                if(!msgErro.includes(`Preencha o campo ${name}`)){
                    setMsgErro([...msgErro, `Preencha o campo ${name}`]);
                }
            }else{
                updated[name] = true;
                setMsgErro((prev) => prev.filter((msg) => msg !== `Preencha o campo ${name}`))
            }

            return updated;
        })

        if(name === "dtNascimento") validaIdade(e);
        if(name === "senha" || name === "confSenha") validaSenhas(e);
        if(name === "email") validaEmail(e);
    }

    return(
        <div className={style.container}>
            <div className={style.containerError}>
                { msgErro.map((erro, index) =>(
                <div className={style.boxError} key={index}>
                    <div className={style.error}>
                        <div className={style.icoError}>
                            <MdErrorOutline />
                        </div>
                        <div className={style.textError}>
                            <p>
                                {mensagensErro[erro] || erro}
                            </p>
                        </div>
                    </div>
                    <button onClick={excluiErro} className={style.btnClose}><IoMdCloseCircleOutline /></button>
                </div>
                ))}
            </div>
            <div className={style.caixaCadastro}>
                <div className={style.titulo}>
                    <h1 className={style.logo}>Eventos</h1>
                </div>
                <form onSubmit={handleSubmit} className={style.cadastro}>
                    <div className={style.inputs}>
                        <div>
                            <p>Nome:</p>
                            <input type="text" name="nome" value={valForm.nome} onBlur={validaCampos} onChange={handleChange}></input>
                        </div>
                        <div>
                            <p>E-mail:</p>
                            <input type="text" name="email" value={valForm.email} onBlur={validaCampos} onChange={handleChange}></input>
                        </div>
                        <div className={style.telefoneNascimento}>
                            <div>
                                <p>Telefone:</p>
                                <InputTel validaCampos={validaCampos} defineTel={defineCampos}/>
                            </div>
                            <div>
                                <p>Data de Nascimento:</p>
                                <input type="date" name="dtNascimento" onBlur={validaCampos} value={valForm.dtNascimento} onChange={handleChange}></input>
                            </div>
                        </div>
                        
                        <div>
                            <p>CPF:</p>
                            <InputCpf setCampValid={setCampValid} campValid={campValid} erros={msgErro} defineCPF={defineCampos} defineErro={handleErro} />
                        </div>
                        <div>
                            <p>Senha:</p>
                            <div className={style.inputSenha}>
                                <input type={`${senhaVisivel ? "text" : "password"}`} name="senha" onBlur={validaCampos} value={valForm.senha} onChange={handleChange}></input>
                                <button type="button" className={style.mostrarSenha} name="senha" onMouseDown={(e) => visibilideSenhas(e, true)} onMouseUp={(e) => visibilideSenhas(e, false)}><FaEye /></button>
                            </div>
                        </div>
                        <div>
                            <p>Confirme sua senha:</p>
                            <div className={style.inputSenha}>
                                <input type={`${confSenhaVisivel ? "text" : "password"}`} name="confSenha" onBlur={validaCampos} value={valForm.confSenha} onChange={handleChange}></input>
                                <button type="button" className={style.mostrarSenha} name="confSenha" onMouseDown={(e) => visibilideSenhas(e, true)} onMouseUp={(e) => visibilideSenhas(e, false)}><FaEye /></button>
                            </div>
                        </div>
                    </div>
                    <button type="submit" disabled={btnAtivo ? false : true} className={`${style.btnCadastrar} ${btnAtivo ? "" : style.desabilitado}`}>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Cadastro;