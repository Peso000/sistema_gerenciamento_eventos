const mongoose = require("mongoose");

const eventosCategoriasScheme = mongoose.Schema({
    fkCategorias: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Categorias"
    },
    fkEventos: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Eventos"
    }
}, {timestamps: true})

module.exports = mongoose.model("EventosCategorias", eventosCategoriasScheme);