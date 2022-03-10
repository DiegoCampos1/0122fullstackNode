const numerosOriginais = [1, 2, 3, 4, 5, -7];

const numerosNegativos = numerosOriginais.map((numero) =>
  numero > 0 ? numero * -1 : numero
);

console.log(numerosNegativos);

console.log(numerosOriginais);

const negativeNumbers = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > 0) {
    negativeNumbers.push(numbers[index] * -1);
  } else {
    negativeNumbers.push(numbers[index]);
  }
}
