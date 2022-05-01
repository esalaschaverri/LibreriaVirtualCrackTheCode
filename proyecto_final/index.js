var path = require("path"); // Incluyo Path
var express = require("express"); // Incluyo Express
var app = express(); // Inicializo Express

var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://crackthecode:Crack1234@crackthecode.6rl4z.mongodb.net/Proyecto?retryWrites=true&w=majority");

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Asigno la carpeta definida a Express
app.use("/libros", require("./api/libros.js"));
app.use("/autores", require("./api/autores.js"));
app.use("/calificaciones", require("./api/calificaciones.js"));
app.use("/generos", require("./api/generos.js"));
app.use("/resenas", require("./api/resenas.js"));
app.use("/retiros", require("./api/retiros.js"));
app.use("/socios", require("./api/socios.js"));
app.use("/tarjetas", require("./api/tarjetas.js"));
app.use("/usuarios", require("./api/usuarios.js"));
app.use("/costos", require("./api/costos.js"));
app.use("/descuentos", require("./api/descuentos.js"));
app.use("/frecuentes", require("./api/frecuentes.js"));
app.use("/contactos", require("./api/contactos.js"));
app.use("/ordenes", require("./api/ordenes.js"));
app.use("/montos", require("./api/montos.js"));


app.listen(5000, function(){
    console.log("Servidor Corriendo");
}); // Levanto el servidor en el puerto 5000