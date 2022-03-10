// 01 - Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.
// 02 - Função para buscar um estudante pelo nome e imprimir a situação dele em cada materia.
// >= 60 aprovado se nao reprovado
const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

// 01 - Nome completo de todos os estudantes que estudam no turno da manhã.

const retornaNomeCompletoManha = (arrayDeEstudantes) => {
  const estudanteManha = arrayDeEstudantes.filter(
    (estudante) => estudante.turno === 'Manhã'
  );
  console.log(
    estudanteManha.map(
      (estudante) => `${estudante.nome}  ${estudante.sobrenome}`
    )
  );
};

// retornaNomeCompletoManha(estudantes)

// 02 - Função para buscar um estudante pelo nome e imprimir a situação dele em cada materia.

const retornaSituacaoEstudante = (arrayDeEstudante, name) => {
  const filtraPelaNome = arrayDeEstudante.find(
    (estudante) => estudante.nome === name
  );
  console.log(
    filtraPelaNome.materias.map(
      (materia) =>
        `${materia.name} ${materia.nota >= 60 ? 'Aprovado' : 'Reprovado'}`
    )
  );
};

retornaSituacaoEstudante(estudantes, 'Natalia');
