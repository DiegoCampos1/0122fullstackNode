const numeros = [1, 11, 15, 12, 2, 99, 23];

const verificaSeEPar = (numero) => numero % 2 === 0; // essa vai ser minha funcao de callBAck

const resultado = numeros.filter(verificaSeEPar)

console.log(resultado)
console.log(numeros)