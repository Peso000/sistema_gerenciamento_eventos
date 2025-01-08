const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/gerenciamento-eventos",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Está conectado!!"))
.catch((err) => console.log("Não foi possivel conectar, erro:" + err))