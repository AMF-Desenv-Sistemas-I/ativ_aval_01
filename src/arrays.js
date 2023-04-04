// ARRAYS

//1. Crie uma função que dobre o numero

function dobrarNumero(numero) {
  return numero * 2;
}

console.log(dobrarNumero(5)); // saída esperada: 10

//Comentário: Nesta function foi feito um retorno, calculando os numeros por dois que da o dobro.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Crie uma função que receba um array de números como parâmetro e retorne a soma dos valores deste array
function somarNumeros(numeros) {
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);  
}

console.log(somarNumeros([1, 2, 3, 4, 5])); // saída esperada: 15

//Comentário: Nesta foi usado um reduce para pegar todos os elementos e esperar uma regra que na qual é a soma,
//onde foi criado para o retorno o acumulador + o numero pela arrow function.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números pares
function filtrarNumerosPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
};


console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [2, 4, 6, 8]

//Comentário: Foi usado o filter para pegar todos os elementos e por meio do numero pelo % 2 que vai apresentar,
//todos os numeros pares se forem iguais a zero.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números ímpares.
function filtrarNumerosImpares(numeros) {
  return numeros.filter(numero => numero % 2 != 0);
};


console.log(filtrarNumerosImpares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [1, 3, 5, 7]

//Comentário: Foi usado o filter para pegar todos os elementos e por meio do numero pelo % 2 que vai apresentar,
//todos os numeros impares se forem diferentes ou iguais a zero.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números maiores que 10
function filtrarNumerosMaioresQueDez(numeros) {
  return numeros.filter(numero => numero > 10);
}

console.log(filtrarNumerosMaioresQueDez([5, 10, 15, 20, 25])); // saída esperada: [15, 20, 25]

//Comentário: Foi usado o filter para pegar todos os elementos e depois na arrow function feita a condição para,
//pegar todos os numeros maiores que 10.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

// 6. Crie uma função que receba dois arrays como parâmetros e retorne outro array contendo a concatenação dos dois primeiros
function concatenarArrays(primeiroArray, segundoArray) {
  const novoArray = primeiroArray.concat(segundoArray);

  return novoArray;
}
//Comentário: foi usado a função concat para concatenar os numeros das duas variaveis.
console.log(concatenarArrays([1, 2, 3], [4, 5, 6])); // saída esperada: [1, 2, 3, 4, 5, 6]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

export { dobrarNumero, somarNumeros, filtrarNumerosPares, filtrarNumerosImpares, filtrarNumerosMaioresQueDez, concatenarArrays };
