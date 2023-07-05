'use strict';

const express = require('express');
const app = express();
const port = 3003;


app.use(express.json());
const cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
  res.send('goodbye, world!');
});

app.post('/api/albums', (req, res) => {
  const dadosRecebidos = req.body;
  console.log('Dados recebidos:', dadosRecebidos);

  res.json({ mensagem: 'Requisição AJAX recebida com sucesso!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});