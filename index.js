const express  = require('express');
const app = express();

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

app.listen(3000, () => {
    console.log("server running on 3000");
});

