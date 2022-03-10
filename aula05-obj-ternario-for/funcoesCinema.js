const catalago = require('./database/catalogo.json');

const novoFilme = {
  codigo: 3,
  titulo: 'Homem-Aranha: Sem Volta para Casa',
  duracao: 150,
  atores: ['Tom Holland', 'Zendaya', ' Benedict Cumberbatch'],
  lancamento: 2021,
  emCartaz: true,
};

const adicionaFilme = (filme) => {
  catalago.push(filme);
};

adicionaFilme(novoFilme);

const listarFilmesEmCartaz = (arrayDeFilmes) => {
  for (i = 0; i < arrayDeFilmes.length; i++) {
    if (arrayDeFilmes[i].emCartaz === true) {
      console.log(arrayDeFilmes[i]);
    }
  }
};

function procuraFilmePeloCodigo(id) {
  return catalago.find((filme) => filme.codigo === id);
}

function modificaStatusEmCartaz(id) {
  const auxiliar = procuraFilmePeloCodigo(id);
  auxiliar.emCartaz === true
    ? (auxiliar.emCartaz = false)
    : (auxiliar.emCartaz = true);
  console.log(auxiliar);
}

modificaStatusEmCartaz(1);

// listarFilmesEmCartaz(catalago)
