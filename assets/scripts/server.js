'use strict';
let express = require('express');
let app = express();
let port = 3000;
app.use(express.json());

/**
 *
 * Retorna um objeto default para enviar como resposta.
 */
function defaultResponse() {
  return {
    name: 'Mundo',
  };
}

/**
 *
 * Define um filtro a ser executado automaticamente a cada requisição
 * É usada para tratar o problema de Same-Origin-Policy, ou seja, quando o browser impede que um arquivo JS
 * originado de um servidor X tente acessar um endereço de um servidor Y.
 */
app.use(function (req, res, next) {
  // Website que você permite acesso a estes serviços - * siginifica qualquer um
  res.setHeader('Access-Control-Allow-Origin', '*');

  // define os métodos permitidos
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // define os cabeçalhos aceitos nas requisições
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type'
  );

  // Encaminha a requisição para a próxima camada do middleware, ou seja, para o método que irá tratar de fato a requisição
  next();
});

/**
 *
 * Trata requisições GET para o caminho raiz
 * Retorna um JSON com a resposta padrão.
 */
app.get('/', (req, res) => {
  let content = defaultResponse();
  res.json(content);
});

/**
 *
 * Trata requisições GET para o caminho /albums
 * Se o cliente enviar um parâmetro, este será replicado na resposta em formato JSON.
 * Caso contrário, será enviada uma resposta padrão.
 */
app.get('/albums', (req, res) => {
  let param = req.query.nome;
  let content = null;
  if (param == null || param == undefined) {
    content = defaultResponse();
  } else {
    content = {
      name: param,
    };
  }

  res.json(content);
});

/**
 * Experimento com uma rota POST.
 * Recebe um JSON e retorna um JSON ao cliente.
 */
app.post('/albums', (req, res) => {
  let json = req.body;
  console.log(json);
  res.json(json);
  ///res.json({ 'um-objeto': 100 });
});

/**
 *
 * Trata requisições GET para o caminho /albums
 * Usa o formato de API REST para parâmetros, onde o mesmo faz parte do caminho requisitado.
 * Ex.: /albums/Roni é diferente da forma comum de passagem de parâmetros /albums?nome=Roni
 * Esse método somente é chamado se houver parâmetro no caminho requisitado.
 */
app.get('/albums/:id', (req, res) => {
  let content = {
    name: req.params.username,
  };
  res.json(content);
});

/**
 *
 * Gera um erro no lado do servidor.
 */
app.get('/error', (req, res) => {
  res.status(500).send('Alguma coisa deu errado!!!');
});

/**
 *
 * Inicia o servidor na porta especificada.
 */
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log('Para derrubar o servidor: ctrl + c');
});
