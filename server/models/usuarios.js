const mongoose = require("mongoose");

const usuarioScheme = mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true},
    cpf: {type: Number, required: true, unique: true},
    telefone: {type: String, required: true, unique: true},
    senha: {type: String, required: true},
    dtNascimento: {type: Date, required: true}
}, {timestamps: true});

module.exports = mongoose.model("Usuarios", usuarioScheme);