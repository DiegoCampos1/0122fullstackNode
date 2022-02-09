const pets = ['Coragem', 'Decidido', 'Duke', 'Brisa'];

// console.log(pets[2])

// Metodo PUSH - add na ultima posição do array
// pets.push('Margarida')
// console.log(pets)

//Unshift - add na primeira posição do array
// pets.unshift('Ventania', 'Polaco')
// console.log(pets)

// Pop - Remove a ultima posição de um array, e retorna este elemento
// const ultimoElemento = pets.pop()
// console.log(pets)
// console.log(ultimoElemento)

//indexOf - retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
// console.log(pets.indexOf('Duke'))

//Find()
const array1 = [5, 12, 130, 99, 44];

const primeiroElementoQueAtendeAcondicional = array1.find((element) => element > 50)

console.log(primeiroElementoQueAtendeAcondicional);
