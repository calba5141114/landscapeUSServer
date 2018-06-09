const express = require('express');
const router = express.Router();
const path = require("path");

router.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

router.post('/formData2', (request, response) => {
    console.log(request.body);
    console.log(request.body.say);
    response.sendFile(path.resolve(__dirname + '/../public/home/home.html'));
});

router.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname + '/../public/404page/404.html'));
});

module.exports = router;