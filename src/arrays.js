// ARRAYS

//1. Crie uma função que dobre o numero

function dobrarNumero(numero) {
  return numero * 2;
}

console.log(dobrarNumero(5)); // saída esperada: 10

//Comentário: Nesta function foi usado um laço de repetição para os números que correcem nele. Depois do laço seriam
//multiplicados por dois que assim daria o dobro de cada número do laço sendo retornado pelo array criado que faz a multiplicação.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//2. Crie uma função que receba um array de números como parâmetro e retorne a soma dos valores deste array
function somarNumeros(numeros) {
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);  
}

console.log(somarNumeros([1, 2, 3, 4, 5])); // saída esperada: 15

//Comentário: Nesta function foi usado um laço de repetição para os números que correcem nele junto com numeros o lenght para manipulação  da sequência.
//Depois do laço seriam somados pela variavel soma que pegando os números e fazendo soma + os numeros de i por dois que assim daria a soma.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//3. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números pares
function filtrarNumerosPares(numeros) {
    return numeros.filter(numero => numero % 2 === 0);
};


console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [2, 4, 6, 8]

//Comentário: Nesta function foi usado um laço de repetição para os números que correcem nele junto com numeros o lenght para manipulação  da sequência.
//Depois do laço fiz uma condição para definir os numeros dividindo por 2 e retornando o array depois com apenas os números pares.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4. Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números ímpares.
function filtrarNumerosImpares(numeros) {
  return numeros.filter(numero => numero % 2 != 0);
};


console.log(filtrarNumerosImpares([1, 2, 3, 4, 5, 6, 7, 8])); // saída esperada: [1, 3, 5, 7]

//Comentário: Nesta function foi usado um laço de repetição para os números que correcem nele junto com numeros o lenght para manipulação  da sequência.
//Depois do laço fiz uma condição para definir os numeros dividindo por 2, mas vendo se era diferente ou igual a zero quenos revela os numeros impares e retorna
// o array depois com apenas os números impares.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5.Crie uma função que receba um array de números como parâmetro e retorne outro array contendo apenas os números maiores que 10
function filtrarNumerosMaioresQueDez(numeros) {
  return numeros.filter(numero => numero > 10);
}

console.log(filtrarNumerosMaioresQueDez([5, 10, 15, 20, 25])); // saída esperada: [15, 20, 25]

//Comentário: Nesta function foi usado um laço de repetição para os números que correcem nele junto com numeros o lenght para manipulação  da sequência.
//Depois do laço fiz uma condição para definir os numeros que eram maiores ou iguais a 10, e assim obtive o resultado apenos com os numeros maiores que 10.
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
