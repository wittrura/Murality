const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('cookie-session');

const murals = require('./routes/murals');
const neighborhoods = require('./routes/neighborhoods');
const artists = require('./routes/artists');
const tours = require('./routes/tours');
const users = require('./routes/users');
const auth = require('./routes/auth');
const photos = require('./routes/photos');

// forms handling
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

// configure ejs for templating
app.set('view engine', 'ejs');

// authorization
app.use(cookieParser());
app.use(session({
  keys: ["dskjf0qi340oij2k3j93387dlk@#$", "@#$WFEW#$CFDSdsfdsdlkajhi"],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

// routes
app.use('/murals', murals);
app.use('/neighborhoods', neighborhoods);
app.use('/artists', artists);
app.use('/photos', photos);
app.use('/tours', tours);
app.use('/users', users);
app.use('/auth', auth);

// CSS directory
app.use("/css",express.static(__dirname + "/css"));


// sets up initial page
app.get('/', (req, res, next) => {
  res.render('main', {
    user: req.session.user
  });
});

//routes to log-in page
app.get('/login', (req, res, next) => {
  res.render('auth/login');
});

//routes to signup page
app.get('/signup', (req, res, next) => {
  res.render('users/signup');
});

// routes not found
app.use((req, res) => {
  res.sendStatus(404);
});

// internal server errors
app.use((err, req, res, next) => {
  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }
  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
