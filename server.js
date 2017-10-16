const express    = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let murals = require('./routes/murals')
let neighborhoods = require('./routes/neighborhoods')
let artists = require('./routes/artists')
let tours = require('./routes/tours')

app.use('/routes/murals', murals);
app.use('/routes/neighborhoods', neighborhoods);
app.use('/routes/artists', artists);
app.use('/routes/tours', tours);

app.listen(process.env.PORT || 8080);
console.log('Woot, server started');
