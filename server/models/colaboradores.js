const mongoose = require("mongoose");

const colaboradoresScheme = mongoose.Schema({
    dtInicioParticipacao: {type: Date, required: true},
    dtFimParticipacao: {type: Date, required: true},
    descricaoParticipacao: {type: String, required: true},
    tpParticipacao: {
        type: String,
        required: true,
        enum: [
            "Patrocinador",
            "Organizador",
            "Expositor",
            "Parceiro"
        ]
    },
    fkEvento: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Eventos"
    },
    fkEmpresa: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Empresas"
    }
}, {timestamps: true});

module.exports = mongoose.model("Colaboradores", colaboradoresScheme);