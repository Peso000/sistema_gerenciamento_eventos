const mongoose = require("mongoose");

const tpCategoriasScheme = mongoose.Schema({
    nomeCategoria: {type: String, required: true},
    descricaoCategoria: {type: String, require: true}
}, {timestamps: true});

module.exports = mongoose.model("Tipo_Categorias", tpCategoriasScheme);