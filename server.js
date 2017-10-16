const express    = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure ejs for templating
app.set('view engine', 'ejs');


let murals = require('./routes/murals')
let neighborhoods = require('./routes/neighborhoods')
let artists = require('./routes/artists')
let tours = require('./routes/tours')

app.use('/routes/murals', murals);
app.use('/routes/neighborhoods', neighborhoods);
app.use('/routes/artists', artists);
app.use('/routes/tours', tours);


// TODO - delete after deploying to production
app.get('/', (req, res, next) => {
  res.send('hello world');
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT\}`);
});

module.exports = app;
