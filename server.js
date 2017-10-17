const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

// configure ejs for templating
app.set('view engine', 'ejs');


const murals = require('./routes/murals');
const neighborhoods = require('./routes/neighborhoods');
const artists = require('./routes/artists');
const tours = require('./routes/tours');
const users = require('./routes/users');


app.use('/murals', murals);
app.use('/neighborhoods', neighborhoods);
app.use('/artists', artists);
app.use('/tours', tours);
app.use('/users', users);


// TODO - delete after deploying to production
app.get('/', (req, res, next) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = app;
