const mongoose = require("mongoose");

const tokensScheme = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        required:true,
        ref: "Usuarios"
    },
    token: {type: String, required: true},
    expireIn: {
        type: Date,
        required: true,
        expires: 0 //Exclui o registro quando chegar o tempo
    },
})

module.exports = mongoose.model("Tokens", tokensScheme);