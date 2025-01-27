import React, { useState } from "react";

const InputTel = ({ defineTel, validaCampos}) =>{
    const [telefone, setTelefone] = useState("");
    
    const handleChange = (e) =>{
        let input = e.target.value.replace(/\D/g, "");

        if(telefone.length <= 14){
            input = input
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d{4})/, "$1-$2")
        }

        defineTel({telefone: input});
        setTelefone(input);
    }

    return(
        <input type="text" name="telefone" maxLength={14} onBlur={validaCampos} value={telefone} onChange={(e) => handleChange(e)}/>
    )
}

export default InputTel;