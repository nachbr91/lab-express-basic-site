const exp = require('constants');

const express = require('express');

const app = express();

//MIDDLEWARE

app.use(express.static('views')); //Static files directory

app.use(express.static('public')); //Static files directory

//ROUTES

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/views/about.html', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/views/works.html', (request, response) => {
  response.sendFile(__dirname + '/views/works.html');
});

app.get('/views/gallery.html', (request, response) => {
  response.sendFile(__dirname, '/views/gallery.html');
});

app.listen(3000, () => {
  console.log('Servidor activo en el puerto 3000');
});
