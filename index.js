const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();
const port = 3000 || process.env.PORT;
const routes = require('./routes/routes');


mongoose.connect('mongodb://root:mongohacks42@ds253889.mlab.com:53889/palyhacks')


app.use(express.static('public'));

// for parsing application/json 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//application routes
app.use('/', routes);

app.listen(port, () => {
    console.log(`App is running on ${port}`);
});

