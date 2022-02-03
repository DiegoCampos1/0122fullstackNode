const fs = require('fs')

const caminhoTxt = __dirname + '/arquivo.txt'
const caminhoJson = __dirname + '/arquivo.json'

const conteudoDoArquivoTxt = fs.readFileSync(caminhoTxt, 'utf-8')
const conteudoDoArquivoJson = fs.readFileSync(caminhoJson, 'utf-8')

console.log('conteudoDoArquivoTxt: ', conteudoDoArquivoTxt)
console.log('conteudoDoArquivoJson: ', conteudoDoArquivoJson)