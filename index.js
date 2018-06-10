const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();
const port = 3000 || process.env.PORT;
const routes = require('./routes/routes');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
path = require('path');

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
app.use(bodyParser.urlencoded({ extended: false }));

// using our static files,routes and ejs view engine 
app.use(express.static('public'));
app.use('/', routes);
app.set('views', path.join(__dirname, 'public/views'))
app.set('view engine', 'ejs');

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});


app.listen(port, () => {
  console.log(`App is running on ${port}`);
});

