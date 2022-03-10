let variavelAuxiliar = 0;


function soma(a, b, c) {
  variavelAuxiliar = a + b + c;
}

soma(2, 3, 5);

// console.log(variavelAuxiliar);

//Funcao com retorno
function soma2(x, z = 10) {
  //Usa valor padrão definido aqui se não for passado nenhum.
  return x + z;
}

// console.log(soma2(1, 2));
// console.log(soma2(1));


//Armazenar uma função em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a+b)
}

imprimirSoma(2, 3)