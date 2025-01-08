const mongoose = require("mongoose");

const EventosScheme =  mongoose.Schema({
    nomeEvento: {type: String, required: true},
    descricaoEvento: {type: String, required: true, maxlength: 500},
    dtEvento: {type: Date, required: true},
    horarioEvento: {type: Date, require: true},
    valor: {type: Number, required: true},
    statusEvento: {
        type: String, 
        required: true,
        enum: [
            "Marcado",
            "Em Andamento",
            "Realizado",
            "Cancelado"
        ]
    },
    formato: {
        type: String, 
        required: true,
        enum: [
            "Online",
            "Presencial"
        ]
    },
    naturezaEvento: {
        type: String, 
        required: true,
        enum: [
            "Recreativo",
            "Academico"
        ]
    },
    tipoEvento: {
        type: String, 
        required: true,
        enum: [
            'Festa',
            'Show',
            'Festival',
            'Feira',
            'Exposição',
            'Competição',
            'Evento Esportivo',
            'Palestra',
            'Workshop',
            'Seminário',
            'Simpósio',
            'Congresso',
            'Hackathon',
            'Aula',
            'Conferência',
          ],
    },
    criador: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: "tipoCriador"
    },
    tipoCriador: {
        type: String,
        required: true,
        enum: ["Usuario", "Empresa"]
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Categorias",
    }
}, {timestamps: true});

module.exports = mongoose.model("Eventos", EventosScheme);