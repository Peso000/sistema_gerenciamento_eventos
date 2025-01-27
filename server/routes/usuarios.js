const express = require("express");
const router = express.Router();
const usuarios = require("../models/usuarios");
const blacklist = require("../models/blacklist");
const jwt = require("jsonwebtoken");
const moment = require("moment");
const cripto = require("bcrypt");
const SECRET = "SisteMa-d3-Gestão-3venT0s";
const validation = require("../middlewares/validationRequest");
const schemes = require("../validationSchemes");
const verificaExistenciaUser = require("../middlewares/verificaExistenciaUser");

const generatorRefreshToken = (user) =>{
    return jwt.sign({userId: user}, SECRET, {expiresIn: 30000});
}

router.get('/', async (req, res) =>{
    //res.send(req.headers['validation']) //teste de uma possivel validação posterior

    res.send(await usuarios.find({})).status(200);
});

router.get('/:id', async (req, res) =>{
    try{
        res.send(await usuarios.findById(req.params.id));
    }catch(err){
        res.send("Erro ao mostrar usuario");
    }
})

router.post('/cadastro', validation(schemes.cadastro), verificaExistenciaUser, async (req, res) =>{
    const { nome, email, cpf, telefone, senha, dtNascimento } = req.body;

    try{
        const senhaCriptografada = await cripto.hash(senha, 10);
                                    
        let usuario = new usuarios({ 
            nome: String(nome), 
            email: String(email), 
            cpf: String(cpf), 
            telefone: String(telefone), 
            senha: senhaCriptografada, 
            dtNascimento: new Date(dtNascimento)
        });
 
        await usuario.save();
        res.status(200).send("Cadastrado com sucesso!!");
    }catch(err){
        console.log(err)
        res.status(500).send("Não foi possivel fazer o cadastro, tente mais tarde");
    }
});

router.post('/login', async (req, res) =>{
const { email, senha } = req.body;

    try{
        const user = await usuarios.findOne({email: String(email), senha: String(senha)});
        const response = {id: user.id, nome: user.nome, logado: true}
        const acessToken = jwt.sign({userId: user.id}, SECRET, {expiresIn: 900});
        const refreshToken = generatorRefreshToken(user.id);
        
        res.cookie("acessToken", acessToken, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 15 * 60 * 1000
        })

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 10 * 60 * 60 * 1000
        })

        res.status(200).send(response);
    }catch(err){
        res.status(401).send({erro: "Usuario não encontrado"});
        console.log(err);
    }
})

router.post("/logout", async (req, res) =>{
    const data = moment().add(7, "days");
    const refreshToken = req.headers.cookie.split('; ')
    .find(cookie => cookie.startsWith("refreshToken="))
    ?.split("=")[1];

    const list = new blacklist({
        userId: req.body.id, 
        token: refreshToken, 
        expireIn: data.format("YYYY/MM/DD hh:mm:ss")
    });
    
    try{
        await list.save();
        res.status(200).send()
    }catch(erro){
        res.status(500).send("Ocorreu uma falha no servidor");
        console.log(erro)
    }
})

module.exports = router;