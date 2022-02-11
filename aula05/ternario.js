const verificaNumeroMaiorQue100 = (numero) => {
  if(numero > 100) {
    console.log("Maior do que 100")
  } else {
    console.log("menor do que 100")
  }
}

const verificaNumeroMaiorQue100Ternario = (numero) => {
  numero > 100 ? console.log("Maior do que 100") : numero > 200;
}

// verificaNumeroMaiorQue100(99)
// verificaNumeroMaiorQue100(101)

verificaNumeroMaiorQue100Ternario(99)

verificaNumeroMaiorQue100Ternario(101)
