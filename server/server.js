require('dotenv').config();

const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , mailer = require('./mail');
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../build`));

app.post('/api/email', mailer.mail);

const { SERVER_PORT } = process.env;
app.listen(SERVER_PORT, () => {
    console.log(`Now listening on ${SERVER_PORT}. Have a nice day`)
})