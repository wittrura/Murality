const express    = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let index = require('./routes/index')

app.use('/routes/index', index);

app.listen(process.env.PORT || 8080);
console.log('Woot, server started');
