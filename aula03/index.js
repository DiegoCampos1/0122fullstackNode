const moment = require('moment')
const pokemons = require('./meuModolo.js')

console.log(moment().format('MM DD YY'));

pokemons.addPokemon({a:'test ao vivo 2'})

console.log(pokemons.pokemons);