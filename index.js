const express = require("express");
const app = express();
const port= 3500;
const mongoose = require("mongoose");

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port} correctamente`);
});

mongoose.connect("mongodb+srv://camilaAcosta:<f3zTArPonOUsUxUZ>@cluster0.5mqfe2a.mongodb.net/?retryWrites=true&w=majority", {
    serverSelectionTimeoutMS:0, // Defaults to 30000 (30 seconds)
}) 
.then((con) => {
    console.log("Conectado a la DB");
});