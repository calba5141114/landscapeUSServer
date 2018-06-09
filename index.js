const express  = require('express');
const app = express();

app.get('/', (request, response)=>{
    response.send("Hello World");
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

