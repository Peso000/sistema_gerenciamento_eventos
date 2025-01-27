const joi = require("joi");

const schemas = {
    login: joi.object({
        email: joi.string().email().required(),
        senha: joi.string().required()
    }),

    cadastro: joi.object({
        nome: joi.string().max(50).required(),
        email: joi.string().email().required(),
        telefone: joi.string().required(),
        dtNascimento: joi.date().required(),
        cpf: joi.string().required(),
        senha: joi.string().required(),
        confSenha: joi.string().required()
    })
}

module.exports = schemas;