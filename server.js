const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// configure ejs for templating
app.set('view engine', 'ejs');


const murals = require('./routes/murals')
const neighborhoods = require('./routes/neighborhoods')
const artists = require('./routes/artists')
const tours = require('./routes/tours')

app.use('/murals', murals);
app.use('/neighborhoods', neighborhoods);
app.use('/artists', artists);
app.use('/tours', tours);


// sets up initial page
app.get('/', (req, res, next) => {
  res.render('server');
});

//routes to log-in page
app.get('/new', (req, res, next) => {
  res.render('server/new');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
