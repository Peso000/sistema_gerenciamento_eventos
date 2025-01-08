const mongoose = require("mongoose");

const inscricaoScheme = mongoose.Schema({
    dtInscricao: {type: Date, required: true},
    statusInscricao: {
        type: String,
        required: true,
        enum: [
            "Inscrito",
            "Compareceu"
        ]
    },
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

module.exports = mongoose.model("Inscricao", inscricaoScheme);