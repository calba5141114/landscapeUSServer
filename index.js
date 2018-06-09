const express  = require('express');
const app = express();
const port = 3000 || process.env.PORT;

app.use(express.static('public'));

app.get('/', (request, response)=>{
    response.sendFile(__dirname +  '/public/index.html');
});

app.get('/utter', (request, response)=>{
    response.send("Utter");
});

app.get('*', (request,response)=>{
    response.send("404");
});

app.listen( port , () => {
    console.log(`App is running on ${port}`);
});

