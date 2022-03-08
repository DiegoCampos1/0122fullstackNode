const express = require('express');
const bodyParser = require('body-parser');

const server = express();

const jsonParser = bodyParser.json();

let usuarios = [{ id: 1, nome: 'Diego', sobreNome: 'Campos' }];

server.get('/usuarios', (req, res) => {
  return res.json(usuarios);
});

server.get('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  const usuarioPorId = usuarios.filter((usuario) => usuario.id == id);
  console.log(usuarioPorId);
  return res.send(usuarioPorId);
});

server.post('/usuarios', jsonParser, (req, res) => {
  console.log(req.body);
  const novoUsuario = req.body;
  usuarios.push(novoUsuario);
  return res.send(usuarios);
});

server.put('/usuarios/:index', jsonParser, (req, res) => {
  const { index } = req.params; // recupera o index com os dados
  const { nome } = req.body;
  usuarios[index].nome = nome;
  return res.send(usuarios);
});

server.delete('/usuarios/:index', (req, res) => {
  const { index } = req.params; // recupera o index com os dados

  usuarios.splice(index, 1); // percorre o vetor até o index selecionado e deleta uma posição no array

  return res.send(usuarios);
});

server.listen(3000);