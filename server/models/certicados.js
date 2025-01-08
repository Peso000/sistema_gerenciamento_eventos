const mongoose = require("mongoose");

const certificadosScheme = mongoose.Schema({
    dtConclusao: {type: Date, required: true},
    fkUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Usuarios"
    },
    fkEventos: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Eventos"
    }
}, {timestamps: true});

module.exports = mongoose.model("Certificados", certificadosScheme);