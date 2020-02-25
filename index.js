var express = require('express');
var app = express();

var port = 3000;

app.get('/', (request, response) => {
    return response.send('Hello World');
})

app.get('/users', (request, response) => {
    return response.send('<h1> My name is Hoang Thanh Luu </h1>');
})

app.listen(port, () => console.log('Server listening on port ' + port));