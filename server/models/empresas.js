const mongoose = require("mongoose");

const empresasScheme = mongoose.Schema({
    razaoSocial: {type: String, required: true},
    ramoAtuacao: {type: String, required: true},
    cnpj: {type: Number, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    telefone: {type: String, required: true, unique: true},
    senha: {type: String, required: true}
}, {timestamps: true});

module.exports = mongoose.model("Empresas", empresasScheme);