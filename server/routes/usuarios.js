const express = require("express");
const router = express.Router();
const usuarios = require("../models/usuarios");

router.get('/', async (req, res) =>{
    //res.send(req.headers['validation']) //teste de uma possivel validação posterior

    res.send(await usuarios.find({})).status(200);
});

router.get('/:id', async (req, res) =>{
    try{
        res.send(await usuarios.findById(req.params.id));
    }catch(err){
        res.send("Erro ao mostrar usuario!! erro: "+ err);
    }
})

router.post('/', async (req, res) =>{
    let { nome, email, cpf, telefone, senha, dtNascimento } = req.body;
    let usuario = new usuarios({ nome, email, cpf, telefone, senha, dtNascimento });

    try{
        await usuario.save();
        res.status(200).send("Enviado com sucesso!!");
    }catch(err){
        res.status(403).send("Não foi possivel cadastrar o usuario, erro: "+ err);
        console.log(err);
    }
});

module.exports = router;