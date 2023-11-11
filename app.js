// Require Express
const express = require('express');
 
// Express server handling requests and responses
const app = express();
 
// Make everything inside of public/ available
app.use(express.static('public'));
 
// our first Route:
app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));
 
// about route:
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

// works route:
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

// works route:
app.get('/photo', (request, response, next) => response.sendFile(__dirname + '/views/photo.html'));
 
// Server Started
app.listen(3000, () => console.log('Listening on http://localhost:3000'));