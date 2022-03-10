const pokemons = [
  {
    id: 1,
    nome: 'Eevee',
    tipo: 'normal',
    registro: 133,
    CP: 300,
  },
  {
    id: 2,
    nome: 'Charmander',
    tipo: 'fire',
    registro: 004,
    CP: 500,
  },
  {
    id: 3,
    nome: 'Abra',
    tipo: 'psíquico',
    registro: 063,
    CP: 350
  }
];

const addPokemon = (pokemon) => pokemons.push(pokemon)

// Maneira mais comum de se exportar um modulo:
module.exports = {pokemons, addPokemon};