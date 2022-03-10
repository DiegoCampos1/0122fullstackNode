const func1 = (num) => num * num;

const func2 = (num1, num2) => num1 + num2;

const resolve = (num1, num2, func1, func2, funcao3) => {
  return funcao3(func2(num1, num2) + func1(num1)); // func3(5 + 4)
  // 9 / 3 = 3
};

const resultado = resolve(2, 3, func1, func2, (num) => num / 3);
console.log(resultado)

// const x = [1, 2, 3, 4, 5];
// const [y, z] = x;
// console.log(y);
// console.log(z);

// const { c, a } = { a: 10, b: 20, c: 30, d: 40 };
// console.log(c);
// console.log(a);


// let numberStore = [0, 1, 2];
// let newNumber = 12;
// numberStore =  [newNumber, ...numberStore] // espalhamento do array anterior
// console.log(numberStore)


// const data = {num1: 10, num2: 3, num3: 9}
// const newData = {...data, num2: 55} // se a chave ja existe anteriormente ela é subscrita, caso não exista é criada uma nova chave
// console.log(newData)

// const {a, c, ...rest} = {a:10, b:20, c: 30, d:40}
// console.log(rest)