/*
* Autor <jCarlos:Mendoza/>
* Código: index.js
* Fecha: 15/04/2023
*/


// Declaración de constantes 
const express = require('express');
const app = express();

// Utilizar librerías JSON
app.use(express.json());



// Vector de estudiantes
const students = [
    {id: 1, name: 'JCarlos', age: 20, enroll: true},
    {id: 2, name: 'Vianey', age: 20, enroll: true},
    {id: 3, name: 'Salomón', age: 2, enroll: false}
];



// Configurar puerto a escuchar
const port = process.env.port || 80;
// Imprimir confirmación de escucha 
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`))

