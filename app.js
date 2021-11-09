const express = require('express');
const app = express();

//MIDDLEWARE

app.use(express.static('public')); //Static files directory

//ROUTES

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/home', (request, response) => {
  response.sendFile(__dirname + '/views/home.html');
});

app.get('/about', (request, response) => {
  response.sendFile(__dirname + '/views/about.html');
});

app.get('/discography', (request, response) => {
  response.sendFile(__dirname + '/views/discography.html');
});

app.listen(3000, () => {
  console.log('Servidor activo en el puerto 3000');
});
