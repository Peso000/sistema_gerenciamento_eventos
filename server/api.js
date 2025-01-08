const express = require("express");
const usuarios = require("./routes/usuarios");
const port = 5000;
require("./database");

const app = express();

app.use(express.json());
app.use("/usuarios", usuarios);


app.listen(port, () =>{
    console.log(`O sevidor está rodando, na porta ${port}!!`);
})