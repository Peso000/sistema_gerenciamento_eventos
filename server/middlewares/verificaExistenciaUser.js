const usuarios = require("../models/usuarios");

const verificaExistenciaUser = async (req, res, next) =>{
    try{
        const { email, cpf, telefone } = req.body;

        const val = await usuarios.findOne({
                            $or: [
                                {email: email},
                                {cpf: cpf}, 
                                {telefone: telefone}
                            ]
                        })

            console.log("Usuário encontrado:", val);

        if(val){
            return res.status(400).send("Não foi possivel fazer o cadastro pois o usuario já exite");
        }

        next();
    }catch(error){
        console.log(error);
        return res.status(500).send("Erro ao cadastrar usuário. Tente novamente mais tarde");
    }
}

module.exports = verificaExistenciaUser;