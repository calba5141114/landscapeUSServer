const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.static('public'));

// for parsing application/json 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html');
});

app.post('/formData', (request, response) => {
    console.log(request.body);
    console.log(request.body.say);
    response.sendFile(__dirname + '/public/home/home.html');
});

app.get('*', (request, response) => {
    response.sendFile(__dirname + '/public/404page/404.html');
});

app.listen(port, () => {
    console.log(`App is running on ${port}`);
});

