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



// Método que imprime sección raiz
app.get('/', (req, res)=> {
    res.send('Welcome API!');
});


// Método que imprime estudiantes en formato JSON
app.get('/api/students', (req, res) => {
    res.send(students);
});


// Método que busca un estudiante y lo imprime 
app.get('/api/students/:id', (req, res) => {
    const student = students.find(c => c.id === parseInt(req.params.id));
    if (!student) return res.status(404).send('No se encontro el estudiante');
    else res.send(student);
});


// Método que agrega elementos al vector estudiantes 
app.post('/api/students', (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        enroll: (req.body.enroll === 'true')
    };

    students.push(student);
    res.send(student);
});



// Método que elimina un elemento en vector estudiantes
app.delete('/api/students/:id', (req, res) => {

    // Buscar estudiante
    const student = students.find(c => c.id === parseInt(req.params.id));
    // Si no existe 
    if (!student) return res.status(404).send('Estudiante no encontrado');
    // Indice del estudiante
    const index = students.indexOf(students);
    // Borrar mediante comando splice
    students.splice(index, 1);
    // Imprimir 
    res.send(student);
});


// Configurar puerto a escuchar
const port = process.env.port || 80;
// Imprimir confirmación de escucha 
app.listen(port, () => console.log(`Escuchando en puerto ${port}...`))

