import React, { useState } from "react";

const InputCpf = ({ defineErro, erros, defineCPF, setCampValid, campValid }) =>{
    const [cpf, setCpf] = useState("");
    
    const handleChange = (e) =>{
        let valor = e.target.value.replace(/\D/g, "");

        if(cpf.length <= 12){
            valor = valor
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{2})/, "$1-$2");
        }

        defineCPF({cpf: valor});
        setCpf(valor);
    }

    const validaCPF = () =>{
        if(Number(cpf.length) === 14){
            defineErro("Digite o CPF completo", true);
            const cpfLimpo = cpf.replace(/\D/g, "");
            let pDigito = 0;
            let multiplicador = 10;

            for(let i=0; i<9; i++){
                pDigito += cpfLimpo[i] * (multiplicador);
                multiplicador--;
            }

            pDigito = (pDigito*10)%11;

            if(pDigito === Number(cpfLimpo[9])){
                let sDigito = 0;
                let multiplicador = 11;
                
                for(let i=0; i<10; i++){
                    sDigito += cpfLimpo[i] * (multiplicador);
                    multiplicador--;
                }
                
                sDigito = (sDigito*10)%11;

                if(sDigito !== Number(cpfLimpo[10])){
                    setCampValid({...campValid, cpf: false});

                    if(!erros.includes("CPF inválido")){
                        defineErro("CPF inválido");
                    }
                }else{
                    defineErro("CPF inválido", true);
                    setCampValid({...campValid, cpf: true});
                }
            }
        } else{
            setCampValid({...campValid, cpf: false});
            defineErro("Digite o CPF completo");
        }
    }

    return(
        <input type="text" value={cpf} maxLength={13} onBlur={validaCPF} onChange={handleChange}></input>
    )
}

export default InputCpf;