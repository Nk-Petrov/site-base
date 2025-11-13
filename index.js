/*
  Autor: @Nk Petrov
  Descrição: Configura o servidor principal usando Express.
*/

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

const port = 5014;

const mainrouter = require('./main.js');

app.enable('trust proxy');
app.set('json spaces', 2);
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

app.use('/', mainrouter);
app.use('/docs', mainrouter);
app.use('/suporte', mainrouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});