const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();
const port = 3000 || process.env.PORT;
const routes = require('./routes/routes');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// connect to mongo db
mongoose.connect('mongodb://root:mongohacks42@ds253889.mlab.com:53889/palyhacks');
const db = mongoose.connection;


//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

//use sessions for tracking logins
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: db
    })
  }));

// for parsing application/json 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// using our static files
app.use(express.static('public'));

//application routes
app.use('/', routes);


// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });
  

app.listen(port, () => {
    console.log(`App is running on ${port}`);
});

